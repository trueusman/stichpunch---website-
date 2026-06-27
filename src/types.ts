export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
  features: string[];
  turnaroundTime: string;
  startingPrice: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  technique: string;
  iconName: string;
  imageUrl: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "embroidery" | "vector" | "before_after" | "patches";
  imageUrl: string;
  details: string;
  stitchCount?: string;
  colors?: number;
  softwareUsed: string;
  featured?: boolean;
  beforeAfterType?: "embroidery" | "vector";
}

export interface FormatDetails {
  extension: string;
  fullName: string;
  description: string;
  purpose: string;
  logoColor: string;
}

export interface DiagnosticAnalysis {
  estimatedStitches: number;
  complexityScore: number;
  recommendedTechnique: string;
  stabilizerRecommendation: string;
  estimatedMachineMinutes: number;
  colorCount: number;
  digitizerStrategy: string;
  vectorDetails: {
    estimatedNodes: number;
    layerCount: number;
    strategy: string;
  };
  priceEstimate: number;
  expertReview: string;
}
