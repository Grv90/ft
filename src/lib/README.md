# Library Structure

This directory contains the shared library code for the application, organized into services, types, and utilities.

## Directory Structure

```
src/lib/
├── services/          # API service classes
├── types/            # TypeScript type definitions
├── utils/            # API utilities and helpers
└── README.md         # This file
```

## API Endpoints

### Providers API

#### GET `/api/providers`

Returns a list of all providers.

**Response:**

```typescript
{
  providers: Provider[];
  total: number;
  timestamp: string;
}
```

## Usage Examples

### Using the Provider Service

```typescript
import { ProviderService } from "@/lib/services/providerService";

// Get all providers
const providers = await ProviderService.getProviders();
```

### Using the Custom Hook

```typescript
import { useProvidersApi } from "@/app/provider-list/hooks/useProvidersApi";

const MyComponent = () => {
  const { providers, loading, error, fetchProviders } = useProvidersApi();

  // The hook automatically loads providers on mount
  // You can also manually refresh the data
  const handleRefresh = () => {
    fetchProviders();
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {providers.map((provider) => (
        <div key={provider.id}>{provider.name}</div>
      ))}
    </div>
  );
};
```

## Error Handling

The API includes comprehensive error handling:

- **Network errors** are caught and wrapped in `ApiError`
- **Validation errors** return appropriate HTTP status codes
- **Server errors** are logged and return user-friendly messages

## Type Safety

All API calls are fully typed with TypeScript interfaces defined in `src/api/types/`. This ensures:

- Compile-time checking of request/response shapes
- IntelliSense support in your IDE
- Runtime type safety with proper error handling

## Mock Data

The API currently uses mock data for demonstration purposes. In a production environment, you would:

1. Replace mock data with database queries
2. Add authentication and authorization
3. Implement rate limiting
4. Add caching strategies
5. Set up proper logging and monitoring
