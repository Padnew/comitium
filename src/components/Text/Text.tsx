import clsx from "clsx";

type TextProps = {
  size?: "sm" | "md" | "lg" | "xl";
  weight?: "normal" | "semibold" | "bold";
  font?: "sans" | "serif" | "mono";
  curved?: "none" | "sm" | "md" | "lg";
  linkTo?: string;
  className?: string;
  children?: React.ReactNode;
};

export const Text: React.FC<TextProps> = ({
  size = "md",
  weight = "normal",
  font = "sans",
  linkTo,
  className,
  children,
}) => {
  const textClasses = clsx(
    {
      "text-sm": size === "sm",
      "text-base": size === "md",
      "text-lg": size === "lg",
      "text-xl": size === "xl",

      "font-normal": weight === "normal",
      "font-semibold": weight === "semibold",
      "font-bold": weight === "bold",

      "font-sans": font === "sans",
      "font-serif": font === "serif",
      "font-mono": font === "mono",
    },
    className
  );

  const Component = linkTo ? "a" : "p";

  return (
    <Component href={linkTo} className={textClasses}>
      {children}
    </Component>
  );
};
