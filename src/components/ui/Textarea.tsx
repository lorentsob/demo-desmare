import React, { forwardRef, TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, fullWidth = true, className = "", ...props }, ref) => {
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
        <textarea
          ref={ref}
          className={`
            bg-input-bg
            border border-input-border
            rounded-md
            px-3 py-2
            text-foreground
            placeholder:text-text-secondary/60
            focus:outline-none
            focus:ring-2
            focus:ring-ui-focus-ring
            focus:border-accent
            transition-all
            disabled:opacity-60
            disabled:cursor-not-allowed
            resize-y
            ${error ? "border-error focus:ring-error focus:border-error" : ""}
            ${fullWidth ? "w-full" : ""}
            ${className}
          `}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-error">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
