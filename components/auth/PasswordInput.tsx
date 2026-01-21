"use client";

import { forwardRef, type InputHTMLAttributes, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, AlertCircle, Lock } from "lucide-react";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
  helperText?: string;
  showStrength?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, name, error, helperText, showStrength = false, className = "", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="w-full">
        <label htmlFor={name} className="block text-sm font-medium mb-2 text-foreground">
          {label}
          {props.required && <span className="text-primary ml-1">*</span>}
        </label>

        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            <Lock className="w-4 h-4" />
          </div>

          <input
            ref={ref}
            id={name}
            name={name}
            type={showPassword ? "text" : "password"}
            className={`
              w-full px-4 py-3 pl-10 pr-12 rounded-lg
              bg-card border border-border
              text-foreground placeholder:text-muted-foreground
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
              hover:border-primary/50
              ${error ? "border-red-500 focus:ring-red-500" : ""}
              ${className}
            `}
            {...props}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>

          {error && (
            <div className="absolute right-12 top-1/2 -translate-y-1/2 text-red-500">
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

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
