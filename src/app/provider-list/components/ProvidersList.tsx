import React from "react";
import { CheckmarkIcon, XMarkIcon, ArrowIcon } from "../../../components/Icons";
import Button from "../../../components/Button/Button";
import Chip from "../../../components/Chip/Chip";
import {
  ProvidersListTable,
  ProvidersListTableHeader,
  ProvidersListTableRow,
  ProvidersListTableCell,
  ProvidersListTableHeaderCell,
} from "./ProvidersListTable";
import "./ProvidersList.scss";
import PriceBox from "@/components/PriceBox";
import ProviderOverlay from "./ProviderOverlay";
import { FeedbackModal } from "../../../components/FeedbackModal";
import { useProviderPurchaseFormState } from "../../../store/hooks/useProviderPurchaseFormState";

export interface Provider {
  id: string;
  name: string;
  logo: React.ReactNode;
  price: string;
  period: string;
  timestamp?: string;
  isCheapest?: boolean;
  description?: string;
  features: {
    [key: string]: {
      value: boolean | string | number;
      context: string | null;
    };
  };
}

export interface ProvidersListProps {
  providers: Provider[];
  onProviderAction?: (providerId: string) => void;
}

const ProvidersList: React.FC<ProvidersListProps> = ({
  providers,
  onProviderAction,
}) => {
  const {
    selectedProvider,
    isFormOpen: isOverlayOpen,
    showFeedbackModal,
    open,
    close,
    hideFeedback,
  } = useProviderPurchaseFormState();

  const features = [
    "Yearly Payment",
    "Data",
    "Roaming",
    "Firewall",
    "VPN",
    "24/7 Support",
    "Router",
  ];

  const handleGetStarted = (providerId: string) => {
    const provider = providers.find((p) => p.id === providerId);
    if (provider) {
      // Extract only serializable data for Redux
      const serializableProvider = {
        id: provider.id,
        name: provider.name,
        price: provider.price,
        period: provider.period,
        description: provider.description,
        // We'll handle logo rendering separately
      };
      open(serializableProvider);
    }
    onProviderAction?.(providerId);
  };

  const handleCloseOverlay = () => {
    close();
  };

  const handleFormComplete = (formData: unknown) => {
    console.log("Form completed:", formData);
    // The form completion is now handled by Redux state
  };

  return (
    <div className="providers-list">
      <ProvidersListTable className="providers-list__table">
        <ProvidersListTableHeader className="providers-list__header">
          <ProvidersListTableRow>
            <ProvidersListTableHeaderCell>
              Provider
            </ProvidersListTableHeaderCell>
            {features.map((feature) => (
              <ProvidersListTableHeaderCell key={feature}>
                {feature}
              </ProvidersListTableHeaderCell>
            ))}
          </ProvidersListTableRow>
        </ProvidersListTableHeader>
        <tbody>
          {providers.map((provider) => (
            <ProvidersListTableRow
              key={provider.id}
              className="providers-list__row"
            >
              <ProvidersListTableCell className="providers-list">
                <div className="providers-list__card-content">
                  {/* Row 1 */}
                  <div className="providers-list__card-left">
                    {/* Pill Badge and Logo */}
                    <div className="providers-list__pill-badge-logo">
                      {provider.isCheapest && (
                        <Chip variant="outlined" size="sm">
                          Cheapest
                        </Chip>
                      )}
                      {provider.logo && (
                        <div className="providers-list__logo">
                          {provider.logo}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="providers-list__card-right">
                    {/* Right side text */}
                    {provider.description?.split("\n").map((line, index) => (
                      <p key={index} className="providers-list__text-secondary">
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* Row 2 */}
                  <div className="providers-list__card-left">
                    {/* Price */}
                    <div>
                      <PriceBox
                        price={provider.price}
                        period={provider.period}
                        className="providers-list__price-box"
                      />
                      {provider.timestamp && (
                        <p className="providers-list__timestamp">
                          {provider.timestamp}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="providers-list__card-right providers-list__button-container">
                    {/* Button */}
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => handleGetStarted(provider.id)}
                    >
                      Get Started
                      <ArrowIcon width={16} height={16} fill="white" />
                    </Button>
                  </div>
                </div>
              </ProvidersListTableCell>
              {features.map((feature) => (
                <ProvidersListTableCell key={feature}>
                  <div className="providers-list__cell-content">
                    {(() => {
                      const featureData = provider.features[feature];
                      if (!featureData) {
                        return (
                          <XMarkIcon width={24} height={24} fill="#031934" />
                        );
                      }

                      const { value, context } = featureData;

                      if (typeof value === "boolean") {
                        return value ? (
                          <CheckmarkIcon
                            width={24}
                            height={24}
                            fill="#031934"
                          />
                        ) : (
                          <XMarkIcon width={24} height={24} fill="#031934" />
                        );
                      } else if (
                        typeof value === "string" ||
                        typeof value === "number"
                      ) {
                        // Check if this is a price-like feature (Yearly Payment, Router, etc.)
                        const isPriceFeature =
                          feature === "Yearly Payment" || feature === "Router";

                        if (isPriceFeature && context) {
                          return (
                            <div className="providers-list__feature-content">
                              <PriceBox
                                price={value.toString()}
                                period={`/ ${context}`}
                                className="providers-list__price-box"
                              />
                            </div>
                          );
                        } else {
                          // Regular string/number display
                          return (
                            <div className="providers-list__feature-content">
                              <span className="providers-list__feature-value">
                                {value}
                              </span>
                              {context && (
                                <span className="providers-list__feature-context">
                                  {context}
                                </span>
                              )}
                            </div>
                          );
                        }
                      } else {
                        return (
                          <XMarkIcon width={24} height={24} fill="#031934" />
                        );
                      }
                    })()}
                  </div>
                </ProvidersListTableCell>
              ))}
            </ProvidersListTableRow>
          ))}
        </tbody>
      </ProvidersListTable>

      {/* Provider Overlay */}
      <ProviderOverlay
        isOpen={isOverlayOpen}
        onClose={handleCloseOverlay}
        onFormComplete={handleFormComplete}
      />

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={showFeedbackModal}
        onClose={hideFeedback}
        onSubmit={(message) => {
          console.log("Feedback submitted:", message);
          hideFeedback();
        }}
      />
    </div>
  );
};

export default ProvidersList;
