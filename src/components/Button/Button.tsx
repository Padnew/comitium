import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "danger";
  bgColor?: string;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  bgColor,
  className,
  children,
  ...props
}) => {
  const base = "px-4 py-2 rounded font-medium transition-colors";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={clsx(
        base,
        variants[variant],
        bgColor && `bg-[${bgColor}]`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
