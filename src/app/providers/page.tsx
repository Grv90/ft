"use client";

import React from "react";
import { ProvidersList } from "./components";
import Navbar from "../../components/Navbar/Navbar";
import Image from "next/image";
import { useProvidersApi } from "./hooks/useProvidersApi";
import "./page.scss";

export default function ProviderListPage() {
  const { providers, loading, error, fetchProviders } = useProvidersApi();

  // Transform API data to match the component's expected format
  const transformedProviders = providers.map((provider) => ({
    ...provider,
    logo: (
      <Image
        src={provider.logo}
        alt={provider.name}
        width={160}
        height={48}
        className="object-contain"
      />
    ),
  }));

  const handleProviderAction = (providerId: string) => {
    console.log(`Provider action: ${providerId}`);
    // Handle provider selection, navigation, etc.
  };

  // Loading state
  if (loading && providers.length === 0) {
    return (
      <div className="provider-list-page">
        <Navbar />
        <div className="provider-list-page__content">
          <div className="provider-list-page__container">
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading providers...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error && providers.length === 0) {
    return (
      <div className="provider-list-page">
        <Navbar />
        <div className="provider-list-page__content">
          <div className="provider-list-page__container">
            <div className="error-state">
              <h3>Error Loading Providers</h3>
              <p>{error}</p>
              <button onClick={() => fetchProviders()} className="retry-button">
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="provider-list-page">
      <Navbar />
      <div className="provider-list-page__content">
        <div className="provider-list-page__container">
          {loading && (
            <div className="loading-overlay">
              <div className="loading-spinner"></div>
              <p>Updating providers...</p>
            </div>
          )}
          <ProvidersList
            providers={transformedProviders}
            onProviderAction={handleProviderAction}
          />
        </div>
      </div>
    </div>
  );
}
