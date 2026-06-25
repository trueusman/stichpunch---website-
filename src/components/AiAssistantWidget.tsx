import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Sparkles, AlertCircle, RefreshCw, Scissors } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
}

const PRESET_QUESTIONS = [
  "How long takes digitizing?",
  "What file formats are delivered?",
  "How to prevent cap puckering?",
  "What is full jacket back cost?"
];

export default function AiAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNewMessageBadge, setHasNewMessageBadge] = useState(true);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      text: "Hello! I am the **StitchCraft AI Assistant**. Ask me any technical questions about custom embroidery digitizing, stabilizers, thread weights, commercial Tajima DST, or vector formats!"
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Automatically scroll chat body to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
    setHasNewMessageBadge(false);
  };

  const getInstantLocalReply = (query: string): string | null => {
    const q = query.toLowerCase().trim();
    if (q.includes("hi") || q.includes("hello") || q.includes("hey") || q.includes("good morning") || q.includes("good afternoon")) {
      return "Hello! I am the **StitchCraft AI Assistant**. How can I help you with embroidery digitizing or vector art redraw inquiries today?";
    }
    if (q.includes("how long takes") || q.includes("turnaround") || q.includes("how long") || q.includes("time") || q.includes("fast")) {
      return "StitchCraft operates on a **surgical turnaround cycle**! Embroidery files are prepared and delivered in **8 to 12 Hours**, and manual vector redrafts in **6 to 12 Hours**.";
    }
    if (q.includes("file formats") || q.includes("delivered") || q.includes("format") || q.includes("dst") || q.includes("emb")) {
      return "We deliver ready-to-sew **DST**, **EXP**, and editable **EMB** files for machines, plus scalable **AI**, **SVG**, and high-res **PDF** file formats.";
    }
    if (q.includes("prevent cap puckering") || q.includes("puckering") || q.includes("shrink") || q.includes("wrinkle") || q.includes("pucker")) {
      return "To prevent cap puckering, we apply precise **pull-compensation** based on your target fabric thickness (knit vs woven) and recommend standard extra cutaway backing.";
    }
    if (q.includes("jacket back cost") || q.includes("jacket back") || q.includes("price") || q.includes("cost") || q.includes("how much") || q.includes("rate") || q.includes("fee")) {
      return "Our simple flat rates:\n• **Digitizing Starts at $15**\n• **Manual Vector redrafts start at $12**\n• **Full Jacket Backs start at $80**";
    }
    if (q.includes("patch") || q.includes("patches") || q.includes("pvc") || q.includes("velcro")) {
      return "We supply premium custom patches (embroidered, pvc, leather, woven) with iron-on, Velcro, or adhesive backings. Upload your design for an estimate!";
    }
    if (q.includes("order") || q.includes("quote") || q.includes("submit") || q.includes("start")) {
      return "You can request an instant stitch count and cost estimate by filling our secure **Get Free Quote** form below or dropping your artwork there!";
    }
    if (q.includes("help") || q.includes("contact") || q.includes("support") || q.includes("phone") || q.includes("email")) {
      return "Our master digitizers are always online at **wearefivemarketing@gmail.com** or via the **Contact Us** message gateway for specialized project needs!";
    }
    if (q.includes("human") || q.includes("agent") || q.includes("person") || q.includes("representative") || q.includes("real")) {
      return "If you'd like to talk with our team, please send us an email at **wearefivemarketing@gmail.com** or use the **Contact Us** form above. We respond within minutes!";
    }
    if (q.includes("thread") || q.includes("color") || q.includes("madeira") || q.includes("pantone")) {
      return "We specify standard **40wt Rayon** or **Polyester** threads (such as Madeira Classic) by default, and can match exact **Pantone** solid coated PMS colors!";
    }
    if (q.includes("backing") || q.includes("stabilizer") || q.includes("cutaway") || q.includes("tearaway")) {
      return "Our rule of thumb: **Cut-away** backing is best for stretchy fabrics (polos, key t-shirts), while **Tear-away** backing is excellent for stable woven materials (denim, structured caps).";
    }
    if (q.includes("machine") || q.includes("tajima") || q.includes("barudan") || q.includes("brother") || q.includes("singer") || q.includes("melco")) {
      return "Our commercial **DST** and **EXP** stitch files run flawlessly on industrial **Tajima**, **Barudan**, **SWF**, **Melco**, and multi-needle Brother or Janome machines!";
    }
    if (q.includes("vector") || q.includes("tracing") || q.includes("redraw") || q.includes("convert") || q.includes("logo") || q.includes("artwork") || q.includes("low res")) {
      return "Our master designers perform **100% manual vector redraws** to clean up blurry logos into razor-sharp, print-ready **AI**, **SVG**, and high-res **PDF** files with pristine curve tracing!";
    }
    if (q.includes("stitch") || q.includes("stitches") || q.includes("density") || q.includes("count")) {
      return "We optimize density parameters to avoid birdnesting and needle breakages. Standard flat left-chest designs average between **5,000 and 10,000 stitches**.";
    }
    if (q.includes("cap") || q.includes("hat") || q.includes("beanie")) {
      return "For structured caps and hats, we design the sew path **from the center out and bottom up** to restrict canvas shifting and maximize registration alignment.";
    }
    if (q.includes("3d") || q.includes("puff") || q.includes("foam")) {
      return "For premium **3D puff embroidery**, we create specialized column paths with high density and clean end-caps to slice the foam cleanly and raise the stitches!";
    }
    return null;
  };

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsgId = "msg-" + Date.now();
    const newUserMessage: Message = {
      id: userMsgId,
      role: "user",
      text: textToSend
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputText("");
    setIsTyping(true);

    const localMatch = getInstantLocalReply(textToSend);
    if (localMatch) {
      // Short delay for natural interaction simulation, completed instantly
      setTimeout(() => {
        const assistantMsgId = "reply-local-" + Date.now();
        setMessages((prev) => [
          ...prev,
          {
            id: assistantMsgId,
            role: "assistant",
            text: localMatch
          }
        ]);
        setIsTyping(false);
      }, 350);
      return;
    }

    try {
      // Gather relevant conversation layers (e.g. limit to last 10 messages for simplicity and token speed)
      const chatHistoryForApi = [...messages, newUserMessage].slice(-10).map((m) => ({
        role: m.role,
        text: m.text
      }));

      const res = await fetch("/api/chat-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatHistoryForApi })
      });

      const data = await res.json();
      const assistantMsgId = "reply-" + Date.now();
      
      let finalReplyText = data.reply;
      if (!res.ok || !data.success || data.isFallback) {
        // Fallback internally on client to a smart query match or robust contextual greeting
        const textFallback = getInstantLocalReply(textToSend);
        if (textFallback) {
          finalReplyText = textFallback;
        } else if (!finalReplyText) {
          finalReplyText = "That's a great question! For high-quality, zero-pucker embroidery files ($15 flat rate), you can submit your artwork in the form below for a free estimate within minutes!";
        }
      }

      const newAssistantMessage: Message = {
        id: assistantMsgId,
        role: "assistant",
        text: finalReplyText
      };

      setMessages((prev) => [...prev, newAssistantMessage]);
    } catch (err) {
      // Fallback local response if request fails entirely (network or parse error)
      const replyId = "err-" + Date.now();
      const specMatch = getInstantLocalReply(textToSend) || "That's a great technical question! For perfect sewouts, we adjust pull compensation and stabilizers custom to your fabric. Submit your artwork below for an elite manual check within minutes!";
      setMessages((prev) => [
        ...prev,
        {
          id: replyId,
          role: "assistant",
          text: specMatch
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(inputText);
  };

  return (
    <div id="ai-assistant-persistent-bubble" className="fixed bottom-6 right-6 z-50 font-sans select-none">
      
      {/* Floating Launcher Action Icon */}
      {!isOpen && (
        <button
          onClick={handleOpenToggle}
          className="bg-gold-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center relative hover:scale-110 active:scale-95 duration-200 border border-gold-500/20 group cursor-pointer"
          title="Open AI Digitizer Support"
        >
          <Sparkles className="h-6 w-6 text-white group-hover:rotate-12 duration-200" />
          {hasNewMessageBadge && (
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] font-bold font-mono h-5 w-5 rounded-full flex items-center justify-center animate-bounce border-2 border-gold-500">
              1
            </span>
          )}
          <span className="absolute right-full mr-3 bg-[#0D0D0D] text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-800 tracking-wide opacity-0 group-hover:opacity-100 duration-200 pointer-events-none whitespace-nowrap shadow-md">
             StitchCraft AI Expert Support
          </span>
        </button>
      )}

      {/* Expanded Interactive Chat Modal Cabinet */}
      {isOpen && (
        <div className="bg-navy-900 rounded-2xl shadow-2xl border border-slate-800 w-[21rem] sm:w-[24rem] h-[32rem] flex flex-col justify-between overflow-hidden animate-fadeIn">
          
          {/* Header Panel Band */}
          <div className="bg-[#0D0D0D] text-white p-4 flex items-center justify-between border-b border-slate-800 relative">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600" />
            
            <div className="flex items-center space-x-3 mt-1">
              <div className="bg-gold-500 p-2 rounded-xl text-white shadow-md">
                <Scissors className="h-4 w-4 transform -rotate-45" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm tracking-wide text-white">StitchCraft AI Advisor</h4>
                <div className="flex items-center space-x-1.5 mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest text-slate-350 uppercase">Live thread engine</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleOpenToggle}
              className="text-slate-400 hover:text-white p-1 hover:bg-[#1A1A1A] rounded-lg transition-colors cursor-pointer"
              aria-label="Close Assistant support modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Core Chat Bubbles body Container */}
          <div className="flex-grow p-4 overflow-y-auto space-y-3.5 bg-[#0D0D0D] min-h-0">
            {messages.map((m) => {
              const isAssistant = m.role === "assistant";
              return (
                <div
                  key={m.id}
                  className={`flex ${isAssistant ? "justify-start" : "justify-end"} items-start space-x-2`}
                >
                  {isAssistant && (
                    <div className="bg-gold-500/10 text-gold-400 p-1.5 rounded-lg border border-gold-500/20 text-xs font-mono font-bold flex-shrink-0 mt-0.5">
                      AI
                    </div>
                  )}
                  
                  <div className={`max-w-[80%] rounded-2xl p-3.5 text-xs sm:text-xs leading-relaxed shadow-sm ${
                    isAssistant
                      ? "bg-navy-900 text-slate-200 border border-slate-800 rounded-tl-none"
                      : "bg-gold-500 text-white rounded-tr-none"
                  }`}>
                    {/* Render basic bold formatting and bullet lists manually to keep the widget fast and responsive */}
                    {m.text.split("\n").map((line, lIdx) => {
                      const trimmed = line.trim();
                      const isBullet = trimmed.startsWith("•") || trimmed.startsWith("-") || (trimmed.startsWith("*") && !trimmed.startsWith("**"));
                      
                      let cleanLine = line;
                      if (isBullet) {
                        cleanLine = trimmed.replace(/^[•\-*]\s*/, "");
                      }

                      const elements = cleanLine.split("**").map((textPart, pIdx) => {
                        if (pIdx % 2 === 1) {
                          return (
                            <strong key={pIdx} className="text-gold-400 font-extrabold">
                              {textPart}
                            </strong>
                          );
                        }
                        return textPart;
                      });

                      if (isBullet) {
                        return (
                          <div key={lIdx} className="flex items-start space-x-2 my-1 pl-1">
                            <span className="text-gold-400 font-extrabold text-[13px] flex-shrink-0 leading-none mt-0.5">•</span>
                            <span className="flex-1">{elements}</span>
                          </div>
                        );
                      }

                      return (
                        <p key={lIdx} className={lIdx > 0 ? "mt-1.5" : ""}>
                          {elements}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* Simulated Animated typing indicator bubble */}
            {isTyping && (
              <div className="flex justify-start items-center space-x-2 animate-pulse">
                <div className="bg-navy-900 text-gold-400 p-1.5 rounded-lg text-[10px] font-mono font-bold">
                  AI
                </div>
                <div className="bg-navy-900 border border-slate-800 rounded-2xl rounded-tl-none p-3.5 flex items-center space-x-1.5">
                  <span className="h-2 w-2 rounded-full bg-slate-500 animate-bounce" />
                  <span className="h-2 w-2 rounded-full bg-slate-500 animate-bounce [animation-delay:0.2s]" />
                  <span className="h-2 w-2 rounded-full bg-slate-500 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Preset Helper Quick-Click Questions */}
          <div className="p-2 bg-navy-900 border-t border-slate-850 flex gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-thin">
            {PRESET_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(q)}
                className="bg-[#0D0D0D] border border-slate-800 hover:border-gold-500 hover:bg-gold-500/5 text-[10px] text-slate-300 font-medium px-2.5 py-1.5 rounded-lg transition-colors shrink-0 cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Interactive Form Controls message entry bar */}
          <form
            onSubmit={handleFormSubmit}
            className="p-3 bg-navy-900 border-t border-slate-850 flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about thread limits..."
              className="flex-1 bg-[#0D0D0D] border border-slate-800 focus:bg-[#0D0D0D] focus:border-gold-500 text-xs rounded-xl px-3 py-2 outline-none text-white transition-colors"
            />
            
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="bg-gold-500 text-white p-2.5 rounded-xl hover:bg-gold-600 active:scale-95 transition-all text-center flex items-center justify-center disabled:opacity-50 cursor-pointer"
              aria-label="Send message"
            >
              <Send className="h-4 w-4 text-white" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}
