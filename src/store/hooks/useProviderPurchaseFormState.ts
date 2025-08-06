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
  showFeedbackModal,
  hideFeedbackModal,
  completeForm,
} from "../slices/providerPurchaseFormSlice";
import type {
  ProviderPurchaseFormData,
  ProviderPurchaseFormState,
} from "../slices/providerPurchaseFormSlice";

// Main provider purchase form state hook
export const useProviderPurchaseFormState = () => {
  const dispatch = useDispatch();
  const formState = useSelector(
    (state: RootState) => state.providerPurchaseForm
  );

  return {
    ...formState,
    updateField: (
      field: keyof ProviderPurchaseFormData,
      value: string | string[]
    ) => dispatch(updateFormField({ field, value })),
    reset: () => dispatch(resetForm()),
    open: (provider: ProviderPurchaseFormState["selectedProvider"]) =>
      dispatch(openForm({ provider })),
    close: () => dispatch(closeForm()),
    next: () => dispatch(nextStep()),
    previous: () => dispatch(previousStep()),
    setStep: (step: number) => dispatch(setStep(step)),
    setLoadingState: (state: "connecting" | "retrieving" | "form") =>
      dispatch(setLoadingState(state)),
    showFeedback: () => dispatch(showFeedbackModal()),
    hideFeedback: () => dispatch(hideFeedbackModal()),
    complete: () => dispatch(completeForm()),
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
export const useFormSubmission = useProviderPurchaseFormSubmission;
