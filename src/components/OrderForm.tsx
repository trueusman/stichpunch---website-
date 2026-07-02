import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AnimatePresence, motion } from "motion/react";
import {
  Upload, Check, AlertTriangle, Loader2,
  User, Mail, Phone, Grid2x2, Pencil, Shirt,
  Award, ShieldCheck, Zap, FileText, Send, X
} from "lucide-react";
import embroideryBg from "../assets/images/12 patches.jpg";

const EMAILJS_SERVICE_ID  = "service_6c9s29r";
const EMAILJS_TEMPLATE_ID = "template_j8k2wwo";
const EMAILJS_PUBLIC_KEY  = "FzUIXwgWXTYZq1AYc";

const CLOUDINARY_CLOUD_NAME   = "dthgf2zms";
const CLOUDINARY_UPLOAD_PRESET = "stichpunch_upload";

const FEATURES = [
  { icon: <Award className="h-5 w-5" style={{ color: "#f96f1f" }} />, title: "Accurate Pricing", sub: "Transparent & fair quotes" },
  { icon: <ShieldCheck className="h-5 w-5" style={{ color: "#1cb8df" }} />, title: "100% Secure", sub: "Your files are safe with us" },
  { icon: <Zap className="h-5 w-5" style={{ color: "#f96f1f" }} />, title: "Fast Turnaround", sub: "Quick response guaranteed" },
  { icon: <FileText className="h-5 w-5" style={{ color: "#1cb8df" }} />, title: "Detailed Report", sub: "Digital file analysis report" },
];

