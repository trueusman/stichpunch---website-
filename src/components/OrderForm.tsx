import React, { useState, useRef } from "react";
import {
  Upload, Check, AlertTriangle, Loader2,
  User, Mail, Phone, Grid2x2, Pencil, Shirt,
  Award, ShieldCheck, Zap, FileText, Send
} from "lucide-react";
import { motion } from "motion/react";

const FEATURES = [
  { icon: <Award className="h-5 w-5" style={{ color: "#f96f1f" }} />, title: "Accurate Pricing", sub: "Transparent & fair quotes" },
  { icon: <ShieldCheck className="h-5 w-5" style={{ color: "#1cb8df" }} />, title: "100% Secure", sub: "Your files are safe with us" },
  { icon: <Zap className="h-5 w-5" style={{ color: "#f96f1f" }} />, title: "Fast Turnaround", sub: "Quick response guaranteed" },
  { icon: <FileText className="h-5 w-5" style={{ color: "#1cb8df" }} />, title: "Detailed Report", sub: "Digital file analysis report" },
];

export default function OrderForm() {
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
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      const res = await fetch("/api/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, fileName: uploadedFile?.name, fileData: uploadedFile?.base64, message: formData.notes || "Inquiring about " + formData.serviceType }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitSuccess(data.message);
        setUploadedFile(null);
        setFormData({ name: "", email: "", phone: "", serviceType: "Digitizing", sizeInches: "3.5", placement: "Left Chest", notes: "" });
      } else {
        setErrorNotice(data.error || "Failed to submit. Please try again.");
      }
    } catch {
      setErrorNotice("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase = "w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-800 outline-none focus:border-[#1cb8df] focus:ring-2 focus:ring-[#1cb8df]/15 transition-all placeholder:text-slate-400";
  const selectBase = "w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-800 outline-none focus:border-[#1cb8df] focus:ring-2 focus:ring-[#1cb8df]/15 transition-all cursor-pointer appearance-none";
  const labelBase = "text-[11px] font-bold text-slate-500 uppercase tracking-widest block mb-1.5";
  const iconWrap = "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400";

  return (
    <section id="contact" className="py-20 scroll-mt-12" style={{ background: "#f4f6fb" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border mb-4"
            style={{ color: "#1B2A6B", borderColor: "#c7d2e8", background: "#fff" }}>
            ORDER DESK
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl leading-tight" style={{ color: "#1B2A6B" }}>
            Get an <span style={{ color: "#f96f1f" }}>Accurate Quote</span> &amp; Digital File Report
          </h2>
          <p className="text-slate-500 mt-3 text-sm sm:text-base">
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

        {/* ── Form Card ── */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* Card Header */}
          <div className="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(28,184,223,0.08)", border: "1px solid rgba(28,184,223,0.2)" }}>
              <User className="h-5 w-5" style={{ color: "#1cb8df" }} />
            </div>
            <div>
              <p className="font-bold text-slate-800 text-base">Contact &amp; Custom Specifications</p>
              <p className="text-xs text-slate-400 mt-0.5">Please provide your details and project requirements.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">

            {/* Alerts */}
            {submitSuccess && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-4 rounded-xl text-sm flex items-start gap-3">
                <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>{submitSuccess}</span>
              </div>
            )}
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
  );
}
