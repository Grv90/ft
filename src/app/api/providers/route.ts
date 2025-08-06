import { NextResponse } from "next/server";
import type {
  Provider,
  ProviderListResponse,
} from "../../../lib/types/provider";

// Mock data - in a real app, this would come from a database
const mockProviders: Provider[] = [
  {
    id: "cloudid",
    name: "Cloudid",
    logo: "/images/providers/image1.png",
    price: "$106.88",
    period: "/ mo",
    timestamp: "Retrieved 13 min ago",
    isCheapest: false,
    description: "Unlimited data for your\n convinience",
    features: {
      "Yearly Payment": { value: 1000, context: "per year" },
      Data: { value: "Unlimited", context: null },
      Roaming: { value: true, context: null },
      Firewall: { value: true, context: null },
      VPN: { value: true, context: null },
      "24/7 Support": { value: true, context: null },
      Router: { value: 12, context: "monthly" },
    },
  },
  {
    id: "pronete",
    name: "Pronete",
    description: "Your internet provider\nsince 2006",
    logo: "/images/providers/image2.png",
    price: "$98.54",
    period: "/ mo",
    timestamp: "Retrieved 5 min ago",
    isCheapest: true,
    features: {
      "Yearly Payment": { value: 900, context: "per year" },
      Data: { value: "30 GB", context: "per month" },
      Roaming: { value: "$100", context: "GB" },
      Firewall: { value: true, context: null },
      VPN: { value: true, context: null },
      "24/7 Support": { value: true, context: null },
      Router: { value: false, context: null },
    },
  },
  {
    id: "tebiobio",
    name: "Tebiobio",
    description: "Stay connected 24/7",
    logo: "/images/providers/image3.png",
    price: "$132.36",
    period: "/ mo",
    timestamp: "Retrieved 2 min ago",
    isCheapest: false,
    features: {
      "Yearly Payment": { value: 1200, context: "per year" },
      Data: { value: "Unlimited", context: null },
      Roaming: { value: true, context: null },
      Firewall: { value: "15", context: "month" },
      VPN: { value: true, context: null },
      "24/7 Support": { value: true, context: null },
      Router: { value: true, context: null },
    },
  },
];

export async function GET() {
  try {
    const response: ProviderListResponse = {
      providers: mockProviders,
      total: mockProviders.length,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching providers:", error);
    return NextResponse.json(
      { error: "Failed to fetch providers" },
      { status: 500 }
    );
  }
}
