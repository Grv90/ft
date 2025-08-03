import React, { useState } from "react";
import "./TextAreaInput.scss";

export interface TextAreaInputProps {
  value?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  rows?: number;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  value = "",
  placeholder = "Text",
  label,
  disabled = false,
  error = false,
  focused = false,
  rows = 4,
  onChange,
  onFocus,
  onBlur,
  className = "",
}) => {
  const [isFocused, setIsFocused] = useState(focused);
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

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!disabled) {
      const newValue = e.target.value;
      setInputValue(newValue);
      onChange?.(newValue);
    }
  };

  const hasValue = inputValue.length > 0;
  const isFocusedState = isFocused || focused;

  const baseClass = "textarea-input";
  const stateClass = disabled ? "textarea-input--disabled" : "";
  const errorClass = error ? "textarea-input--error" : "";
  const focusedClass = isFocusedState ? "textarea-input--focused" : "";
  const hasValueClass = hasValue ? "textarea-input--has-value" : "";

  const inputClasses = [
    baseClass,
    stateClass,
    errorClass,
    focusedClass,
    hasValueClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={inputClasses}>
      {label && <label className="textarea-input__label">{label}</label>}
      <div className="textarea-input__container">
        <textarea
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="textarea-input__field"
        />
      </div>
    </div>
  );
};

export default TextAreaInput;
