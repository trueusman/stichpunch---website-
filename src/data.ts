import { ServiceItem, CategoryItem, PortfolioItem, FormatDetails } from "./types";

// Import images
import puffLogoImg from "./assets/images/embroidery_puff_logo_1782158585504.jpg";
import jacketBackImg from "./assets/images/embroidery_jacket_back_1782158607392.jpg";
import vectorArtImg from "./assets/images/vector_design_art_1782158629862.jpg";
import beforeAfterImg from "./assets/images/before_after_stitch_1782158648317.jpg";
import patchImg from "./assets/images/embroidered_patch_1782158664945.jpg";
import wilcomDigitizingImg from "./assets/images/wilcom_digitizing_1782163989833.jpg";
import digitizingImg from "./assets/images/digitizing.jpg";
import newDig1Img from "./assets/images/edgfsgfhh digitizing (2).jpg";
import newDig3Img from "./assets/images/imgi_82_logo-digitizing.jpg";
import newDig4Img from "./assets/images/jrfrefihreihfirdigitizng.jpeg";
import newDig5Img from "./assets/images/digitizng logo.jpg";
import newDig6Img from "./assets/images/imgi_165_embroidery-digitizing-1-450x450.jpg";
import jaketBack2Img from "./assets/images/jaket back .jpg";
import digitiz3dPuffImg from "./assets/images/digitiz 3d puff logo.png";
import beforeAfterVectorWebpImg from "./assets/images/before after vector.webp";
import beforeAfterVectorJpgImg from "./assets/images/before after vector.jpg";
import beforeAfterDigImg from "./assets/images/1234 before after digitizng.jpg";
import beforeAfterVec2Img from "./assets/images/123 before after vector2.jpg";
import beforeAfterVec1Img from "./assets/images/123456before after vector1.jpg";
import patchesPngImg from "./assets/images/patches.png";
import vectorJpegImg from "./assets/images/vector.jpeg";
import vector2JpegImg from "./assets/images/vector (2).jpeg";
import vectorArt2Img from "./assets/images/vector art (2).jpg";
import vectorArt3Img from "./assets/images/vector art (3).jpg";
import vectorArt5Img from "./assets/images/vector art 5 .jpg";
import vectorBeforeAfterImg from "./assets/images/vectore before after.jpg";
import patchesImg from "./assets/images/patches.jpg";
import patches2Img from "./assets/images/patches (2).jpg";
import patches1WebpImg from "./assets/images/patches (1).webp";
import patches2WebpImg from "./assets/images/patches (2).webp";
import patches3WebpImg from "./assets/images/patches (3).webp";
import patches12Img from "./assets/images/12 patches.jpg";
import leatherPatchesImg from "./assets/images/leather PATCHES.jpg";
import pvcPatchesImg from "./assets/images/pvc patches.jpeg";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "digitizing",
    title: "Premium Embroidery Digitizing",
    description: "Transform your logos, drawings, and artwork into precision stitch files ready for embroidery. Backed by mathematical sew-path optimization to run flawlessly without puckering, thread breaks, or alignment drifts.",
    iconName: "Cpu",
    turnaroundTime: "2 to 4 Hours",
    startingPrice: "$15",
    benefits: [
      "Zero puckering guarantee",
      "Optimized stitch directions & densities",
      "Seamless blending & density shading",
      "Includes production-ready DST & EMB formats"
    ],
    features: [
      "Appropriate underlay settings mapping specifically to target fabric type",
      "Manual satin column adjustments and stitch length constraints",
      "Proper pull-compensation calculation prevents circular distortion"
    ]
  },
  {
    id: "vector-art",
    title: "Vector Art Conversion",
    description: "Convert raster sketches, photos, or old blurry low-res graphics into perfect mathematical vector file structures. Vital for screen printing, vinyl routing, oversized printing, and global modern branding.",
    iconName: "Layers",
    turnaroundTime: "2 to 4 Hours",
    startingPrice: "$12",
    benefits: [
      "Infinite scalability without pixelation",
      "Clean, minimal anchor node placement",
      "Perfect color separation for screen setup",
      "Includes AI, SVG, EPS, and high-res PDF formats"
    ],
    features: [
      "100% manual redraw — no generic auto-trace tool noise",
      "Sharp, consistent corner points and mathematically smooth bezier curves",
      "Clean overlapping layout layers organized for immediate production"
    ]
  },
  {
    id: "patches",
    title: "Custom Embroidered & PVC Patches",
    description: "Industrial-grade physical and digital design setups for high-density patches with merrowed borders, iron-on backings, hook-and-loop fasteners, or custom adhesive configurations.",
    iconName: "Shield",
    turnaroundTime: "24 Hours (Digital), 7 Days (Physical)",
    startingPrice: "$25",
    benefits: [
      "Ultra-dense embroidered coverage",
      "Heavy duty wear & weather resistance",
      "Iron-on, Velcro, or Sew-on backings",
      "Free physical sample proofs for volume orders"
    ],
    features: [
      "Robust merrow border digitizing or laser-cut satin piping layouts",
      "Color matching using premium Madeira and Sulky thread catalogs",
      "Detailed visual layout mockup with authentic thread luster simulations"
    ]
  }
];

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: "3d-puff",
    title: "Custom Embroidery Logo",
    tag: "High Density Caps",
    description: "3D foam underlay embroidery.",
    technique: "Foam cutting satin stitches.",
    iconName: "Sparkles",
    imageUrl: digitizingImg
  },
  {
    id: "custom-embroidery",
    title: "Custom Embroidery Logo",
    tag: "Technical Garments",
    description: "Stitch maps for all garment types.",
    technique: "Pull-compensation & lock-down paths.",
    iconName: "Briefcase",
    imageUrl: newDig3Img
  },
  {
    id: "jacket-back",
    title: "Full Jacket Back",
    tag: "Premium Embroidery",
    description: "Full back coverage up to 14 inches.",
    technique: "Tatami fill with directional sweeps.",
    iconName: "Compass",
    imageUrl: jacketBackImg
  },
  {
    id: "custom-vector",
    title: "Custom Vector Conversion",
    tag: "2D/3D Art Layouts",
    description: "Logo & symbol vector redraw.",
    technique: "Bezier curves with custom colors.",
    iconName: "Maximize",
    imageUrl: vectorJpegImg
  },
  {
    id: "applique",
    title: "Custom Patch Design",
    tag: "Patches",
    description: "Custom embroidered & PVC patches with merrowed borders.",
    technique: "Merrowed edges & double lock borders.",
    iconName: "Palette",
    imageUrl: patchImg
  },
  {
    id: "chest-logo",
    title: "Standard Left Chest",
    tag: "Corporate Uniforms",
    description: "Clean 3–4 inch chest placement.",
    technique: "Satin text with light underlays.",
    iconName: "Briefcase",
    imageUrl: wilcomDigitizingImg
  },
  {
    id: "custom-patches",
    title: "Custom Patch Graphics",
    tag: "Collectible Insignias",
    description: "Custom emblems with heavy backing.",
    technique: "Merrowed edges & double lock borders.",
    iconName: "ShieldAlert",
    imageUrl: vectorArtImg
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "port-4",
    title: "Tactical Snapback Dual Puff Logo",
    category: "embroidery",
    imageUrl: puffLogoImg,
    details: "Satin stitch caps with dense dual layers of 3mm high-density puff foam for striking 3D aesthetic definition.",
    stitchCount: "9,800 Stitches",
    colors: 2,
    softwareUsed: "Wilcom E4",
    featured: true
  },
  {
    id: "port-new-dig-1",
    title: "Professional Embroidery Digitizing",
    category: "embroidery",
    imageUrl: digitizingImg,
    details: "Clean production-ready digitizing with optimized stitch paths and proper underlay for flawless machine output.",
    softwareUsed: "Wilcom Embroidery Studio",
    featured: true
  },
  {
    id: "port-new-dig-3",
    title: "Logo Digitizing",
    category: "embroidery",
    imageUrl: newDig1Img,
    details: "Professional logo digitizing with clean stitch paths and production-ready output.",
    softwareUsed: "Wilcom Embroidery Studio",
    featured: true
  },
  {
    id: "port-new-dig-4",
    title: "Logo Digitizing",
    category: "embroidery",
    imageUrl: newDig1Img,
    details: "High-quality digitizing with optimized density and flawless machine output.",
    softwareUsed: "Wilcom Embroidery Studio",
    featured: true
  },
  {
    id: "port-new-dig-5",
    title: "Logo Digitizing",
    category: "embroidery",
    imageUrl: newDig3Img,
    details: "Precision embroidery digitizing with proper underlay and satin column adjustments.",
    softwareUsed: "Wilcom Embroidery Studio",
    featured: true
  },
  {
    id: "port-new-dig-6",
    title: "Logo Digitizing",
    category: "embroidery",
    imageUrl: newDig4Img,
    details: "Clean digitized logo with optimized stitch directions and zero puckering output.",
    softwareUsed: "Wilcom Embroidery Studio",
    featured: true
  },
  {
    id: "port-new-dig-7",
    title: "Logo Digitizing",
    category: "embroidery",
    imageUrl: newDig5Img,
    details: "Professional logo digitizing with clean stitch paths and production-ready output.",
    softwareUsed: "Wilcom Embroidery Studio",
    featured: true
  },
  {
    id: "port-new-dig-8",
    title: "Embroidery Digitizing",
    category: "embroidery",
    imageUrl: newDig6Img,
    details: "High-quality embroidery digitizing with precise density control and flawless stitch output.",
    softwareUsed: "Wilcom Embroidery Studio",
    featured: true
  },
  {
    id: "port-new-dig-9",
    title: "Logo Digitizing",
    category: "embroidery",
    imageUrl: newDig5Img,
    details: "Clean logo digitizing with optimized stitch paths and production-ready output.",
    softwareUsed: "Wilcom Embroidery Studio",
    featured: true
  },
  {
    id: "port-jaket-back-2",
    title: "Full Jacket Back Design",
    category: "embroidery",
    imageUrl: jaketBack2Img,
    details: "Full jacket back embroidery with detailed coverage and premium thread work.",
    softwareUsed: "Wilcom Embroidery Studio",
    featured: true
  },
  {
    id: "port-3d-puff",
    title: "3D Puff Logo",
    category: "embroidery",
    imageUrl: digitiz3dPuffImg,
    details: "3D puff foam embroidery with high-density satin stitches for a bold raised effect on caps and apparel.",
    softwareUsed: "Wilcom Embroidery Studio",
    featured: true
  },
  {
    id: "port-3d-puff-2",
    title: "3D Puff Logo Digitizing",
    category: "embroidery",
    imageUrl: digitiz3dPuffImg,
    details: "Precision 3D puff digitizing with foam underlay and clean satin column stitches.",
    softwareUsed: "Wilcom Embroidery Studio",
    featured: true
  },
  {
    id: "port-1",
    title: "Full Jacket Back Embroidery",
    category: "embroidery",
    imageUrl: jacketBackImg,
    details: "High stitch count full-scale jacket back embroidery. Designed to withstand jeans wash processes without shrinking or wrinkling.",
    stitchCount: "74,200 Stitches",
    colors: 9,
    softwareUsed: "Wilcom Embroidery Studio E4.5",
    featured: false
  },
  {
    id: "port-2",
    title: "Cybernetic Mech Hummingbird Vector",
    category: "vector",
    imageUrl: vectorArtImg,
    details: "100% manual vector trace from a low-res hand-drawn charcoal sketch. Created perfect anchor points for high-definition screen printing.",
    softwareUsed: "Adobe Illustrator CC",
    featured: true
  },
  {
    id: "port-new-vec-1",
    title: "Vector Art Redraw",
    category: "vector",
    imageUrl: vectorJpegImg,
    details: "Manual vector redraw with clean bezier paths, accurate color separation, and scalable output.",
    softwareUsed: "Adobe Illustrator CC",
    featured: true
  },
  {
    id: "port-new-vec-2",
    title: "Complex Vector Conversion",
    category: "vector",
    imageUrl: vector2JpegImg,
    details: "High-detail manual vector conversion ready for screen print, vinyl, and large-format printing.",
    softwareUsed: "Adobe Illustrator CC",
    featured: false
  },
  {
    id: "port-vec-art-2",
    title: "Vector Art Design",
    category: "vector",
    imageUrl: vectorArt2Img,
    details: "Clean manual vector redraw with precise anchor points and vibrant color separation.",
    softwareUsed: "Adobe Illustrator CC",
    featured: true
  },
  {
    id: "port-vec-art-3",
    title: "Vector Art Design",
    category: "vector",
    imageUrl: vectorArt3Img,
    details: "Detailed vector artwork with smooth bezier curves and production-ready output.",
    softwareUsed: "Adobe Illustrator CC",
    featured: true
  },
  {
    id: "port-vec-art-5",
    title: "Vector Art Design",
    category: "vector",
    imageUrl: vectorArt5Img,
    details: "Professional vector conversion with clean paths and accurate color matching.",
    softwareUsed: "Adobe Illustrator CC",
    featured: true
  },
  {
    id: "before-after-vec-webp",
    title: "Vector Art Before & After",
    category: "before_after",
    imageUrl: beforeAfterVectorWebpImg,
    details: "Low-res raster artwork fully redrawn into clean scalable vector — ready for screen print and vinyl.",
    softwareUsed: "Adobe Illustrator CC",
    featured: true,
    beforeAfterType: "vector" as const
  },
  {
    id: "before-after-vec1",
    title: "Vector Restoration",
    category: "before_after",
    imageUrl: beforeAfterVec1Img,
    details: "Manual vector redraw from a worn original — clean paths, accurate colors, print-ready output.",
    softwareUsed: "Adobe Illustrator CC",
    featured: true,
    beforeAfterType: "vector" as const
  },
  {
    id: "before-after-vec2",
    title: "Vector Art Conversion",
    category: "before_after",
    imageUrl: beforeAfterVec2Img,
    details: "Complete vector conversion with smooth bezier curves and perfect color separation.",
    softwareUsed: "Adobe Illustrator CC",
    featured: true,
    beforeAfterType: "vector" as const
  },
  {
    id: "before-after-dig-1",
    title: "Embroidery Digitizing Before & After",
    category: "before_after",
    imageUrl: beforeAfterDigImg,
    details: "Artwork converted into a production-ready embroidery stitch file with optimized density and underlay.",
    softwareUsed: "Wilcom Embroidery Studio",
    featured: true,
    beforeAfterType: "embroidery" as const
  },
  {
    id: "before-after-comparitor",
    title: "Vector Restoration: Low-Res to CNC Ready",
    category: "before_after",
    imageUrl: beforeAfterImg,
    details: "Restructured a highly pixelated retro shield and converted it into pristine geometric vectors for CNC routing and banner printing.",
    softwareUsed: "CorelDRAW Technical Suite",
    featured: true,
    beforeAfterType: "vector" as const
  },
  {
    id: "port-new-ba-1",
    title: "Vector Before & After Restoration",
    category: "before_after",
    imageUrl: vectorBeforeAfterImg,
    details: "Full artwork restoration from a worn original — rebuilt with clean paths and production-ready output.",
    softwareUsed: "Adobe Illustrator CC",
    featured: true,
    beforeAfterType: "vector" as const
  },
  {
    id: "port-patch-png",
    title: "Custom Embroidered Patch",
    category: "patches",
    imageUrl: patchesPngImg,
    details: "Clean embroidered patch with premium thread coverage and finished border.",
    softwareUsed: "Wilcom Embroidery Studio",
    featured: true
  },
  {
    id: "port-patch-12",
    title: "Embroidered Patches Collection",
    category: "patches",
    imageUrl: patches12Img,
    details: "Set of custom embroidered patches with clean coverage and premium merrowed finish.",
    softwareUsed: "Wilcom Embroidery Studio",
    featured: true
  },
  {
    id: "port-patch-1",
    title: "Custom Embroidered Patch",
    category: "patches",
    imageUrl: patches1WebpImg,
    details: "Premium embroidered patch with merrowed border and dense coverage for long-lasting wear.",
    softwareUsed: "Wilcom Embroidery Studio",
    featured: true
  },
  {
    id: "port-patch-leather",
    title: "Leather Patches",
    category: "patches",
    imageUrl: leatherPatchesImg,
    details: "Premium leather patch with engraved or embroidered detailing for apparel.",
    softwareUsed: "Wilcom Embroidery Studio",
    featured: true
  },
  {
    id: "port-patch-pvc",
    title: "PVC Patches",
    category: "patches",
    imageUrl: pvcPatchesImg,
    details: "Durable PVC rubber patches with vibrant colors and custom backing options.",
    softwareUsed: "Custom PVC Mold Production",
    featured: false
  },
  {
    id: "port-new-patch-2",
    title: "Embroidered Patch Design",
    category: "patches",
    imageUrl: patches2WebpImg,
    details: "Custom patch with clean edge finish and vibrant thread colors.",
    softwareUsed: "Wilcom Embroidery Studio",
    featured: false
  },
  {
    id: "port-new-patch-3",
    title: "Premium Patch Collection",
    category: "patches",
    imageUrl: patches3WebpImg,
    details: "High-density embroidered patches with iron-on backing and double-lock border finish.",
    softwareUsed: "Wilcom Embroidery Studio",
    featured: false
  }
];

