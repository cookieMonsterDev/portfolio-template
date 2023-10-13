import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-md border border-shark-400 px-3 py-6 text-xl focus:outline-shark-400 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
