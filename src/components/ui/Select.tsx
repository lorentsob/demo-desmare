import React, { forwardRef, SelectHTMLAttributes } from "react";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  options: SelectOption[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      fullWidth = true,
      options,
      placeholder,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div className={`${fullWidth ? "w-full" : ""}`}>
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-foreground mb-1"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={`
            bg-ui-input
            border border-ui-input-border
            rounded-md
            px-3 py-2
            text-foreground
            focus:outline-none
            focus:ring-2
            focus:ring-ui-focus-ring
            focus:border-primary
            transition-all
            disabled:opacity-60
            disabled:cursor-not-allowed
            appearance-none
            bg-no-repeat
            bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')]
            bg-[length:1.25rem_1.25rem]
            bg-[right_0.5rem_center]
            pr-10
            ${error ? "border-error focus:ring-error focus:border-error" : ""}
            ${fullWidth ? "w-full" : ""}
            ${className}
          `}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-sm text-error">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
