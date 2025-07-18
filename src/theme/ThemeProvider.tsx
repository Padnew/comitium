import { createContext, useContext, ReactNode } from "react";
import { colors } from "./theme";

type Theme = {
  colors: typeof colors & Record<string, string>;
};

const ThemeContext = createContext<Theme>({ colors: colors });

export const useTheme = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: ReactNode;
  theme?: Theme;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = { colors: colors },
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
