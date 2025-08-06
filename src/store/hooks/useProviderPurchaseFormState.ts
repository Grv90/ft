import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import {
  updateFormField,
  resetForm,
  openForm,
  closeForm,
  nextStep,
  previousStep,
  setStep,
  setLoadingState,
  setFieldError,
  clearFieldError,
  showFeedbackModal,
  hideFeedbackModal,
  completeForm,
} from "../slices/providerPurchaseFormSlice";
import type { ProviderPurchaseFormData, ProviderPurchaseFormState } from "../slices/providerPurchaseFormSlice";

// Main provider purchase form state hook
export const useProviderPurchaseFormState = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.providerPurchaseForm);

  return {
    ...formState,
    updateField: (field: keyof ProviderPurchaseFormData, value: string | string[]) =>
      dispatch(updateFormField({ field, value })),
    reset: () => dispatch(resetForm()),
    open: (provider: ProviderPurchaseFormState["selectedProvider"]) =>
      dispatch(openForm({ provider })),
    close: () => dispatch(closeForm()),
    next: () => dispatch(nextStep()),
    previous: () => dispatch(previousStep()),
    setStep: (step: number) => dispatch(setStep(step)),
    setLoadingState: (state: "connecting" | "retrieving" | "form") =>
      dispatch(setLoadingState(state)),
    setError: (field: keyof ProviderPurchaseFormData, error: string) =>
      dispatch(setFieldError({ field, error })),
    clearError: (field: keyof ProviderPurchaseFormData) => dispatch(clearFieldError(field)),
    showFeedback: () => dispatch(showFeedbackModal()),
    hideFeedback: () => dispatch(hideFeedbackModal()),
    complete: () => dispatch(completeForm()),
  };
};

// Hook for form validation
export const useProviderPurchaseFormValidation = () => {
  const { formData, errors, currentStep } = useProviderPurchaseFormState();

  const validateStep1 = () => {
    const newErrors: Partial<Record<keyof ProviderPurchaseFormData, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.surname.trim()) {
      newErrors.surname = "Surname is required";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    if (!formData.dataPerMonth) {
      newErrors.dataPerMonth = "Please select data per month";
    }
    if (!formData.contractStartDate.trim()) {
      newErrors.contractStartDate = "Contract start date is required";
    }
    if (!formData.currentProvider) {
      newErrors.currentProvider = "Please select your current provider";
    }
    if (!formData.needsRouter) {
      newErrors.needsRouter = "Please select if you need a router";
    }

    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors: Partial<Record<keyof ProviderPurchaseFormData, string>> = {};

    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required";
    } else if (formData.cardNumber.replace(/\s/g, "").length < 10) {
      newErrors.cardNumber =
        "Please enter a valid card number (at least 10 digits)";
    }

    if (!formData.cardHolderName.trim()) {
      newErrors.cardHolderName = "Name on card is required";
    }

    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = "Expiry date is required";
    } else if (!/^\d{2}\/\d{2,4}$/.test(formData.expiryDate)) {
      newErrors.expiryDate =
        "Please enter expiry date in MM/YY or MM/YYYY format";
    }

    if (!formData.cvv.trim()) {
      newErrors.cvv = "CVV is required";
    } else if (formData.cvv.length < 3) {
      newErrors.cvv = "Please enter a valid CVV (at least 3 digits)";
    }

    return newErrors;
  };

  const isStepValid = (step: number) => {
    if (step === 1) {
      const step1Errors = validateStep1();
      return Object.keys(step1Errors).length === 0;
    }
    if (step === 2) {
      const step2Errors = validateStep2();
      return Object.keys(step2Errors).length === 0;
    }
    return true;
  };

  return {
    validateStep1,
    validateStep2,
    isStepValid,
    errors,
    currentStep,
  };
};

// Hook for form submission
export const useProviderPurchaseFormSubmission = () => {
  const { formData, complete } = useProviderPurchaseFormState();

  const submitForm = async () => {
    try {
      // Here you would typically send the form data to your API
      console.log("Submitting form data:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Complete the form and show feedback modal
      complete();

      return { success: true };
    } catch (error) {
      console.error("Form submission error:", error);
      return { success: false, error };
    }
  };

  return { submitForm };
};

// Legacy exports for backward compatibility
export const useFormState = useProviderPurchaseFormState;
export const useFormValidation = useProviderPurchaseFormValidation;
export const useFormSubmission = useProviderPurchaseFormSubmission;