export default function OrderForm() {
  // Initialize EmailJS once
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Digitizing",
    sizeInches: "3.5",
    placement: "Left Chest",
    notes: "",
  });

  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<{
    name: string; size: string; type: string; base64: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Upload image to Cloudinary and return public URL
  const uploadToCloudinary = async (base64: string, fileName: string): Promise<string> => {
    const formData = new FormData();
    formData.append("file", base64);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    formData.append("public_id", `orders/${Date.now()}_${fileName}`);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: "POST", body: formData }
    );
    const data = await res.json();
    if (!res.ok) throw new Error(data.error?.message || "Cloudinary upload failed");
    return data.secure_url;
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const processImageFile = (file: File) => {
    if (file.size > 8 * 1024 * 1024) {
      setErrorNotice("File size exceeds 8MB limit.");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedFile({ name: file.name, size: (file.size / 1024).toFixed(1) + " KB", type: file.type, base64: reader.result as string });
      setErrorNotice(null);
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault(); e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(); e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) processImageFile(e.dataTransfer.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) { setErrorNotice("Please fill out your Name and Email."); return; }
    setIsSubmitting(true); setSubmitSuccess(null); setErrorNotice(null);
    try {
      // 1. Upload image to Cloudinary if provided
      let imageUrl = "No file uploaded";
      if (uploadedFile?.base64) {
        imageUrl = await uploadToCloudinary(uploadedFile.base64, uploadedFile.name);
      }

      // 2. Send email via EmailJS with image URL
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:         formData.name,
          from_name:    formData.name,
          from_email:   formData.email,
          phone:        formData.phone || "—",
          service_type: formData.serviceType,
          size_inches:  formData.sizeInches,
          placement:    formData.placement,
          file_name:    uploadedFile?.name || "No file uploaded",
          message: `Email: ${formData.email}
Phone: ${formData.phone || "—"}
Service: ${formData.serviceType}
Size: ${formData.sizeInches}"
Placement: ${formData.placement}
File: ${uploadedFile?.name || "None"}
Image Link: ${imageUrl}
Notes: ${formData.notes || "—"}`,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitSuccess("Thank you! We received your request and will reply within 2–4 hours.");
      setShowPopup(true);
      setUploadedFile(null);
      setFormData({ name: "", email: "", phone: "", serviceType: "Digitizing", sizeInches: "3.5", placement: "Left Chest", notes: "" });
    } catch (err: any) {
      console.error("Submit error:", err);
      const msg = err?.text || err?.message || "";
      
      // Check if it's a Gmail authentication error
      if (msg.includes("Invalid grant") || msg.includes("Gmail")) {
        setErrorNotice("Gmail authentication expired. Please email us directly at sales@stichpunch.com or WhatsApp: +923141162973");
      } else {
        setErrorNotice(`Send failed: ${msg || "Unknown error"}. Please email us at sales@stichpunch.com`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase = "w-full bg-white border-2 border-slate-200 rounded-xl pl-11 pr-4 py-4 text-base text-slate-800 font-medium outline-none focus:border-[#1cb8df] focus:ring-2 focus:ring-[#1cb8df]/20 transition-all placeholder:text-slate-400 shadow-sm";
  const selectBase = "w-full bg-white border-2 border-slate-200 rounded-xl pl-11 pr-4 py-4 text-base text-slate-800 font-medium outline-none focus:border-[#1cb8df] focus:ring-2 focus:ring-[#1cb8df]/20 transition-all cursor-pointer appearance-none shadow-sm";
  const labelBase = "text-xs font-black text-slate-700 uppercase tracking-widest block mb-2";
  const iconWrap = "absolute left-4 top-1/2 -translate-y-1/2 text-slate-500";

  return (
    <>
    <section id="contact" className="py-20 scroll-mt-12 relative overflow-hidden">
      {/* Background Image - More Visible */}
      <div className="absolute inset-0 z-0">
        <img 
          src={embroideryBg} 
          alt="Custom Patches Background" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0" style={{ 
          background: "rgba(255,255,255,0.60)"
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Toggle Buttons - Above Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center justify-center gap-0 bg-slate-100 rounded-full p-1 shadow-lg">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-10 py-3.5 text-base font-bold text-white rounded-full transition-all w-[180px]"
                style={{ background: "#f96f1f" }}
              >
                Get a Quote
              </button>

              <button
                onClick={() => {
                  const emailLink = document.createElement('a');
                  emailLink.href = 'mailto:sales@stichpunch.com';
                  emailLink.click();
                }}
                className="px-10 py-3.5 text-base font-bold text-slate-600 rounded-full transition-all hover:bg-slate-200 w-[180px] text-center"
              >
                Email Us
              </button>
            </div>
          </div>

          <span className="inline-block text-sm font-black tracking-widest uppercase px-5 py-2 rounded-full border-2 mb-5 shadow-sm bg-white"
            style={{ color: "#1B2A6B", borderColor: "#1cb8df" }}>
            ORDER DESK
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl leading-tight drop-shadow-sm" style={{ color: "#1B2A6B" }}>
            Get an <span style={{ color: "#f96f1f" }}>Accurate Quote</span> &amp; Digital File Report
          </h2>
          <p className="text-slate-700 font-medium mt-4 text-base sm:text-lg">
            Upload your graphics now. Submit a manual request to our digitizing desk.
          </p>
        </motion.div>

        {/* ── Feature badges ── */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {FEATURES.map((f, i) => (
            <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-slate-100">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(28,184,223,0.07)" }}>
                {f.icon}
              </div>
              <div>
                <p className="font-bold text-xs" style={{ color: "#1B2A6B" }}>{f.title}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{f.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Form Card with strong glass effect ── */}
        <motion.div
          className="bg-white/85 backdrop-blur-lg rounded-3xl shadow-2xl border-2 border-white/60 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* Card Header with gradient */}
          <div className="flex items-center gap-4 px-6 sm:px-8 py-6 border-b-2 border-slate-200 relative overflow-hidden bg-white">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10"
              style={{ background: "rgba(28,184,223,0.12)", border: "2px solid rgba(28,184,223,0.4)" }}>
              <User className="h-6 w-6" style={{ color: "#1cb8df" }} />
            </div>
            <div className="relative z-10">
              <p className="font-black text-slate-900 text-lg sm:text-xl">Contact &amp; Custom Specifications</p>
              <p className="text-sm text-slate-600 mt-1 font-medium">Please provide your details and project requirements.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">

            {/* Alerts */}
            {errorNotice && (
              <div className="bg-amber-50 border border-amber-200 text-amber-700 p-4 rounded-xl text-sm flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>{errorNotice}</span>
              </div>
            )}

            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelBase}>Your Name <span className="text-red-400">*</span></label>
                <div className="relative">
                  <User className={`h-4 w-4 ${iconWrap}`} />
                  <input type="text" name="name" required value={formData.name}
                    onChange={handleTextChange} placeholder="M. Usman"
                    className={inputBase} />
                </div>
              </div>
              <div>
                <label className={labelBase}>Email Address <span className="text-red-400">*</span></label>
                <div className="relative">
                  <Mail className={`h-4 w-4 ${iconWrap}`} />
                  <input type="email" name="email" required value={formData.email}
                    onChange={handleTextChange} placeholder="truemusman@gmail.com"
                    className={inputBase} />
                </div>
              </div>
            </div>

            {/* Row 2: Phone + Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelBase}>Phone Number (Optional)</label>
                <div className="relative">
                  <Phone className={`h-4 w-4 ${iconWrap}`} />
                  <input type="tel" name="phone" value={formData.phone}
                    onChange={handleTextChange} placeholder="+923141162973"
                    className={inputBase} />
                </div>
              </div>
              <div>
                <label className={labelBase}>Service Division</label>
                <div className="relative">
                  <Grid2x2 className={`h-4 w-4 ${iconWrap}`} />
                  <select name="serviceType" value={formData.serviceType}
                    onChange={handleTextChange} className={selectBase}>
                    <option value="Digitizing">Embroidery Digitizing Only</option>
                    <option value="Vector Art">Vector Conversion Only</option>
                    <option value="Both">Both (Digitizing + Vector)</option>
                    <option value="Custom Patches">Physical / Digital Patches Setup</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Row 3: Size + Placement */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className={labelBase} style={{ marginBottom: 0 }}>Width/Size (Inches)</label>
                  <span className="text-[11px] font-bold cursor-pointer hover:underline" style={{ color: "#1cb8df" }}>Help?</span>
                </div>
                <div className="relative">
                  <Pencil className={`h-4 w-4 ${iconWrap}`} />
                  <input type="number" name="sizeInches" step="0.1" min="1" max="18"
                    value={formData.sizeInches} onChange={handleTextChange} placeholder="3.5"
                    className={inputBase} />
                </div>
              </div>
              <div>
                <label className={labelBase}>Garment Placement Location</label>
                <div className="relative">
                  <Shirt className={`h-4 w-4 ${iconWrap}`} />
                  <select name="placement" value={formData.placement}
                    onChange={handleTextChange} className={selectBase}>
                    <option value="Left Chest">Left Chest Uniform (Small)</option>
                    <option value="Structured Cap (Front)">Structured Cap (Front Center)</option>
                    <option value="Unstructured Cap">Unstructured Cap (Floppy Front)</option>
                    <option value="Jacket Back (Oversize)">Jacket Back (Oversize Fills)</option>
                    <option value="Sleeve/Cuff">Sleeve / Cuff Ribbon Detail</option>
                    <option value="Flat Patch">Standalone Merrow Patch Emblem</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Upload */}
            <div>
              <label className={labelBase}>Upload Logo Photo / Sketch Artwork</label>
              <div
                onDragEnter={handleDrag} onDragOver={handleDrag}
                onDragLeave={handleDrag} onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                  dragActive ? "border-[#1cb8df] bg-[#1cb8df]/5" : "border-slate-200 bg-slate-50 hover:border-[#1cb8df] hover:bg-[#1cb8df]/5"
                }`}
              >
                <input type="file" ref={fileInputRef} onChange={e => e.target.files?.[0] && processImageFile(e.target.files[0])} accept="image/*" className="hidden" />
                {uploadedFile ? (
                  <div className="space-y-2">
                    <div className="h-20 w-20 mx-auto rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center bg-white">
                      <img src={uploadedFile.base64} alt="preview" className="max-h-full max-w-full object-contain" />
                    </div>
                    <p className="font-semibold text-sm text-slate-700">{uploadedFile.name}</p>
                    <p className="text-xs text-slate-400">{uploadedFile.size}</p>
                    <button type="button" onClick={e => { e.stopPropagation(); setUploadedFile(null); }}
                      className="text-xs text-red-400 hover:underline font-semibold">Remove</button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center" style={{ background: "rgba(28,184,223,0.1)" }}>
                      <Upload className="h-6 w-6" style={{ color: "#1cb8df" }} />
                    </div>
                    <p className="font-bold text-sm" style={{ color: "#1cb8df" }}>Drag &amp; drop artwork here</p>
                    <p className="text-xs text-slate-400">or click to browse your local device files</p>
                    <p className="text-[11px] text-slate-400">Supports high resolution PNG, JPG &amp; SVG up to 8MB</p>
                  </div>
                )}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className={labelBase}>Fabric Type &amp; Special Design Notes</label>
              <div className="relative">
                <Pencil className="h-4 w-4 text-slate-400 absolute left-3 top-3.5" />
                <textarea name="notes" rows={3} value={formData.notes} onChange={handleTextChange}
                  placeholder="e.g., Embroidering on pique knit polo shirts. Keep small lettering clear and skip the dark background fills."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-800 outline-none focus:border-[#1cb8df] focus:ring-2 focus:ring-[#1cb8df]/15 transition-all placeholder:text-slate-400 resize-y"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-white text-base tracking-wide shadow-lg transition-all active:scale-[0.98] disabled:opacity-70"
              style={{ background: "#f96f1f" }}
              onMouseEnter={e => (e.currentTarget.style.filter = "brightness(1.08)")}
              onMouseLeave={e => (e.currentTarget.style.filter = "")}
            >
              {isSubmitting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Submit Secure Quote Request
                </>
              )}
            </button>

          </form>
        </motion.div>

      </div>
    </section>

    {/* ── Success Popup ── */}
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

          {/* Card */}
          <motion.div
            className="relative bg-white z-10 rounded-3xl shadow-2xl px-10 py-10 text-center max-w-xs w-full overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            onAnimationComplete={() => {
              // Auto close 3s after lottie has played
              setTimeout(() => setShowPopup(false), 3000);
            }}
          >
            {/* Top gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #f96f1f, #1cb8df)" }} />

            {/* Lottie */}
            <div className="w-48 h-48 mx-auto">
              <DotLottieReact
                src="https://lottie.host/0e3311c7-7452-4615-92f6-74cf0698f41d/Crpo81v7ZH.lottie"
                autoplay
              />
            </div>

            <motion.h3
              className="font-display font-extrabold text-xl mt-2 mb-1"
              style={{ color: "#1B2A6B" }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Quote Submitted!
            </motion.h3>

            <motion.p
              className="text-slate-400 text-xs leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              We'll reply within <span className="font-bold" style={{ color: "#f96f1f" }}>2–4 hours</span>
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
