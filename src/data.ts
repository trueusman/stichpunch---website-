import { ServiceItem, CategoryItem, PortfolioItem, FormatDetails } from "./types";

// Import our beautifully generated images
import puffLogoImg from "./assets/images/embroidery_puff_logo_1782158585504.jpg";
import jacketBackImg from "./assets/images/embroidery_jacket_back_1782158607392.jpg";
import vectorArtImg from "./assets/images/vector_design_art_1782158629862.jpg";
import beforeAfterImg from "./assets/images/before_after_stitch_1782158648317.jpg";
import patchImg from "./assets/images/embroidered_patch_1782158664945.jpg";
import wilcomDigitizingImg from "./assets/images/wilcom_digitizing_1782163989833.jpg";
import dgImg from "./assets/images/dg.jpg";
import dg2Img from "./assets/images/dg (2).jpg";
import degitizingImg from "./assets/images/degitizing.jpg";
import vector1Img from "./assets/images/vector1.jpg";
import vector2Img from "./assets/images/vector2.jpg";
import vector3Img from "./assets/images/vector3.jpg";
import patchesImg from "./assets/images/patches.jpg";
import patches2Img from "./assets/images/patches (2).jpg";
import leatherPatchesImg from "./assets/images/leather PATCHES.jpg";
import pvcPatchesImg from "./assets/images/pvc patches.jpeg";
import vectorImg from "./assets/images/vector.jpg";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "digitizing",
    title: "Premium Embroidery Digitizing",
    description: "Transform your logos, drawings, and artwork into precision stitch files ready for embroidery. Backed by mathematical sew-path optimization to run flawlessly without puckering, thread breaks, or alignment drifts.",
    iconName: "Cpu",
    turnaroundTime: "8 to 12 Hours",
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
    turnaroundTime: "6 to 12 Hours",
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
    imageUrl: dgImg
  },
  {
    id: "custom-embroidery",
    title: "Custom Embroidery Logo",
    tag: "Technical Garments",
    description: "Stitch maps for all garment types.",
    technique: "Pull-compensation & lock-down paths.",
    iconName: "Briefcase",
    imageUrl: dg2Img
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
    imageUrl: vectorImg
  },
  {
    id: "applique",
    title: "Slick Applique Work",
    tag: "Fabric Overlays",
    description: "Fabric overlays for reduced stitch weight.",
    technique: "Tack-down paths & border finishes.",
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
    id: "port-1",
    title: "Supreme Lion Denim Jacket Art",
    category: "embroidery",
    imageUrl: jacketBackImg,
    details: "High stitch count full-scale jacket back embroidery. Designed to withstand jeans wash processes without shrinking or wrinkling.",
    stitchCount: "74,200 Stitches",
    colors: 9,
    softwareUsed: "Wilcom Embroidery Studio E4.5"
  },
  {
    id: "port-2",
    title: "Cybernetic Mech Hummingbird Vector",
    category: "vector",
    imageUrl: vectorArtImg,
    details: "100% manual vector trace from a low-res hand-drawn charcoal sketch. Created perfect anchor points for high-definition screen printing.",
    softwareUsed: "Adobe Illustrator CC"
  },
  {
    id: "port-3",
    title: "Adventure Forest Insignia Patch",
    category: "embroidery",
    imageUrl: patchImg,
    details: "Circular merrowed edge emblem with fully locked borders, optimized for heavy-duty cotton and duck-canvas fabrics.",
    stitchCount: "12,400 Stitches",
    colors: 5,
    softwareUsed: "Pulse Tajima DG16"
  },
  {
    id: "port-4",
    title: "Tactical Snapback Dual Puff Logo",
    category: "embroidery",
    imageUrl: puffLogoImg,
    details: "Satin stitch caps with dense dual layers of 3mm high-density puff foam for striking 3D aesthetic definition.",
    stitchCount: "9,800 Stitches",
    colors: 2,
    softwareUsed: "Wilcom E4"
  },
  {
    id: "before-after-comparitor",
    title: "Vector Restoration: Low-Res to CNC Ready",
    category: "before_after",
    imageUrl: beforeAfterImg,
    details: "Restructured a highly pixelated retro shield and converted it into pristine geometric vectors for CNC routing and banner printing.",
    softwareUsed: "CorelDRAW Technical Suite"
  },
  {
    id: "port-6",
    title: "Custom Digitizing Showcase",
    category: "embroidery",
    imageUrl: degitizingImg,
    details: "Premium digitizing work showcasing clean stitch paths, optimized density, and flawless production-ready output.",
    stitchCount: "18,500 Stitches",
    colors: 6,
    softwareUsed: "Wilcom Embroidery Studio"
  },
  {
    id: "port-7",
    title: "Tom Hoover Showtime — Vector Restoration",
    category: "before_after",
    imageUrl: vector1Img,
    details: "Full vector redraw of a vintage 1979 NHRA Funny Car Champion tee graphic. Restored faded artwork into crisp, screen-print ready vector with accurate colors and clean paths.",
    softwareUsed: "Adobe Illustrator CC"
  },
  {
    id: "port-8",
    title: "Custom Artwork — Before & After Redraw",
    category: "before_after",
    imageUrl: vector2Img,
    details: "Complete vector restoration from a worn low-res original. Rebuilt with precision bezier paths, clean color separation, and production-ready output.",
    softwareUsed: "Adobe Illustrator CC"
  },
  {
    id: "port-9",
    title: "Vector Artwork Conversion",
    category: "vector",
    imageUrl: vector3Img,
    details: "High-detail manual vector redraw with clean paths, accurate color matching, and scalable output ready for screen print and vinyl.",
    softwareUsed: "Adobe Illustrator CC"
  },
  {
    id: "port-patch-1",
    title: "Patches",
    category: "patches",
    imageUrl: patchesImg,
    details: "Custom embroidered patches with clean coverage and premium finish.",
    softwareUsed: "Wilcom Embroidery Studio"
  },
  {
    id: "port-patch-2",
    title: "Patches",
    category: "patches",
    imageUrl: patches2Img,
    details: "High stitch density patch with merrowed border and iron-on backing.",
    softwareUsed: "Wilcom Embroidery Studio"
  },
  {
    id: "port-patch-3",
    title: "Leather Patches",
    category: "patches",
    imageUrl: leatherPatchesImg,
    details: "Premium leather patch with engraved or embroidered detailing for apparel.",
    softwareUsed: "Wilcom Embroidery Studio"
  },
  {
    id: "port-patch-4",
    title: "PVC Patches",
    category: "patches",
    imageUrl: pvcPatchesImg,
    details: "Durable PVC rubber patches with vibrant colors and custom backing options.",
    softwareUsed: "Custom PVC Mold Production"
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
