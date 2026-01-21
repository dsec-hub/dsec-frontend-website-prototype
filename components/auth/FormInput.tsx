"use client";

import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
  icon?: ReactNode;
  helperText?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, name, error, icon, helperText, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        <label htmlFor={name} className="block text-sm font-medium mb-2 text-foreground">
          {label}
          {props.required && <span className="text-primary ml-1">*</span>}
        </label>

        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            id={name}
            name={name}
            className={`
              w-full px-4 py-3 rounded-lg
              bg-card border border-border
              text-foreground placeholder:text-muted-foreground
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
              hover:border-primary/50
              ${icon ? "pl-10" : ""}
              ${error ? "border-red-500 focus:ring-red-500" : ""}
              ${className}
            `}
            {...props}
          />

          {error && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
              <AlertCircle className="w-5 h-5" />
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-sm text-red-500 mt-1.5 flex items-center gap-1"
            >
              {error}
            </motion.p>
          )}

          {!error && helperText && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-sm text-muted-foreground mt-1.5"
            >
              {helperText}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
