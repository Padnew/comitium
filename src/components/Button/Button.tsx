import React from "react";
import clsx from "clsx";
import { ColourName } from "../../theme";
import { useTheme } from "../../theme/ThemeProvider";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "cancel";
  colour?: ColourName;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  className,
  children,
  colour,
  ...props
}) => {
  const { colours } = useTheme();

  const base =
    "px-4 py-2 rounded font-medium transition-colors border border-radius-2px";
  const variantClasses = {
    default: `text-white`,
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
    cancel: "bg-red-600 text-white hover:bg-red-700",
  };

  const bgColourStyle =
    variant === "default" && colour
      ? {
          backgroundColor: colours[colour],
        }
      : variant == "outline" && colour
      ? {
          borderColor: colours[colour],
        }
      : undefined;

  return (
    <button
      className={clsx(base, variantClasses[variant], className)}
      style={bgColourStyle}
      {...props}
    >
      {children}
    </button>
  );
};
