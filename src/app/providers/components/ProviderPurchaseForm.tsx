import React from "react";
import Button from "../../../components/Button/Button";
import TextInput from "../../../components/TextInput/TextInput";
import DropdownInput from "../../../components/DropdownInput/DropdownInput";
import DatePickerInput from "../../../components/DatePickerInput/DatePickerInput";
import Chip from "../../../components/Chip/Chip";
import "./ProviderPurchaseForm.scss";
import { useProviderPurchaseForm } from "../hooks/useProviderPurchaseForm";
import type { ProviderPurchaseFormData } from "../../../../store/slices/providerPurchaseFormSlice";

export interface ProviderPurchaseFormProps {
  onContinue: (formData: ProviderPurchaseFormData) => void;
  onCancel: () => void;
}

const ProviderPurchaseForm: React.FC<ProviderPurchaseFormProps> = ({
  onContinue,
  onCancel,
}) => {
  const {
    formData,
    currentStep,
    provider,
    updateFormField,
    handleContinue,
    handleBack,
  } = useProviderPurchaseForm();

  const contractStartDate = "10/10/2025"; // This could be moved to Redux state if needed

  // Local state for dropdown open/close
  const [isProviderDropdownOpen, setIsProviderDropdownOpen] =
    React.useState(false);

  const dataOptions = ["10 Gb", "20 Gb", "30 Gb"];
  const additionalServicesOptions = ["VPN", "Dedicated IP", "24/7 Support"];
  const providerOptions = ["Vodafone", "Spark", "Sky", "My Republic"];
  const routerOptions = ["Yes", "No"];

  const handleInputChange = (
    field: keyof ProviderPurchaseFormData,
    value: string | string[]
  ) => {
    updateFormField(field, value);
  };

  const handleChipToggle = (
    field: keyof ProviderPurchaseFormData,
    value: string
  ) => {
    const currentValues = Array.isArray(formData[field])
      ? (formData[field] as string[])
      : [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    updateFormField(field, newValues);
  };

  const handleSingleChipSelect = (
    field: keyof ProviderPurchaseFormData,
    value: string
  ) => {
    updateFormField(field, value);
  };

  return (
    <div className="provider-purchase-form">
      {currentStep === 1 && (
        <div className="provider-purchase-form__step">
          <div className="provider-purchase-form__section">
            <div className="provider-purchase-form__row">
              <div className="provider-purchase-form__field">
                <label>First name</label>
                <TextInput
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={(value) => handleInputChange("firstName", value)}
                />
              </div>
              <div className="provider-purchase-form__field">
                <label>Surname</label>
                <TextInput
                  placeholder="Enter surname"
                  value={formData.surname}
                  onChange={(value) => handleInputChange("surname", value)}
                />
              </div>
            </div>
          </div>

          <div className="provider-purchase-form__section">
            <div className="provider-purchase-form__field">
              <label>Address</label>
              <TextInput
                placeholder="Enter address"
                value={formData.address}
                onChange={(value) => handleInputChange("address", value)}
              />
            </div>
          </div>

          <div className="provider-purchase-form__section">
            <div className="provider-purchase-form__row">
              <div className="provider-purchase-form__field">
                <label>Data per month</label>
                <div className="provider-purchase-form__chips">
                  {dataOptions.map((option) => (
                    <Chip
                      key={option}
                      variant={
                        formData.dataPerMonth === option
                          ? "filled-blue"
                          : "default"
                      }
                      size="sm"
                      onClick={() =>
                        handleSingleChipSelect("dataPerMonth", option)
                      }
                    >
                      {option}
                    </Chip>
                  ))}
                </div>
              </div>
              <div className="provider-purchase-form__field">
                <label>Contract start date</label>
                <DatePickerInput
                  placeholder="dd / mm / yyyy"
                  value={formData.contractStartDate}
                  onChange={(value) =>
                    handleInputChange("contractStartDate", value)
                  }
                />
              </div>
            </div>
          </div>

          <div className="provider-purchase-form__section">
            <div className="provider-purchase-form__row">
              <div className="provider-purchase-form__field">
                <label>Additional services</label>
                <div className="provider-purchase-form__chips">
                  {additionalServicesOptions.map((option) => (
                    <Chip
                      key={option}
                      variant={
                        formData.additionalServices.includes(option)
                          ? "filled-blue"
                          : "default"
                      }
                      size="sm"
                      onClick={() =>
                        handleChipToggle("additionalServices", option)
                      }
                    >
                      {option}
                    </Chip>
                  ))}
                </div>
              </div>
              <div className="provider-purchase-form__field">
                <label>What is your current Internet provider?</label>
                <DropdownInput
                  placeholder="Select"
                  options={providerOptions}
                  value={formData.currentProvider}
                  isOpen={isProviderDropdownOpen}
                  onFocus={() => {
                    console.log("Dropdown focused, opening...");
                    setIsProviderDropdownOpen(true);
                  }}
                  onBlur={() => {
                    console.log("Dropdown blurred, closing...");
                    setIsProviderDropdownOpen(false);
                  }}
                  onChange={(value) => {
                    console.log("Dropdown value changed:", value);
                    handleInputChange("currentProvider", value);
                    setIsProviderDropdownOpen(false);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="provider-purchase-form__section">
            <div className="provider-purchase-form__field">
              <label>Do you need a router?</label>
              <div className="provider-purchase-form__router-options">
                {routerOptions.map((option) => (
                  <Chip
                    key={option}
                    variant={
                      formData.needsRouter === option
                        ? "filled-blue"
                        : "default"
                    }
                    size="sm"
                    onClick={() =>
                      handleSingleChipSelect("needsRouter", option)
                    }
                  >
                    {option}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="provider-purchase-form__step">
          <div className="provider-purchase-form__section">
            <div className="provider-purchase-form__row">
              <div className="provider-purchase-form__field">
                <label>Card number</label>
                <TextInput
                  placeholder="1234 5678 9101 1121"
                  value={formData.cardNumber}
                  onChange={(value) => handleInputChange("cardNumber", value)}
                />
              </div>
              <div className="provider-purchase-form__field">
                <label>Expiration date</label>
                <DatePickerInput
                  placeholder="mm / yyyy"
                  value={formData.expiryDate}
                  onChange={(value) => handleInputChange("expiryDate", value)}
                />
              </div>
            </div>
          </div>

          <div className="provider-purchase-form__section">
            <div className="provider-purchase-form__row">
              <div className="provider-purchase-form__field">
                <label>Name on card</label>
                <TextInput
                  placeholder="John Dow"
                  value={formData.cardHolderName}
                  onChange={(value) =>
                    handleInputChange("cardHolderName", value)
                  }
                />
              </div>
              <div className="provider-purchase-form__field">
                <label>CVV</label>
                <TextInput
                  placeholder="XXX"
                  value={formData.cvv}
                  onChange={(value) => handleInputChange("cvv", value)}
                />
              </div>
            </div>
          </div>

          <div className="provider-purchase-form__section">
            <div className="provider-purchase-form__privacy">
              <p>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
                <a href="#" className="provider-purchase-form__privacy-link">
                  privacy policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="provider-purchase-form__step">
          <div className="provider-purchase-form__confirmation">
            <div className="provider-purchase-form__confirmation-content">
              <div className="provider-purchase-form__confirmation-message">
                <p>Your contract starts from {contractStartDate}</p>
                <p>
                  {provider?.name} specialists will contact you with further
                  steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="provider-purchase-form__actions">
        {currentStep === 2 && (
          <Button
            variant="subtle"
            size="md"
            onClick={handleBack}
            className="provider-purchase-form__back-btn"
          >
            Back
          </Button>
        )}
        {currentStep === 3 && (
          <Button
            variant="primary"
            size="md"
            onClick={() => {
              console.log("Completing form and showing feedback modal");
              onContinue(formData);
            }}
            className="provider-purchase-form__dashboard-btn"
          >
            Back to Dashboard
          </Button>
        )}
        {currentStep !== 3 && (
          <div className="provider-purchase-form__action-buttons">
            <Button variant="subtle" size="md" onClick={onCancel}>
              Cancel
            </Button>
            <Button variant="primary" size="md" onClick={handleContinue}>
              {currentStep === 1 ? "Continue" : "Confirm & Pay"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProviderPurchaseForm;
