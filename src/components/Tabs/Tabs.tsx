import React, { useState } from "react";
import clsx from "clsx";

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  defaultTab?: number;
  fullWidth?: boolean;
  className?: string;
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab = 0,
  fullWidth = false,
  className,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultTab);

  return (
    <div className={clsx("w-full", className)}>
      <div className="flex border-b">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={clsx(
              "py-2 px-4 text-sm",
              fullWidth && "flex-1",
              activeIndex === i
                ? "border-b-2 border-orange-500 font-semibold"
                : "text-gray-500 hover:text-black"
            )}
            onClick={() => setActiveIndex(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-4">{tabs[activeIndex]?.content}</div>
    </div>
  );
};