export const DIGITIZING_FORMATS: FormatDetails[] = [
  {
    extension: "EMB",
    fullName: "Wilcom Native Object Design",
    description: "The premium master file. Retains true outline curves and editable stitch parameters for perfect size modification.",
    purpose: "Primary Design Storage & Post-Edit modification",
    logoColor: "bg-red-500"
  },
  {
    extension: "DST",
    fullName: "Tajima Industrial Format",
    description: "The global commercial stitch file. Operates natively on Tajima, Barudan, SWF, Melco, and industrial hardware.",
    purpose: "Direct Machine Execution & Production Run",
    logoColor: "bg-blue-600"
  },
  {
    extension: "PDF",
    fullName: "Production Layout Spec Sheets",
    description: "Contains color sequences, design dimensions, estimated stitch count, and thread brand lists for operators.",
    purpose: "Embroidery Quality Verification & Technical Spec Reference",
    logoColor: "bg-amber-500"
  },
  {
    extension: "PNG",
    fullName: "Transparent Stitch Simulation Preview",
    description: "A highly realistic high-resolution digital image modeling thread luster and texture before sewing.",
    purpose: "Instant online client approval and showcase marketing",
    logoColor: "bg-green-600"
  }
];

export const VECTOR_FORMATS: FormatDetails[] = [
  {
    extension: "AI",
    fullName: "Adobe Illustrator Vector Design",
    description: "Standard editable designer file. Preserves full design layout layers, exact paths, and Pantone swatches.",
    purpose: "Comprehensive multi-use design & editing files",
    logoColor: "bg-orange-500"
  },
  {
    extension: "SVG",
    fullName: "Scalable Vector Graphic (W3C standard)",
    description: "Lightweight scalable web asset. Plays natively inside modern browsers, laser cutters, and plotters.",
    purpose: "Modern Web assets, Laser engraving, and Plotter cutting",
    logoColor: "bg-teal-500"
  },
  {
    extension: "EPS",
    fullName: "Encapsulated PostScript Layout",
    description: "Highly compatible legacy vector format supported by vinyl plotting software, screen printers, and engravers.",
    purpose: "Cross-platform industrial printing compatibility",
    logoColor: "bg-indigo-600"
  },
  {
    extension: "PDF",
    fullName: "Vector Screen Presentation Document",
    description: "Encloses vector artwork paths into an easily shareable file format, safe for universal industrial print.",
    purpose: "High Definition universal print output",
    logoColor: "bg-rose-500"
  }
];
