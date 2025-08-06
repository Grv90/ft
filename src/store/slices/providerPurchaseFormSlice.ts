import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProviderPurchaseFormData {
  // Customer Details (Step 1)
  firstName: string;
  surname: string;
  address: string;
  dataPerMonth: string;
  contractStartDate: string;
  additionalServices: string[];
  currentProvider: string;
  needsRouter: string;

  // Payment Details (Step 2)
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
  cvv: string;
}

export interface ProviderPurchaseFormState {
  // Form data
  formData: ProviderPurchaseFormData;

  // Form flow
  currentStep: number;
  isFormOpen: boolean;
  selectedProvider: {
    id: string;
    name: string;
    price: string;
    period: string;
    description?: string;
    logoUrl?: string;
  } | null;

  // Loading states
  loadingState: "connecting" | "retrieving" | "form";

  // Validation
  errors: Partial<Record<keyof ProviderPurchaseFormData, string>>;

  // Feedback modal
  showFeedbackModal: boolean;
}

const initialState: ProviderPurchaseFormState = {
  formData: {
    firstName: "",
    surname: "",
    address: "",
    dataPerMonth: "",
    contractStartDate: "",
    additionalServices: [],
    currentProvider: "",
    needsRouter: "",
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: "",
  },
  currentStep: 1,
  isFormOpen: false,
  selectedProvider: null,
  loadingState: "connecting",
  errors: {},
  showFeedbackModal: false,
};

const providerPurchaseFormSlice = createSlice({
  name: "providerPurchaseForm",
  initialState,
  reducers: {
    // Form data actions
    updateFormField: (
      state,
      action: PayloadAction<{
        field: keyof ProviderPurchaseFormData;
        value: string | string[];
      }>
    ) => {
      const { field, value } = action.payload;
      if (field === "additionalServices") {
        state.formData[field] = value as string[];
      } else {
        state.formData[field] = value as string;
      }
      // Clear error for this field when user starts typing
      if (state.errors[field]) {
        delete state.errors[field];
      }
    },

    resetForm: (state) => {
      state.formData = initialState.formData;
      state.currentStep = 1;
      state.errors = {};
    },

    // Form flow actions
    openForm: (
      state,
      action: PayloadAction<{
        provider: ProviderPurchaseFormState["selectedProvider"];
      }>
    ) => {
      state.isFormOpen = true;
      state.selectedProvider = action.payload.provider;
      state.currentStep = 1;
      state.loadingState = "connecting";
    },

    closeForm: (state) => {
      state.isFormOpen = false;
      state.selectedProvider = null;
      state.currentStep = 1;
      state.loadingState = "connecting";
      state.errors = {};
    },

    nextStep: (state) => {
      if (state.currentStep < 3) {
        state.currentStep += 1;
      }
    },

    previousStep: (state) => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
      }
    },

    setStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },

    // Loading state actions
    setLoadingState: (
      state,
      action: PayloadAction<ProviderPurchaseFormState["loadingState"]>
    ) => {
      state.loadingState = action.payload;
    },

    // Validation actions
    setFieldError: (
      state,
      action: PayloadAction<{
        field: keyof ProviderPurchaseFormData;
        error: string;
      }>
    ) => {
      const { field, error } = action.payload;
      state.errors[field] = error;
    },

    clearFieldError: (
      state,
      action: PayloadAction<keyof ProviderPurchaseFormData>
    ) => {
      delete state.errors[action.payload];
    },

    // Feedback modal actions
    showFeedbackModal: (state) => {
      state.showFeedbackModal = true;
    },

    hideFeedbackModal: (state) => {
      state.showFeedbackModal = false;
    },

    // Form completion
    completeForm: (state) => {
      state.isFormOpen = false;
      state.selectedProvider = null;
      state.currentStep = 1;
      state.loadingState = "connecting";
      state.errors = {};
      state.showFeedbackModal = true;
      // Reset form data to initial state
      state.formData = initialState.formData;
    },
  },
});

export const {
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
} = providerPurchaseFormSlice.actions;

export default providerPurchaseFormSlice.reducer;
