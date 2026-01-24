"use client";

import { useState, useCallback, useEffect } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BlogSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function BlogSearch({
  value,
  onChange,
  placeholder = "Search articles...",
}: BlogSearchProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  // Debounce the search
  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(localValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [localValue, onChange]);

  // Sync external value changes
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleClear = useCallback(() => {
    setLocalValue("");
    onChange("");
  }, [onChange]);

  return (
    <div className="relative w-full">
      <div
        className={`relative flex items-center rounded-xl border transition-all duration-200 ${
          isFocused
            ? "border-primary bg-card shadow-lg shadow-primary/10"
            : "border-border bg-card hover:border-primary/50"
        }`}
      >
        <div className="flex items-center pl-4">
          <Search
            className={`h-5 w-5 transition-colors ${
              isFocused ? "text-primary" : "text-muted-foreground"
            }`}
          />
        </div>

        <input
          type="text"
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full bg-transparent px-3 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none"
        />

        <AnimatePresence>
          {localValue && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              type="button"
              onClick={handleClear}
              className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary/20 hover:text-primary"
            >
              <X className="h-4 w-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Search hint */}
      <AnimatePresence>
        {isFocused && !localValue && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 top-full z-10 mt-2 rounded-lg border border-border bg-card p-4 shadow-xl"
          >
            <p className="mb-2 text-xs font-medium text-muted-foreground">
              Try searching for:
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "Security", "Career", "Machine Learning", "AWS"].map(
                (suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      setLocalValue(suggestion);
                      onChange(suggestion);
                    }}
                    className="rounded-full bg-muted px-3 py-1 text-xs text-foreground transition-colors hover:bg-primary/20 hover:text-primary"
                  >
                    {suggestion}
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
