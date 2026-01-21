"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useMemo } from "react";

interface PasswordStrengthIndicatorProps {
  password: string;
}

interface PasswordRequirements {
  minLength: boolean;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumber: boolean;
  hasSpecial: boolean;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password }) => {
  const requirements: PasswordRequirements = useMemo(() => {
    return {
      minLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecial: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    };
  }, [password]);

  const strength = useMemo(() => {
    const metRequirements = Object.values(requirements).filter(Boolean).length;
    if (metRequirements <= 2) return { label: "Weak", color: "bg-red-500", percentage: 33 };
    if (metRequirements <= 4) return { label: "Medium", color: "bg-yellow-500", percentage: 66 };
    return { label: "Strong", color: "bg-green-500", percentage: 100 };
  }, [requirements]);

  const requirementsList = [
    { key: "minLength", label: "At least 8 characters", met: requirements.minLength },
    { key: "hasUppercase", label: "One uppercase letter", met: requirements.hasUppercase },
    { key: "hasLowercase", label: "One lowercase letter", met: requirements.hasLowercase },
    { key: "hasNumber", label: "One number", met: requirements.hasNumber },
    { key: "hasSpecial", label: "One special character", met: requirements.hasSpecial },
  ];

  if (!password) return null;

  return (
    <div className="mt-3 space-y-3">
      {/* Strength Bar */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Password strength</span>
          <span className={`font-medium ${
            strength.label === "Weak" ? "text-red-500" :
            strength.label === "Medium" ? "text-yellow-500" :
            "text-green-500"
          }`}>
            {strength.label}
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${strength.color}`}
            initial={{ width: 0 }}
            animate={{ width: `${strength.percentage}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Requirements Checklist */}
      <div className="space-y-1.5">
        {requirementsList.map((req) => (
          <motion.div
            key={req.key}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-xs"
          >
            <div
              className={`
                flex items-center justify-center w-4 h-4 rounded-full
                transition-colors duration-200
                ${req.met ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"}
              `}
            >
              {req.met ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
            </div>
            <span className={req.met ? "text-foreground" : "text-muted-foreground"}>
              {req.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PasswordStrengthIndicator;
