import clsx from "clsx";

type FlexProps = {
  direction?: "row" | "column";
  spacing?: number;
  className?: string;
  children: React.ReactNode;
};

export const Flex: React.FC<FlexProps> = ({
  direction = "row",
  spacing = 1,
  className,
  children,
}) => {
  const gapStyle = {
    gap: `${spacing}rem`,
  };

  return (
    <div
      className={clsx(
        "flex",
        direction === "column" ? "flex-col" : "flex-row",
        className
      )}
      style={gapStyle}
    >
      {children}
    </div>
  );
};
