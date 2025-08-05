import React, { useState, useEffect } from "react";
import "./DropdownInput.scss";
import { ChevronDownIcon } from "../Icons";

export interface DropdownInputProps {
  value?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  hovered?: boolean;
  options?: string[];
  isOpen?: boolean;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onHover?: () => void;
  onMouseLeave?: () => void;
  className?: string;
}

const DropdownInput: React.FC<DropdownInputProps> = ({
  value = "",
  placeholder = "Select",
  label,
  disabled = false,
  error = false,
  focused = false,
  hovered = false,
  options = [],
  isOpen = false,
  onChange,
  onFocus,
  onBlur,
  onHover,
  onMouseLeave,
  className = "",
}) => {
  const [isFocused, setIsFocused] = useState(focused);
  const [isHovered, setIsHovered] = useState(hovered);
  const [selectedValue, setSelectedValue] = useState(value);
  const [isClickingInside, setIsClickingInside] = useState(false);

  // Sync with external value prop
  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleFocus = () => {
    console.log("Dropdown handleFocus called, disabled:", disabled);
    if (!disabled) {
      setIsFocused(true);
      onFocus?.();
    }
  };

  const handleBlur = () => {
    console.log(
      "Dropdown handleBlur called, isClickingInside:",
      isClickingInside
    );
    if (!isClickingInside) {
      setIsFocused(false);
      onBlur?.();
    }
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true);
      onHover?.();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onMouseLeave?.();
  };

  const handleOptionClick = (option: string) => {
    console.log("Dropdown option clicked:", option, "disabled:", disabled);
    if (!disabled) {
      setSelectedValue(option);
      onChange?.(option);
    }
  };

  const hasValue = selectedValue.length > 0;
  const isFocusedState = isFocused || focused;
  const isHoveredState = isHovered || hovered;

  const baseClass = "dropdown-input";
  const stateClass = disabled ? "dropdown-input--disabled" : "";
  const errorClass = error ? "dropdown-input--error" : "";
  const focusedClass = isFocusedState ? "dropdown-input--focused" : "";
  const hoveredClass = isHoveredState ? "dropdown-input--hovered" : "";
  const hasValueClass = hasValue ? "dropdown-input--has-value" : "";
  const openClass = isOpen ? "dropdown-input--open" : "";

  const fieldClasses = [
    baseClass,
    stateClass,
    errorClass,
    focusedClass,
    hoveredClass,
    hasValueClass,
    openClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={fieldClasses}>
      {label && <label className="dropdown-input__label">{label}</label>}
      <div
        className="dropdown-input__container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={() => setIsClickingInside(true)}
        onMouseUp={() => setIsClickingInside(false)}
      >
        <div
          className="dropdown-input__field"
          onClick={handleFocus}
          onFocus={handleFocus}
          onBlur={handleBlur}
          tabIndex={disabled ? -1 : 0}
        >
          <span className="dropdown-input__value">
            {hasValue ? selectedValue : placeholder}
          </span>
          <div className="dropdown-input__icon">
            <ChevronDownIcon size={16} />
          </div>
        </div>

        {isOpen && options.length > 0 && (
          <div className="dropdown-input__options">
            {options.map((option, index) => (
              <div
                key={index}
                className="dropdown-input__option"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownInput;
