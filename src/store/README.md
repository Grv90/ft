# Redux Store Setup

This directory contains the Redux store setup for the application.

## Structure

```
src/store/
├── index.ts              # Main store configuration
├── ClientProvider.tsx    # Client-side Redux provider
└── README.md             # This file
```

## Store Configuration

The store is configured with Redux Toolkit and includes:

- **Middleware**: Configured with serializable state checks
- **TypeScript**: Full type safety with proper type exports
- **Ready for expansion**: Add reducers as needed

## Provider Setup

The Redux Provider is automatically included in the app layout using a client-side wrapper:

```typescript
// src/app/layout.tsx
import { ClientProvider } from "../store/ClientProvider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
```

## Adding Reducers

When you need to add state management, create a slice and add it to the store:

```typescript
// src/store/slices/exampleSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
  name: "example",
  initialState: {},
  reducers: {
    // Your actions here
  },
});

export default exampleSlice.reducer;
```

Then add it to the store:

```typescript
// src/store/index.ts
import exampleReducer from "./slices/exampleSlice";

export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
  // ... rest of config
});
```

## Features

- ✅ TypeScript support
- ✅ Redux Toolkit integration
- ✅ Client-side rendering support
- ✅ Ready for state management
- ✅ Proper middleware configuration
