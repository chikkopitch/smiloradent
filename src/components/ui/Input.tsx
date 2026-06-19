import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
    const errorId = `${inputId}-error`;

    return (
      <div className="w-full flex flex-col gap-1.5">
        <label htmlFor={inputId} className="text-sm font-medium text-text/80">
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`h-12 px-4 rounded-xl border border-primary/20 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
            error ? "border-red-500 focus:ring-red-500" : ""
          } ${className}`}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
        {error && (
          <span id={errorId} className="text-sm text-red-500 mt-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
