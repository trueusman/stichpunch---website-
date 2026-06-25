import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Increase request size limits for handling base64 image uploads
app.use(express.json({ limit: "15mb" }));
app.use(express.urlencoded({ limit: "15mb", extended: true }));

// Lazy initializer for Google GenAI to avoid crashing on launch if the key is missing
let aiClient: GoogleGenAI | null = null;
function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is not configured. Please add it in Settings > Secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Durable wrapper to execute generateContent calls with smart retries and exponential backoff
// for mitigating transient upstream 503 (UNAVAILABLE) or 429 (Resource exhausted) model loads.
async function generateContentWithRetry(ai: GoogleGenAI, params: any, maxRetries = 3, initialDelayMs = 1500): Promise<any> {
  let attempt = 0;
  let delayMs = initialDelayMs;
  while (true) {
    try {
      return await ai.models.generateContent(params);
    } catch (error: any) {
      attempt++;
      const errStr = String(error?.message || error || "");
      const errStatus = error?.status;
      const isTransient = 
        errStr.includes("503") || 
        errStr.includes("UNAVAILABLE") ||
        errStr.includes("429") ||
        errStr.includes("exhausted") ||
        errStatus === 503 ||
        errStatus === 429;

      if (isTransient && attempt <= maxRetries) {
        console.warn(`[StitchCraft AI Retry-Engine] Transient Gemini error encountered (attempt ${attempt}/${maxRetries}). Retrying in ${delayMs}ms. Error:`, errStr);
        await new Promise((resolve) => setTimeout(resolve, delayMs));
        delayMs *= 2; // Exponential backoff scaling
        continue;
      }
      throw error;
    }
  }
}

// Memory database for orders and contact inquiries
const dbMemory = {
  orders: [] as any[],
  contactSubmissions: [] as any[],
};

// API: Check system health
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    hasApiKey: !!process.env.GEMINI_API_KEY,
    timestamp: new Date().toISOString(),
  });
});

// API: Real-time AI Chatbot Assistant
app.post("/api/chat-assistant", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array with valid structure is required." });
    }

    // Initialize AI SDK
    const ai = getAiClient();

    // Map messages specifically matching the role standards of the @google/genai SDK ('user' or 'model')
    const contents = messages.map((m: any) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.text || m.content || "" }]
    }));

    const systemInstruction = 
      "You are the premium, highly intelligent StitchCraft AI Assistant. " +
      "Answer technical questions about custom embroidery, vector art, stitch counts, backing stabilizers, thread types, and design placement immediately. " +
      "STRICT RULES: " +
      "1. Be extremely crisp, direct, and clear. Zero conversational filler, greetings, or sign-offs (Do NOT say 'Hi there', 'Sure', or 'Here is your answer'). " +
      "2. Answer the user's question in the very first sentence. " +
      "3. Limit the entire response to a maximum of 2 sentences, or a clean, highly structured bullet list of 2-3 items. " +
      "4. Always bold critical terms with **double asterisks** for swift scanning. " +
      "5. When relevant, mention StitchCraft's elite 8-12 hour turnaround, zero-puckering alignment, or manual vector redrafting.";

    const response = await generateContentWithRetry(ai, {
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction,
        temperature: 0.1,
        maxOutputTokens: 100,
      },
    });

    return res.json({
      success: true,
      reply: response.text || "I was unable to synthesize a response. What else can I assist you with today?"
    });
  } catch (error: any) {
    console.warn("[StitchCraft AI] Chat API error, routing through expert heuristics fallback.", error?.message);
    
    // Analyze user's last query for premium contextual responses
    const messages = req.body.messages || [];
    const lastUserMsg = messages[messages.length - 1]?.text || "";
    const query = lastUserMsg.toLowerCase();

    let fallbackReply = "That's a great question! For a perfect sew-out, we adjust pull compensation and stabilizers custom to your fabric (such as caps, fleece, or shirts). Feel free to ask about files, prices, or timing!";

    if (query.includes("hi") || query.includes("hello") || query.includes("hey") || query.includes("good morning") || query.includes("good afternoon")) {
      fallbackReply = "Hello! I am the **StitchCraft AI Assistant**. How can I help you with embroidery digitizing or vector art redraw inquiries today?";
    } else if (query.includes("time") || query.includes("turnaround") || query.includes("fast") || query.includes("how long")) {
      fallbackReply = "StitchCraft delivers files in just **8-12 hours**! Extremely fast turnaround keeps your embroidery machines running without delay.";
    } else if (query.includes("price") || query.includes("cost") || query.includes("how much") || query.includes("rate") || query.includes("fee")) {
      fallbackReply = "Our simple flat pricing:\n• **Digitizing Starts at $15**\n• **Manual Vector redrafts start at $12**\n• **Full Jacket Backs start at $80**";
    } else if (query.includes("puff") || query.includes(" foam ") || query.includes("3d") || query.includes("cap")) {
      fallbackReply = "For **3D Puff caps**, we design high-density satin columns with heavy underlays. This cleanly shears the foam for a crisp, elevated look.";
    } else if (query.includes("format") || query.includes("dst") || query.includes("emb") || query.includes("svg") || query.includes("pdf")) {
      fallbackReply = "We deliver ready-to-sew **DST**, **EXP**, and editable **EMB** files for machines, plus scalable **AI**, **SVG**, and high-res **PDF** file formats.";
    } else if (query.includes("puckering") || query.includes("shrink") || query.includes("wrinkle") || query.includes("pucker")) {
      fallbackReply = "To prevent puckering, we apply precise **pull-compensation** based on your garment tissue (knit vs woven) and recommend standard extra cutaway backing.";
    } else if (query.includes("patch") || query.includes("patches") || query.includes("pvc") || query.includes("velcro")) {
      fallbackReply = "We supply premium custom patches (embroidered, pvc, leather, woven) with iron-on, Velcro, or adhesive backings. Upload your design for an estimate!";
    } else if (query.includes("order") || query.includes("quote") || query.includes("submit") || query.includes("start")) {
      fallbackReply = "You can request an instant stitch count and cost estimate by filling our secure **Get Free Quote** form below or dropping your artwork there!";
    } else if (query.includes("help") || query.includes("contact") || query.includes("support") || query.includes("phone") || query.includes("email")) {
      fallbackReply = "Our master digitizers are always online at **wearefivemarketing@gmail.com** or via the **Contact Us** message gateway for specialized project needs!";
    } else if (query.includes("human") || query.includes("agent") || query.includes("person") || query.includes("representative") || query.includes("real")) {
      fallbackReply = "If you'd like to talk with our team, please send us an email at **wearefivemarketing@gmail.com** or use the **Contact Us** form above. We respond within minutes!";
    }

    return res.json({
      success: false,
      isFallback: true,
      reply: fallbackReply
    });
  }
});

