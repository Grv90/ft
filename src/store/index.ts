import { configureStore } from "@reduxjs/toolkit";

// Create a dummy reducer to satisfy configureStore requirements
const dummyReducer = (state = {}, action: { type: string }) => state;

export const store = configureStore({
  reducer: {
    dummy: dummyReducer,
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
