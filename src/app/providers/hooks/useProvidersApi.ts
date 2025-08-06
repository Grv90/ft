import { useState, useEffect } from "react";
import { ProviderService } from "../../../lib/services/providerService";
import type {
  Provider,
  ProviderListResponse,
} from "../../../lib/types/provider";

export const useProvidersApi = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProviders = async () => {
    setLoading(true);
    setError(null);

    try {
      const response: ProviderListResponse =
        await ProviderService.getProviders();
      setProviders(response.providers);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch providers"
      );
      console.error("Error fetching providers:", err);
    } finally {
      setLoading(false);
    }
  };

  // Load providers on mount
  useEffect(() => {
    fetchProviders();
  }, []);

  return {
    providers,
    loading,
    error,
    fetchProviders,
  };
};
