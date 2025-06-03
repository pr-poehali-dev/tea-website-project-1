import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface HoverDropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function HoverDropdown({
  trigger,
  children,
  className,
}: HoverDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {trigger}
      {isOpen && (
        <div
          className={cn(
            "absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[200px] z-50 animate-fade-in",
            className,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
