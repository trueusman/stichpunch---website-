import React, { useState, useRef } from "react";
import { Upload, FileText, Check, AlertTriangle, Loader2 } from "lucide-react";

export default function OrderForm() {
  const [activeTab, setActiveTab] = useState<"standard" | "ai_diagnose">("standard");
  
  // Form Status State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Digitizing",
    sizeInches: "3.5",
    placement: "Left Chest",
    notes: "",
    subject: "Inquiry on Embroidery Digitizing"
  });

  // Uploaded file states
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<{
    name: string;
    size: string;
    type: string;
    base64: string;
  } | null>(null);

  // Analysis result states
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Text inputs handler
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Convert uploaded image to base64 for Gemini API transmission
  const processImageFile = (file: File) => {
    if (!file) return;
    
    // Size check (max 6mb is plenty for logo JPGs/PNGs)
    if (file.size > 8 * 1024 * 1024) {
      setErrorNotice("File size exceeds 8MB limit. Please upload a smaller compressed image.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedFile({
        name: file.name,
        size: (file.size / 1024).toFixed(1) + " KB",
        type: file.type,
        base64: reader.result as string
      });
      setErrorNotice(null);
    };
    reader.readAsDataURL(file);
  };

  // Drag and drop event handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processImageFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processImageFile(e.target.files[0]);
    }
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Submit standard contact/quote inquiry
  const handleStandardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setErrorNotice("Please fill out your Name and Email address.");
      return;
    }

    setIsAnalyzing(true);
    setSubmitSuccess(null);
    setErrorNotice(null);

    try {
      const endpoint = activeTab === "standard" ? "/api/submit-contact" : "/api/submit-order";
      const payload = {
        ...formData,
        fileName: uploadedFile?.name,
        fileData: uploadedFile?.base64,
        message: formData.notes || "Inquiring about " + formData.serviceType
      };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitSuccess(data.message);
        // Clear file state on successful submission
        setUploadedFile(null);
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "Digitizing",
          sizeInches: "3.5",
          placement: "Left Chest",
          notes: "",
          subject: "Inquiry on Embroidery Digitizing"
        });
      } else {
        setErrorNotice(data.error || "Failed to submit inquiry. Please try again.");
      }
    } catch (err: any) {
      setErrorNotice("Failed to reach server. Please check your network connection.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-navy-950 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-400 bg-gold-500/10 border border-gold-500/15 px-3 py-1 rounded-full uppercase">
            Order Desk
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3">
            Get an Accurate Quote &amp; Digital File Report
          </h2>
          <p className="text-slate-350 mt-4 text-base">
            Upload your graphics now. Submit a manual request to our digitizing desk.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* Input Form Controls & Drag File Upload */}
          <div className="bg-navy-900 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl space-y-6">
            
            <h3 className="font-display font-bold text-lg text-white pb-3 border-b border-slate-800">
              Contact & Custom Specifications
            </h3>

            {/* Error & Success States */}
            {submitSuccess && (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-xs sm:text-sm flex items-start space-x-3">
                <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{submitSuccess}</span>
              </div>
            )}

            {errorNotice && (
              <div className="bg-amber-500/10 border border-amber-500/20 text-amber-450 p-4 rounded-xl text-xs sm:text-sm flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>{errorNotice}</span>
              </div>
            )}

            <form onSubmit={handleStandardSubmit} className="space-y-4">
              
              {/* Core Client Contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest block mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleTextChange}
                    placeholder="Enter your full name"
                    className="w-full bg-[#0D0D0D] border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 transition-all placeholder:text-slate-550"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest block mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleTextChange}
                    placeholder="name@company.com"
                    className="w-full bg-[#0D0D0D] border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 transition-all placeholder:text-slate-550"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest block mb-1">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleTextChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#0D0D0D] border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 transition-all placeholder:text-slate-550"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest block mb-1">Service Division</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleTextChange}
                    className="w-full bg-[#0D0D0D] border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 transition-all cursor-pointer"
                  >
                    <option value="Digitizing" className="bg-navy-900 text-white">Embroidery Digitizing Only</option>
                    <option value="Vector Art" className="bg-navy-900 text-white">Vector Conversion Only</option>
                    <option value="Both" className="bg-navy-900 text-white">Both (Digitizing + Vector)</option>
                    <option value="Custom Patches" className="bg-navy-900 text-white">Physical / Digital Patches Setup</option>
                  </select>
                </div>
              </div>

              {/* Physical Dimension Spec Settings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest flex items-center justify-between mb-1">
                    <span>Width/Size (Inches)</span>
                    <span className="text-[10px] text-gold-400 font-bold capitalize hover:underline cursor-pointer">Help?</span>
                  </label>
                  <input
                    type="number"
                    name="sizeInches"
                    step="0.1"
                    min="1"
                    max="18"
                    value={formData.sizeInches}
                    onChange={handleTextChange}
                    placeholder="3.5"
                    className="w-full bg-[#0D0D0D] border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 transition-all placeholder:text-slate-555"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest block mb-1">Garment Placement Location</label>
                  <select
                    name="placement"
                    value={formData.placement}
                    onChange={handleTextChange}
                    className="w-full bg-[#0D0D0D] border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 transition-all cursor-pointer"
                  >
                    <option value="Left Chest" className="bg-navy-900 text-white">Left Chest Uniform (Small)</option>
                    <option value="Structured Cap (Front)" className="bg-navy-900 text-white">Structured Cap (Front Center)</option>
                    <option value="Unstructured Cap" className="bg-navy-900 text-white">Unstructured Cap (Floppy Front)</option>
                    <option value="Jacket Back (Oversize)" className="bg-navy-900 text-white">Jacket Back (Oversize Fills)</option>
                    <option value="Sleeve/Cuff" className="bg-navy-900 text-white">Sleeve / Cuff Ribbon Detail</option>
                    <option value="Flat Patch" className="bg-navy-900 text-white">Standalone Merrow Patch Emblem</option>
                  </select>
                </div>
              </div>

              {/* Drag and Drop File Upload Area */}
              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest block mb-1">
                  Upload Logo Photo / Sketch Artwork
                </label>
                
                <div
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  onClick={triggerFileSelect}
                  className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                    dragActive
                      ? "border-gold-500 bg-gold-500/5"
                      : "border-slate-800 bg-[#0D0D0D] hover:border-gold-500"
                  }`}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  
                  {uploadedFile ? (
                    <div className="space-y-2">
                      {/* Logo Preview */}
                      <div className="h-20 w-20 mx-auto rounded-lg overflow-hidden bg-[#1A1A1A] shadow-inner border border-slate-800 flex items-center justify-center">
                        <img
                          src={uploadedFile.base64}
                          alt="preview upload"
                          className="max-h-full max-w-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="text-xs text-slate-300">
                        <span className="font-bold font-mono text-white block truncate max-w-xs mx-auto text-sm">
                          {uploadedFile.name}
                        </span>
                        <span className="text-[10px] text-slate-500 font-bold block mt-0.5">
                          {uploadedFile.size} • {uploadedFile.type}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setUploadedFile(null);
                        }}
                        className="text-[10px] text-red-500 hover:underline hover:text-red-400 font-bold"
                      >
                        Remove file and pick another
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="h-8 w-8 text-slate-500 mx-auto" />
                      <div className="text-xs text-slate-400">
                        <span className="text-white font-bold block text-sm">Drag &amp; drop artwork here</span>
                        <span className="text-slate-500 font-medium block mt-0.5">or click to browse your local device files</span>
                      </div>
                      <span className="text-[10px] text-slate-500 block">Supports high resolution PNG, JPG &amp; SVG up to 8MB</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Text note instructions */}
              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest block mb-1">
                  Fabric Type &amp; Special Design Notes
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleTextChange}
                  placeholder="e.g. 'Embroidering on pique knit polo shirts. Keep small lettering clear and skip the dark background fills.' "
                  className="w-full bg-[#0D0D0D] border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 transition-all placeholder:text-slate-550"
                ></textarea>
              </div>

              {/* Action buttons mapping to tabs */}
              <div className="pt-4 border-t border-slate-800">
                  <button
                    type="submit"
                    disabled={isAnalyzing}
                    className="w-full bg-gold-500 text-white font-bold py-3.5 px-4 rounded-xl text-center text-sm tracking-wide shadow-md hover:bg-gold-600 active:scale-95 transition-all flex items-center justify-center space-x-2 disabled:opacity-75 cursor-pointer"
                  >
                    {isAnalyzing ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <span>Submit Secure Quote Request</span>
                    )}
                  </button>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
