"use client";

import { cn } from "@/lib/utils";

export function OptionSelector({
  label,
  options,
  value,
  onChange,
  disabled,
}: {
  label: string;
  options: string[];
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}) {
  return (
    <fieldset disabled={disabled} className="flex flex-col gap-2">
      <legend className="kicker">
        {label}
        {value ? <span className="ml-2 font-medium tracking-normal text-muted-foreground">{value}</span> : null}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              aria-pressed={selected}
              className={cn(
                "min-h-11 min-w-11 rounded-sm border px-3 text-sm font-medium transition-[background-color,border-color,transform,scale] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.96]",
                selected
                  ? "scale-[1.04] border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background hover:border-primary",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
