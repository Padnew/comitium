import React from "react";
import clsx from "clsx";
import { Divider } from "../Divider";

type CardProps = {
  title?: string;
  shadow?: "none" | "sm" | "md" | "lg";
  footer?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  withDividers?: boolean;
  className?: string;
  curved?: "none" | "sm" | "md" | "lg";
};

export const Card: React.FC<CardProps> = ({
  title,
  shadow = "md",
  footer,
  children,
  style,
  withDividers = false,
  className,
  curved,
}) => {
  return (
    <div
      className={clsx(
        "p-4 bg-white",
        {
          "shadow-none": shadow === "none",
          "shadow-sm": shadow === "sm",
          "shadow-md": shadow === "md",
          "shadow-lg": shadow === "lg",
        },
        {
          "rounded-none": curved === "none",
          "rounded-sm": curved === "sm",
          "rounded-md": curved === "md",
          "rounded-lg": curved === "lg",
        },
        className
      )}
      style={style}
    >
      {title && (
        <>
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          {withDividers && <Divider />}
        </>
      )}
      <div className="mb-2">{children}</div>
      {footer && (
        <>
          {withDividers && <Divider />}
          <div>{footer}</div>
        </>
      )}
    </div>
  );
};
