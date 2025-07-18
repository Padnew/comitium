import React from "react";
import clsx from "clsx";
import { colorName } from "../../theme";
import { useTheme } from "../../theme/ThemeProvider";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "cancel";
  color?: colorName;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  className,
  children,
  color,
  ...props
}) => {
  const { colors } = useTheme();

  const base =
    "px-4 py-2 rounded font-medium transition-colors border border-radius-2px bg--300";
  const variantClasses = {
    default: `text-gray-700`,
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
    cancel: "bg-red-600 text-white hover:bg-red-700",
  };

  const bgcolorStyle =
    variant === "default" && color
      ? {
          backgroundColor: colors[color],
        }
      : variant == "outline" && color
      ? {
          borderColor: colors[color],
        }
      : undefined;

  return (
    <button
      className={clsx(base, variantClasses[variant], className)}
      style={bgcolorStyle}
      {...props}
    >
      {children}
    </button>
  );
};
