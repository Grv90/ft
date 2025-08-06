import { configureStore } from "@reduxjs/toolkit";
import providerPurchaseFormReducer from "./slices/providerPurchaseFormSlice";

export const store = configureStore({
  reducer: {
    providerPurchaseForm: providerPurchaseFormReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
