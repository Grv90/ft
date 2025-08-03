"use client";

import React from "react";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";

export default function ComponentsPage() {
  const buttonVariants = [
    "subtle",
    "primary",
    "primary-flat",
    "dark-primary",
    "subtle-text",
    "primary-text",
    "dark-text",
  ];

  const buttonSizes = ["sm", "md", "lg"];

  const handleClick = (variant: string, size: string) => {
    console.log(`Clicked ${variant} button (${size})`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Design System Components
          </h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Buttons
            </h2>
            <div className="grid grid-cols-4 gap-8">
              {/* Header row */}
              <div className="font-semibold text-gray-700">Variant</div>
              <div className="font-semibold text-gray-700 text-center">
                Small
              </div>
              <div className="font-semibold text-gray-700 text-center">
                Medium
              </div>
              <div className="font-semibold text-gray-700 text-center">
                Large
              </div>

              {/* Button rows */}
              {buttonVariants.map((variant) => (
                <React.Fragment key={variant}>
                  <div className="font-medium text-gray-600 capitalize">
                    {variant.replace("-", " ")}
                  </div>
                  {buttonSizes.map((size) => (
                    <div key={size} className="flex justify-center">
                      <Button
                        variant={
                          variant as
                            | "subtle"
                            | "primary"
                            | "primary-flat"
                            | "dark-primary"
                            | "subtle-text"
                            | "primary-text"
                            | "dark-text"
                        }
                        size={size as "sm" | "md" | "lg"}
                        onClick={() => handleClick(variant, size)}
                      >
                        Label
                      </Button>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Typography
            </h2>
            <div className="space-y-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Heading 1</h1>
                <h2 className="text-3xl font-semibold text-gray-900">
                  Heading 2
                </h2>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Heading 3
                </h3>
                <h4 className="text-xl font-medium text-gray-900">Heading 4</h4>
                <p className="text-base text-gray-700">
                  Body text with Gabarito font
                </p>
                <p className="text-sm text-gray-600">Small text</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Colors
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-0 rounded-lg mx-auto mb-2"></div>
                <p className="text-sm font-medium">Blue Primary</p>
                <p className="text-xs text-gray-500">#066BE4</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-mono-primary rounded-lg mx-auto mb-2"></div>
                <p className="text-sm font-medium">Mono Primary</p>
                <p className="text-xs text-gray-500">#031934</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-neutral-0 rounded-lg mx-auto mb-2"></div>
                <p className="text-sm font-medium">Neutral</p>
                <p className="text-xs text-gray-500">#606476</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-surface-2 rounded-lg mx-auto mb-2"></div>
                <p className="text-sm font-medium">Surface</p>
                <p className="text-xs text-gray-500">#E8E9ED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
