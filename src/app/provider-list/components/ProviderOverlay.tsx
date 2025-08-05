import React, { useState, useEffect } from "react";
import { XMarkIcon } from "../../../components/Icons";
import Button from "../../../components/Button/Button";
import ProviderPurchaseForm from "./ProviderPurchaseForm";

import "./ProviderOverlay.scss";

export interface ProviderOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onFormComplete?: (formData: unknown) => void;
  provider: {
    id: string;
    name: string;
    logo: React.ReactNode;
    price: string;
    period: string;
    description?: string;
    features: {
      [key: string]: {
        value: boolean | string | number;
        context: string | null;
      };
    };
  } | null;
}

const ProviderOverlay: React.FC<ProviderOverlayProps> = ({
  isOpen,
  onClose,
  onFormComplete,
  provider,
}) => {
  const [loadingState, setLoadingState] = useState<
    "connecting" | "retrieving" | "form"
  >("connecting");

  useEffect(() => {
    if (!isOpen || !provider) return;

    // Hide body scrollbar when overlay opens
    document.body.style.overflow = "hidden";

    // Start with connecting state
    setLoadingState("connecting");

    // After 800ms, change to retrieving
    const connectingTimer = setTimeout(() => {
      setLoadingState("retrieving");
    }, 800);

    // After another 800ms, show the form
    const retrievingTimer = setTimeout(() => {
      setLoadingState("form");
    }, 1600);

    return () => {
      clearTimeout(connectingTimer);
      clearTimeout(retrievingTimer);
      // Restore body scrollbar when overlay closes
      document.body.style.overflow = "unset";
    };
  }, [isOpen, provider]);

  if (!isOpen || !provider) {
    return null;
  }

  return (
    <div className="provider-overlay">
      <div className="provider-overlay__backdrop" onClick={onClose} />
      <div className="provider-overlay__content">
        {/* Left side - blurred background */}
        <div className="provider-overlay__left">
          <div className="provider-overlay__blur-content">
            {/* This will be the blurred version of the main content */}
          </div>
        </div>

        {/* Right side - form area */}
        <div className="provider-overlay__right">
          <div className="provider-overlay__header">
            <div className="provider-overlay__header-left">
              {loadingState === "form" && (
                <div className="provider-overlay__form-title-header">
                  {provider.name} Purchase Form
                </div>
              )}
            </div>
            <Button
              variant="subtle-text"
              size="md"
              onClick={onClose}
              icon={<XMarkIcon width={16} height={16} fill="#666" />}
              iconPosition="right"
              className="provider-overlay__disconnect-btn"
            >
              Disconnect
            </Button>
          </div>

          <div className="provider-overlay__body">
            {loadingState === "connecting" && (
              <div className="provider-overlay__loading">
                <div className="provider-overlay__logo-center">
                  {provider.logo}
                </div>
                <div className="provider-overlay__status">Connecting...</div>
              </div>
            )}

            {loadingState === "retrieving" && (
              <div className="provider-overlay__loading">
                <div className="provider-overlay__logo-center">
                  {provider.logo}
                </div>
                <div className="provider-overlay__status">Retrieving...</div>
              </div>
            )}

            {loadingState === "form" && (
              <ProviderPurchaseForm
                provider={provider}
                onContinue={(formData) => {
                  console.log("Form submitted:", formData);
                  onFormComplete?.(formData);
                }}
                onCancel={onClose}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderOverlay;