// API: Analyze Logo or Artwork using Gemini for Stitch Count, Style & Formatting recommendations
app.post("/api/analyze-artwork", async (req, res) => {
  try {
    const { fileData, fileName, mimeType, serviceType, sizeInches, placement, notes } = req.body;

    if (!fileData) {
      return res.status(400).json({ error: "Missing required file data for analysis." });
    }

    // Prepare system instructions and prompt
    const systemInstruction = 
      "You are an elite, world-class Master Embroidery Digitizer and Vector Graphic Designer. " +
      "Analyze the uploaded logo or artwork carefully. Give accurate estimates based on textile engineering concepts " +
      "and embroidery physics. Ensure the results are formatted as clean JSON. Be honest, structured, and extremely practical.";

    const promptText = `
      You have received an artwork file for diagnostic estimation.
      File info: ${fileName || "User Logo"}, Service requested: ${serviceType || "Digitizing"}, Dimensions: ${sizeInches || "3"}" wide, Placement: ${placement || "Left Chest"}.
      User Notes: "${notes || "No extra notes provided."}"

      Please analyze this request and calculate the embroidery and vector engineering specs.
      Provide the response STRICTLY as a JSON object matching the following TypeScript structure:
      {
        "estimatedStitches": number, // Estimated stitch count (e.g. 7500). If purely Vector service, set to 0.
        "complexityScore": number, // Scale 1 to 10 (1 = text only, 10 = extreme jacket back detail)
        "recommendedTechnique": string, // e.g. "3D Puff", "Flat Satin with Tatami Fill", "Applique Stitched", "Satin stitch text"
        "stabilizerRecommendation": string, // e.g. "Cut-away stabilizer (2.5oz) with temporary spray adhesive"
        "estimatedMachineMinutes": number, // approximate time on standard multi-needle machine running at 800 RPM
        "colorCount": number, // number of distinct colors or thread changes
        "digitizerStrategy": string, // concise summary of your sew path plan, starting point, and lock stitching
        "vectorDetails": {
          "estimatedNodes": number, // approximate vector nodes for a clean redraw
          "layerCount": number, // suggested layer structure for clean screen print or vinyl
          "strategy": string // plan for redrawing curves, overlap setup, trapping, or color separation
        },
        "priceEstimate": number, // Estimated price in USD (e.g., standard flat chest standard digitizing is ~$20-$35, vector redrawing ~$15-$30, jacket back is ~$50-$120)
        "expertReview": string // A warm, helpful 2-3 sentence expert audio/text review of their artwork highlighting tiny print dangers, high density zones, or suggestions
      }
    `;

    // Initialize AI SDK
    const ai = getAiClient();

    // Clean up base64 prefix if present
    const base64CleanData = fileData.replace(/^data:image\/\w+;base64,/, "");

    const imagePart = {
      inlineData: {
        mimeType: mimeType || "image/png",
        data: base64CleanData,
      },
    };

    const textPart = {
      text: promptText,
    };

    const response = await generateContentWithRetry(ai, {
      model: "gemini-3.5-flash",
      contents: { parts: [imagePart, textPart] },
      config: {
        systemInstruction,
        responseMimeType: "application/json",
      },
    });

    const aiText = response.text || "{}";
    const resultObj = JSON.parse(aiText.trim());
    return res.json({ success: true, analysis: resultObj });
  } catch (error: any) {
    console.error("Gemini analysis error:", error);
    
    // Graceful fallback with premium heuristics if AI is offline or key missing
    const size = parseFloat(req.body.sizeInches) || 3.0;
    const placement = req.body.placement || "Left Chest";
    const serviceType = req.body.serviceType || "Digitizing";

    // Heuristic math for mock fallback
    let estStitches = 0;
    let basePrice = 25;
    let complexity = 4;
    let tech = "Flat Satin with Tatami Fill";
    let stabilizer = "Tear-away stabilizer for heavy woven, cut-away otherwise";

    if (serviceType === "Digitizing") {
      // 1500 stitches per square inch rough average for flat fills
      const sqInches = Math.pow(size, 2);
      estStitches = Math.round(sqInches * 1200 + 1500);
      if (placement.toLowerCase().includes("cap")) {
        tech = "Structured Cap Alignment Path, Flat Satin";
        estStitches = Math.round(estStitches * 0.85);
        basePrice = 29;
      } else if (placement.toLowerCase().includes("jacket")) {
        tech = "High-Density Tatami Background with Satin Outlines";
        estStitches = Math.round(sqInches * 1800 + 15000);
        basePrice = 85;
      }
    } else {
      basePrice = size > 5 ? 40 : 20;
    }

    const fallbackAnalysis = {
      estimatedStitches: estStitches,
      complexityScore: complexity,
      recommendedTechnique: tech,
      stabilizerRecommendation: stabilizer,
      estimatedMachineMinutes: estStitches > 0 ? Math.round(estStitches / 750) : 0,
      colorCount: 4,
      digitizerStrategy: `Auto-path starting from bottom-center moving upwards to minimize registration shifting on ${placement}. Apply correct underlay to stabilize fabric.`,
      vectorDetails: {
        estimatedNodes: Math.round(size * 45),
        layerCount: 3,
        strategy: "Ensure perfect curve alignment, path simplification, and slight overlap trapping (0.5pt) to prevent gaps in physical print runs."
      },
      priceEstimate: basePrice,
      expertReview: `[Estimated Heuristically] Your design for ${placement} looks highly feasible! For optimum stitch results, keep text height above 4.5mm. We will prepare your DST file with lock stitches at every color segment.`
    };

    return res.json({
      success: false,
      isFallback: true,
      errorMessage: error?.message || "Internal Service Error",
      analysis: fallbackAnalysis
    });
  }
});

