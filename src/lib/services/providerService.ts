import { apiClient } from "../utils/apiClient";
import type { ProviderListResponse } from "../types/provider";

export class ProviderService {
  static async getProviders(): Promise<ProviderListResponse> {
    return apiClient.get<ProviderListResponse>("/providers");
  }
}
