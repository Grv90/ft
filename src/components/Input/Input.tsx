import React, { forwardRef } from 'react';
import './Input.scss';

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'date';
  size?: 'sm' | 'md' | 'lg';
  state?: 'default' | 'error' | 'success' | 'warning';
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  helperText?: string;
  errorText?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
  name?: string;
  id?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      placeholder,
      value,
      defaultValue,
      type = 'text',
      size = 'md',
      state = 'default',
      disabled = false,
      readonly = false,
      required = false,
      helperText,
      errorText,
      icon,
      iconPosition = 'left',
      onChange,
      onFocus,
      onBlur,
      className = '',
      name,
      id,
    },
    ref
  ) => {
    const baseClass = 'input';
    const sizeClass = `input--${size}`;
    const stateClass = state !== 'default' ? `input--${state}` : '';
    const disabledClass = disabled ? 'input--disabled' : '';
    const readonlyClass = readonly ? 'input--readonly' : '';
    const iconClass = icon ? `input--icon input--icon-${iconPosition}` : '';

    const inputClasses = [
      baseClass,
      sizeClass,
      stateClass,
      disabledClass,
      readonlyClass,
      iconClass,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const inputId = id || name;

    return (
      <div className="input-wrapper">
        {label && (
          <label htmlFor={inputId} className="input__label">
            {label}
            {required && <span className="input__required">*</span>}
          </label>
        )}
        
        <div className="input__container">
          {icon && iconPosition === 'left' && (
            <span className="input__icon input__icon--left">{icon}</span>
          )}
          
          <input
            ref={ref}
            id={inputId}
            name={name}
            type={type}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readonly}
            required={required}
            className={inputClasses}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          
          {icon && iconPosition === 'right' && (
            <span className="input__icon input__icon--right">{icon}</span>
          )}
        </div>
        
        {(helperText || errorText) && (
          <div className={`input__text ${errorText ? 'input__text--error' : 'input__text--helper'}`}>
            {errorText || helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 