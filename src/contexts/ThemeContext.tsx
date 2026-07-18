import { createContext, useState } from "react";

interface ThemeContextType {
    theme: ThemeName;
    toggleTheme: () => void;
}

interface ThemeProviderProps {
    children: React.ReactNode;
}

type ThemeName = "dark" | "light";

export const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => {}
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const [theme, setTheme] = useState<ThemeName>("dark");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};