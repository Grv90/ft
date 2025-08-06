import { useProviderPurchaseFormState } from "../../../store/hooks/useProviderPurchaseFormState";
import type { ProviderPurchaseFormData } from "../../../store/slices/providerPurchaseFormSlice";

export const useProviderPurchaseForm = () => {
  const {
    formData,
    currentStep,
    selectedProvider: provider,
    updateField,
    next,
    previous,
    setStep,
  } = useProviderPurchaseFormState();

  // Sync form data with Redux state
  const updateFormField = (
    field: keyof ProviderPurchaseFormData,
    value: string | string[]
  ) => {
    updateField(field, value);
  };

  // Handle continue to next step
  const handleContinue = () => {
    next();
  };

  // Handle back to previous step
  const handleBack = () => {
    previous();
  };

  return {
    // Redux state
    formData,
    currentStep,
    provider,

    // Actions
    updateFormField,
    handleContinue,
    handleBack,
    setStep,
  };
};
