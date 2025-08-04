"use client";

import React from "react";
import Button from "../../components/Button/Button";
import PriceBox from "../../components/PriceBox/PriceBox";
import Chip from "../../components/Chip/Chip";
import DatePickerInput from "../../components/DatePickerInput/DatePickerInput";
import DropdownInput from "../../components/DropdownInput/DropdownInput";
import TextInput from "../../components/TextInput/TextInput";
import TextAreaInput from "../../components/TextAreaInput/TextAreaInput";
import {
  Table,
  TableRow,
  TableHeader,
  TableCell,
} from "../../components/Table";
import { Card } from "../../components/Card";
import { ArrowIcon } from "../../components/Icons";
import Navbar from "../../components/Navbar/Navbar";
import "../../components/Typography/Typography.scss";
import "./page.scss";

export default function DesignSystemPage() {
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
    <div className="design-system-page">
      <Navbar />
      <div className="design-system-page__container">
        <div className="design-system-page__content">
          <h1 className="design-system-page__title">
            Design System Components
          </h1>

          <div className="design-system-page__section">
            <h2 className="design-system-page__section-title">Buttons</h2>
            <div className="design-system-page__grid-4">
              {/* Header row */}
              <div className="design-system-page__header-cell">Variant</div>
              <div className="design-system-page__header-cell-center">
                Small
              </div>
              <div className="design-system-page__header-cell-center">
                Medium
              </div>
              <div className="design-system-page__header-cell-center">
                Large
              </div>

              {/* Button rows */}
              {buttonVariants.map((variant) => (
                <React.Fragment key={variant}>
                  <div className="design-system-page__variant-label">
                    {variant.replace("-", " ")}
                  </div>
                  {buttonSizes.map((size) => (
                    <div
                      key={size}
                      className="design-system-page__button-center"
                    >
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

          <div className="design-system-page__section">
            <h2 className="design-system-page__section-title">Typography</h2>
            <div className="design-system-page__grid-2">
              <div>
                <h3 className="design-system-page__subsection-title">
                  Examples
                </h3>
                <div className="design-system-page__space-y-4">
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
                <h3 className="design-system-page__subsection-title">
                  How to Use
                </h3>
                <div className="design-system-page__space-y-2">
                  <div className="design-system-page__code-block">
                    <p className="design-system-page__code-label">HTML:</p>
                    <code className="design-system-page__code">
                      &lt;h1
                      className=&quot;typography__heading-1&quot;&gt;Heading
                      1&lt;/h1&gt;
                    </code>
                  </div>
                  <div className="design-system-page__code-block">
                    <p className="design-system-page__code-label">
                      Available Classes:
                    </p>
                    <ul className="design-system-page__code-list">
                      <li className="design-system-page__code-list-item">
                        • <code>typography__heading-1</code> - 32px, Bold
                      </li>
                      <li className="design-system-page__code-list-item">
                        • <code>typography__heading-2</code> - 24px, Semibold
                      </li>
                      <li className="design-system-page__code-list-item">
                        • <code>typography__heading-3</code> - 20px, Semibold
                      </li>
                      <li className="design-system-page__code-list-item">
                        • <code>typography__heading-4</code> - 18px, Medium
                      </li>
                      <li className="design-system-page__code-list-item">
                        • <code>typography__body</code> - 16px, Normal
                      </li>
                      <li className="design-system-page__code-list-item">
                        • <code>typography__body-small</code> - 14px, Normal
                      </li>
                      <li className="design-system-page__code-list-item">
                        • <code>typography__caption</code> - 12px, Normal
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="design-system-page__section">
            <h2 className="design-system-page__section-title">Text Input</h2>
            <div className="design-system-page__grid-2">
              <div>
                <h3 className="design-system-page__subsection-title">
                  All States
                </h3>
                <div className="design-system-page__space-y-4">
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">Resting</p>
                    <TextInput />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">Hover</p>
                    <TextInput hovered />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Has Value
                    </p>
                    <TextInput value="Text" />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">Focused</p>
                    <TextInput focused />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">Error</p>
                    <TextInput value="Text" error />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Disabled
                    </p>
                    <TextInput placeholder="Enter value" disabled />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Disabled + Has Value
                    </p>
                    <TextInput value="Text" disabled />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="design-system-page__subsection-title">
                  Interactive Examples
                </h3>
                <div className="design-system-page__space-y-4">
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      With Label
                    </p>
                    <TextInput label="Input Label" placeholder="Type here..." />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Interactive (hover to see effect)
                    </p>
                    <TextInput placeholder="Hover to see border change" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="design-system-page__section">
            <h2 className="design-system-page__section-title">
              Text Area Input
            </h2>
            <div className="design-system-page__grid-2">
              <div>
                <h3 className="design-system-page__subsection-title">
                  All States
                </h3>
                <div className="design-system-page__space-y-4">
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">Resting</p>
                    <TextAreaInput />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Has Value
                    </p>
                    <TextAreaInput value="Text" />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">Focused</p>
                    <TextAreaInput focused />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Disabled
                    </p>
                    <TextAreaInput disabled />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Disabled + Has Value
                    </p>
                    <TextAreaInput value="Text" disabled />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">Error</p>
                    <TextAreaInput value="Text" error />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Focused + Has Value
                    </p>
                    <TextAreaInput value="Text" focused />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="design-system-page__subsection-title">
                  Interactive Examples
                </h3>
                <div className="design-system-page__space-y-4">
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      With Label
                    </p>
                    <TextAreaInput
                      label="Description"
                      placeholder="Write your message..."
                    />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Custom Rows
                    </p>
                    <TextAreaInput rows={6} placeholder="Longer text area..." />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="design-system-page__section">
            <h2 className="design-system-page__section-title">
              Dropdown Input
            </h2>
            <div className="design-system-page__grid-2">
              <div>
                <h3 className="design-system-page__subsection-title">
                  All States
                </h3>
                <div className="design-system-page__space-y-4">
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">Resting</p>
                    <DropdownInput label="Label" />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Has Value
                    </p>
                    <DropdownInput label="Label" value="Text" />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">Hover</p>
                    <DropdownInput label="Label" hovered />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">Focused</p>
                    <DropdownInput label="Label" value="Text" focused />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Disabled
                    </p>
                    <DropdownInput label="Label" disabled />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Disabled + Has Value
                    </p>
                    <DropdownInput label="Label" value="Text" disabled />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">Error</p>
                    <DropdownInput label="Label" value="Text" error />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="design-system-page__subsection-title">
                  Interactive Examples
                </h3>
                <div className="design-system-page__space-y-4">
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      With Options
                    </p>
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
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
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

          <div className="design-system-page__section">
            <h2 className="design-system-page__section-title">
              Date Picker Input
            </h2>
            <div className="design-system-page__grid-2">
              <div>
                <h3 className="design-system-page__subsection-title">
                  All States
                </h3>
                <div className="design-system-page__space-y-4">
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">Resting</p>
                    <DatePickerInput />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Has Value
                    </p>
                    <DatePickerInput value="10 / 10 / 2025" />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">Focused</p>
                    <DatePickerInput focused />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Disabled
                    </p>
                    <DatePickerInput disabled />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Disabled + Has Value
                    </p>
                    <DatePickerInput value="10 / 10 / 2025" disabled />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">Error</p>
                    <DatePickerInput value="10 / 10 / 2025" error />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Focused + Has Value
                    </p>
                    <DatePickerInput value="10 / 10 / 2025" focused />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="design-system-page__subsection-title">
                  Interactive Example
                </h3>
                <div className="design-system-page__space-y-4">
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      With Label
                    </p>
                    <DatePickerInput
                      label="Select Date"
                      placeholder="Choose a date"
                    />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Interactive (click to focus)
                    </p>
                    <DatePickerInput placeholder="Click me to focus" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="design-system-page__section">
            <h2 className="design-system-page__section-title">
              Table Components
            </h2>
            <div className="design-system-page__grid-2">
              <div>
                <h3 className="design-system-page__subsection-title">
                  Table Cells
                </h3>
                <div className="design-system-page__space-y-4">
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Checkmark Cell
                    </p>
                    <TableCell type="checkmark" />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Price Cell
                    </p>
                    <TableCell type="price" value="$35,000" />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Price with Text
                    </p>
                    <TableCell
                      type="price-with-text"
                      price="$35,000"
                      text="Text"
                    />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Text Cell
                    </p>
                    <TableCell type="text" value="Text" />
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      X Mark Cell
                    </p>
                    <TableCell type="x-mark" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="design-system-page__subsection-title">
                  Complete Table
                </h3>
                <div className="design-system-page__space-y-4">
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Basic Table
                    </p>
                    <Table>
                      <TableRow>
                        <TableCell type="price" value="$35,000" />
                        <TableCell type="price" value="$35,000" />
                      </TableRow>
                    </Table>
                  </div>
                  <div className="design-system-page__example-item">
                    <p className="design-system-page__example-label">
                      Table with Header
                    </p>
                    <Table>
                      <TableRow>
                        <TableHeader>Header</TableHeader>
                        <TableHeader>Header</TableHeader>
                      </TableRow>
                      <TableRow>
                        <TableCell type="price" value="$35,000" />
                        <TableCell type="text" value="Text" />
                      </TableRow>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="design-system-page__section">
            <h2 className="design-system-page__section-title">
              Card Component
            </h2>
            <div className="design-system-page__grid-3">
              <div>
                <h3 className="design-system-page__subsection-title">
                  Default Card
                </h3>
                <Card>
                  <div className="design-system-page__flex-center">
                    <div className="design-system-page__avatar">
                      <span className="design-system-page__avatar-text">C</span>
                    </div>
                    <div>
                      <h3 className="design-system-page__card-title">
                        Cloudid
                      </h3>
                      <div className="design-system-page__price">
                        $106.88
                        <span className="design-system-page__period">/ mo</span>
                      </div>
                      <p className="design-system-page__timestamp">
                        Retrieved 13 min ago
                      </p>
                    </div>
                  </div>
                  <p className="design-system-page__description">
                    Unlimited data for your convenience
                  </p>
                  <div className="design-system-page__button-container">
                    <Button variant="primary" size="sm">
                      Get Started
                    </Button>
                  </div>
                </Card>
              </div>
              <div>
                <h3 className="design-system-page__subsection-title">
                  Compact Card
                </h3>
                <Card variant="compact">
                  <div className="design-system-page__flex-center-small">
                    <div className="design-system-page__avatar-small">
                      <span className="design-system-page__avatar-text-small">
                        C
                      </span>
                    </div>
                    <div>
                      <h3 className="design-system-page__card-title">
                        Cloudid
                      </h3>
                      <div className="design-system-page__price-small">
                        $106.88
                        <span className="design-system-page__period-small">
                          / mo
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div>
                <h3 className="design-system-page__subsection-title">
                  Large Card
                </h3>
                <Card variant="large">
                  <h3 className="design-system-page__card-title-large">
                    Large Content
                  </h3>
                  <p className="design-system-page__description-large">
                    This card has more padding for larger content areas.
                  </p>
                  <div className="design-system-page__flex-gap-2">
                    <Button variant="primary" size="sm">
                      Primary Action
                    </Button>
                    <Button variant="subtle" size="sm">
                      Secondary
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div className="design-system-page__section">
            <h2 className="design-system-page__section-title">Chips</h2>
            <div className="design-system-page__grid-3">
              <div>
                <h3 className="design-system-page__subsection-title">
                  All Variants
                </h3>
                <div className="design-system-page__flex-wrap">
                  <Chip variant="default">Label</Chip>
                  <Chip variant="subtle">Label</Chip>
                  <Chip variant="outlined">Label</Chip>
                  <Chip variant="filled-blue">Label</Chip>
                  <Chip variant="filled-orange">Label</Chip>
                </div>
              </div>
              <div>
                <h3 className="design-system-page__subsection-title">Sizes</h3>
                <div className="design-system-page__flex-wrap-center">
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
                <h3 className="design-system-page__subsection-title">
                  Interactive
                </h3>
                <div className="design-system-page__flex-wrap">
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

          <div className="design-system-page__section">
            <h2 className="design-system-page__section-title">Price Box</h2>
            <div className="design-system-page__grid-3">
              <div>
                <h3 className="design-system-page__subsection-title">
                  Default
                </h3>
                <PriceBox price="$106.88" timestamp="Retrieved 13 min ago" />
              </div>
              <div>
                <h3 className="design-system-page__subsection-title">
                  Custom Period
                </h3>
                <PriceBox
                  price="$299.99"
                  period="/ year"
                  timestamp="Updated 2 hours ago"
                />
              </div>
              <div>
                <h3 className="design-system-page__subsection-title">
                  No Timestamp
                </h3>
                <PriceBox price="$19.99" />
              </div>
            </div>
          </div>

          <div className="design-system-page__section">
            <h2 className="design-system-page__section-title">Colors</h2>
            <div className="design-system-page__grid-4-responsive">
              <div className="design-system-page__text-center">
                <div
                  className="design-system-page__color-swatch"
                  style={{ backgroundColor: "#066BE4" }}
                ></div>
                <p className="design-system-page__color-name">Blue Primary</p>
                <p className="design-system-page__color-hex">#066BE4</p>
              </div>
              <div className="design-system-page__text-center">
                <div
                  className="design-system-page__color-swatch"
                  style={{ backgroundColor: "#031934" }}
                ></div>
                <p className="design-system-page__color-name">Mono Primary</p>
                <p className="design-system-page__color-hex">#031934</p>
              </div>
              <div className="design-system-page__text-center">
                <div
                  className="design-system-page__color-swatch"
                  style={{ backgroundColor: "#606476" }}
                ></div>
                <p className="design-system-page__color-name">Neutral</p>
                <p className="design-system-page__color-hex">#606476</p>
              </div>
              <div className="design-system-page__text-center">
                <div
                  className="design-system-page__color-swatch"
                  style={{ backgroundColor: "#E8E9ED" }}
                ></div>
                <p className="design-system-page__color-name">Surface</p>
                <p className="design-system-page__color-hex">#E8E9ED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
