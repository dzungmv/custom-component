import cn from "@/libs/validations/utils";
import { InputHTMLAttributes, forwardRef } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "px-3 h-10 w-full rounded-md bg-transparent border border-gray-100 py-1 text-sm shadow-sm transition-colors file:border-0 focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";


export default Input;
