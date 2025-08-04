"use client";

import React from "react";
import { ProvidersList } from "./components";
import Navbar from "../../components/Navbar/Navbar";
import Image from "next/image";
import "./page.scss";

export default function ProviderListPage() {
  const providers = [
    {
      id: "cloudid",
      name: "Cloudid",
      logo: (
        <Image
          src="/images/providers/image1.png"
          alt="Cloudid"
          width={160}
          height={48}
          className="object-contain"
        />
      ),
      price: "$106.88",
      period: "/ mo",
      timestamp: "Retrieved 13 min ago",
      isCheapest: true,
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
      id: "provider2",
      name: "FastNet",
      description: "Your internet provider\nsince 2006",
      logo: (
        <Image
          src="/images/providers/image2.png"
          alt="FastNet"
          width={160}
          height={48}
          className="object-contain"
        />
      ),
      price: "$98.54",
      period: "/ mo",
      timestamp: "Retrieved 5 min ago",
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
      id: "provider3",
      name: "ConnectPlus",
      description: "Stay connected 24/7",
      logo: (
        <Image
          src="/images/providers/image3.png"
          alt="ConnectPlus"
          width={160}
          height={48}
          className="object-contain"
        />
      ),
      price: "$132.36",
      period: "/ mo",
      timestamp: "Retrieved 2 min ago",
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

  const handleProviderAction = (providerId: string) => {
    console.log(`Provider action: ${providerId}`);
    // Handle provider selection, navigation, etc.
  };

  return (
    <div className="provider-list-page">
      <Navbar />
      <div className="provider-list-page__content">
        <div className="provider-list-page__container">
          <ProvidersList
            providers={providers}
            onProviderAction={handleProviderAction}
          />
        </div>
      </div>
    </div>
  );
}
