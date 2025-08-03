import React, { useState } from "react";
import "./DatePickerInput.scss";
import { CalendarIcon } from "../Icons";

export interface DatePickerInputProps {
  value?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  value = "",
  placeholder = "dd / mm / yyyy",
  label,
  disabled = false,
  error = false,
  focused = false,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      const newValue = e.target.value;
      setInputValue(newValue);
      onChange?.(newValue);
    }
  };

  const hasValue = inputValue.length > 0;
  const isFocusedState = isFocused || focused;

  const baseClass = "date-picker-input";
  const stateClass = disabled ? "date-picker-input--disabled" : "";
  const errorClass = error ? "date-picker-input--error" : "";
  const focusedClass = isFocusedState ? "date-picker-input--focused" : "";
  const hasValueClass = hasValue ? "date-picker-input--has-value" : "";

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
      {label && <label className="date-picker-input__label">{label}</label>}
      <div className="date-picker-input__container">
        <input
          type="text"
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="date-picker-input__field"
        />
        <div className="date-picker-input__icon">
          <CalendarIcon size={20} />
        </div>
      </div>
    </div>
  );
};

export default DatePickerInput;
