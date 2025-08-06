export interface ProviderFeature {
  value: string | number | boolean;
  context: string | null;
}

export interface ProviderFeatures {
  [key: string]: ProviderFeature;
}

export interface Provider {
  id: string;
  name: string;
  logo: string; // URL to logo image
  price: string;
  period: string;
  timestamp: string;
  isCheapest: boolean;
  description: string;
  features: ProviderFeatures;
}

export interface ProviderListResponse {
  providers: Provider[];
  total: number;
  timestamp: string;
}


