import React, { useState } from "react";
import "./TextInput.scss";

export interface TextInputProps {
  value?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  hovered?: boolean;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onHover?: () => void;
  onMouseLeave?: () => void;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  value = "",
  placeholder = "Text",
  label,
  disabled = false,
  error = false,
  focused = false,
  hovered = false,
  onChange,
  onFocus,
  onBlur,
  onHover,
  onMouseLeave,
  className = "",
}) => {
  const [isFocused, setIsFocused] = useState(focused);
  const [isHovered, setIsHovered] = useState(hovered);
  const [inputValue, setInputValue] = useState(value);

  const handleFocus = () => {
    if (!disabled) {
      setIsFocused(true);
      onFocus?.();
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      const newValue = e.target.value;
      setInputValue(newValue);
      onChange?.(newValue);
    }
  };

  const hasValue = inputValue.length > 0;
  const isFocusedState = isFocused || focused;
  const isHoveredState = isHovered || hovered;

  const baseClass = "text-input";
  const stateClass = disabled ? "text-input--disabled" : "";
  const errorClass = error ? "text-input--error" : "";
  const focusedClass = isFocusedState ? "text-input--focused" : "";
  const hoveredClass = isHoveredState ? "text-input--hovered" : "";
  const hasValueClass = hasValue ? "text-input--has-value" : "";

  const inputClasses = [
    baseClass,
    stateClass,
    errorClass,
    focusedClass,
    hoveredClass,
    hasValueClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={inputClasses}>
      {label && <label className="text-input__label">{label}</label>}
      <div
        className="text-input__container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <input
          type="text"
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="text-input__field"
        />
      </div>
    </div>
  );
};

export default TextInput;
