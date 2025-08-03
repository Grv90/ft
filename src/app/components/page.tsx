"use client";

import React from "react";
import Button from "../../components/Button/Button";
import PriceBox from "../../components/PriceBox/PriceBox";
import Chip from "../../components/Chip/Chip";
import DatePickerInput from "../../components/DatePickerInput/DatePickerInput";
import DropdownInput from "../../components/DropdownInput/DropdownInput";
import TextInput from "../../components/TextInput/TextInput";
import TextAreaInput from "../../components/TextAreaInput/TextAreaInput";
import Navbar from "../../components/Navbar/Navbar";
import "../../components/Typography/Typography.scss";

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Examples</h3>
                <div className="space-y-4">
                  <h1 className="typography__heading-1">Heading 1</h1>
                  <h2 className="typography__heading-2">Heading 2</h2>
                  <h3 className="typography__heading-3">Heading 3</h3>
                  <h4 className="typography__heading-4">Heading 4</h4>
                  <p className="typography__body">
                    Body text with Gabarito font
                  </p>
                  <p className="typography__body-small">Small text</p>
                  <p className="typography__caption">Caption text</p>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-3">How to Use</h3>
                <div className="space-y-2 text-sm">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-mono text-xs text-gray-600 mb-1">
                      HTML:
                    </p>
                    <code className="text-xs">
                      &lt;h1
                      className=&quot;typography__heading-1&quot;&gt;Heading
                      1&lt;/h1&gt;
                    </code>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-mono text-xs text-gray-600 mb-1">
                      Available Classes:
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>
                        • <code>typography__heading-1</code> - 32px, Bold
                      </li>
                      <li>
                        • <code>typography__heading-2</code> - 24px, Semibold
                      </li>
                      <li>
                        • <code>typography__heading-3</code> - 20px, Semibold
                      </li>
                      <li>
                        • <code>typography__heading-4</code> - 18px, Medium
                      </li>
                      <li>
                        • <code>typography__body</code> - 16px, Normal
                      </li>
                      <li>
                        • <code>typography__body-small</code> - 14px, Normal
                      </li>
                      <li>
                        • <code>typography__caption</code> - 12px, Normal
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Text Input
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-700 mb-3">All States</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Resting</p>
                    <TextInput />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Hover</p>
                    <TextInput hovered />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Has Value</p>
                    <TextInput value="Text" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Focused</p>
                    <TextInput focused />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Error</p>
                    <TextInput value="Text" error />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Disabled</p>
                    <TextInput placeholder="Enter value" disabled />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Disabled + Has Value
                    </p>
                    <TextInput value="Text" disabled />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-3">
                  Interactive Examples
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">With Label</p>
                    <TextInput label="Input Label" placeholder="Type here..." />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Interactive (hover to see effect)
                    </p>
                    <TextInput placeholder="Hover to see border change" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Text Area Input
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-700 mb-3">All States</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Resting</p>
                    <TextAreaInput />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Has Value</p>
                    <TextAreaInput value="Text" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Focused</p>
                    <TextAreaInput focused />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Disabled</p>
                    <TextAreaInput disabled />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Disabled + Has Value
                    </p>
                    <TextAreaInput value="Text" disabled />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Error</p>
                    <TextAreaInput value="Text" error />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Focused + Has Value
                    </p>
                    <TextAreaInput value="Text" focused />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-3">
                  Interactive Examples
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">With Label</p>
                    <TextAreaInput
                      label="Description"
                      placeholder="Write your message..."
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Custom Rows</p>
                    <TextAreaInput rows={6} placeholder="Longer text area..." />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Dropdown Input
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-700 mb-3">All States</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Resting</p>
                    <DropdownInput label="Label" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Has Value</p>
                    <DropdownInput label="Label" value="Text" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Hover</p>
                    <DropdownInput label="Label" hovered />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Focused</p>
                    <DropdownInput label="Label" value="Text" focused />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Disabled</p>
                    <DropdownInput label="Label" disabled />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Disabled + Has Value
                    </p>
                    <DropdownInput label="Label" value="Text" disabled />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Error</p>
                    <DropdownInput label="Label" value="Text" error />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-3">
                  Interactive Examples
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">With Options</p>
                    <DropdownInput
                      label="Select Option"
                      options={[
                        "Option #A",
                        "Option #B",
                        "Option #C",
                        "Option #D",
                      ]}
                      isOpen
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Interactive (hover to see effect)
                    </p>
                    <DropdownInput
                      label="Hover Me"
                      placeholder="Hover to see border change"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Date Picker Input
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-700 mb-3">All States</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Resting</p>
                    <DatePickerInput />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Has Value</p>
                    <DatePickerInput value="10 / 10 / 2025" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Focused</p>
                    <DatePickerInput focused />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Disabled</p>
                    <DatePickerInput disabled />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Disabled + Has Value
                    </p>
                    <DatePickerInput value="10 / 10 / 2025" disabled />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Error</p>
                    <DatePickerInput value="10 / 10 / 2025" error />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Focused + Has Value
                    </p>
                    <DatePickerInput value="10 / 10 / 2025" focused />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-3">
                  Interactive Example
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">With Label</p>
                    <DatePickerInput
                      label="Select Date"
                      placeholder="Choose a date"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Interactive (click to focus)
                    </p>
                    <DatePickerInput placeholder="Click me to focus" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Chips</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-3">All Variants</h3>
                <div className="flex flex-wrap gap-3">
                  <Chip variant="default">Label</Chip>
                  <Chip variant="subtle">Label</Chip>
                  <Chip variant="outlined">Label</Chip>
                  <Chip variant="filled-blue">Label</Chip>
                  <Chip variant="filled-orange">Label</Chip>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Sizes</h3>
                <div className="flex flex-wrap gap-3 items-center">
                  <Chip variant="filled-blue" size="sm">
                    Small
                  </Chip>
                  <Chip variant="filled-blue" size="md">
                    Medium
                  </Chip>
                  <Chip variant="filled-blue" size="lg">
                    Large
                  </Chip>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Interactive</h3>
                <div className="flex flex-wrap gap-3">
                  <Chip
                    variant="outlined"
                    onClick={() => console.log("Clicked!")}
                  >
                    Clickable
                  </Chip>
                  <Chip variant="filled-blue" disabled>
                    Disabled
                  </Chip>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Price Box
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Default</h3>
                <PriceBox price="$106.88" timestamp="Retrieved 13 min ago" />
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">
                  Custom Period
                </h3>
                <PriceBox
                  price="$299.99"
                  period="/ year"
                  timestamp="Updated 2 hours ago"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">No Timestamp</h3>
                <PriceBox price="$19.99" />
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