// API: Save customized Orders
app.post("/api/submit-order", (req, res) => {
  const { name, email, phone, sizeInches, serviceType, placement, notes, fileData, fileName } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: "Client Name and Email are required properties." });
  }

  const newOrder = {
    id: "ORD-" + Math.floor(100000 + Math.random() * 900000),
    name,
    email,
    phone: phone || "Not specified",
    sizeInches: sizeInches || "3",
    serviceType: serviceType || "Digitizing",
    placement: placement || "Left Chest",
    notes: notes || "",
    fileName: fileName || "logo.png",
    fileDataLength: fileData ? fileData.length : 0,
    status: "Pending Estimate",
    createdAt: new Date().toISOString(),
  };

  dbMemory.orders.push(newOrder);

  res.json({
    success: true,
    message: "Thank you! Your quote request has been uploaded successfully. Our master digitizers will inspect it shortly.",
    order: newOrder,
  });
});

// API: Save Contact Submissions
app.post("/api/submit-contact", (req, res) => {
  const { name, email, subject, message, fileName, fileData } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, Email, and message body are required." });
  }

  const queryIdx = "INQ-" + Math.floor(10000 + Math.random() * 90000);
  const newSubmission = {
    id: queryIdx,
    name,
    email,
    subject: subject || "General Inquiry",
    message,
    fileName: fileName || null,
    fileDataLength: fileData ? fileData.length : 0,
    createdAt: new Date().toISOString(),
  };

  dbMemory.contactSubmissions.push(newSubmission);

  res.json({
    success: true,
    message: `Message submitted successfully! Check your inbox. Refer to Inquiry Token: ${queryIdx}`,
    submission: newSubmission,
  });
});

// API: Get order dashboard stats
app.get("/api/dashboard-stats", (req, res) => {
  res.json({
    ordersCount: dbMemory.orders.length,
    contactsCount: dbMemory.contactSubmissions.length,
    recentOrders: dbMemory.orders.slice(-5).reverse(),
  });
});

// Setup Vite & static serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // Dynamic import for dev mode to ensure esbuild doesn't package unnecessary stuff
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[StitchCraft Multi-Service Server] Running at: http://localhost:${PORT}`);
    console.log(`[StitchCraft Engine] Environment: ${process.env.NODE_ENV || "development"}`);
  });
}

startServer();
