import { createContext, useContext, ReactNode } from "react";
import { colours } from "./theme";

type Theme = {
  colours: typeof colours & Record<string, string>;
};

const ThemeContext = createContext<Theme>({ colours: colours });

export const useTheme = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: ReactNode;
  theme?: Theme;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = { colours: colours },
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
