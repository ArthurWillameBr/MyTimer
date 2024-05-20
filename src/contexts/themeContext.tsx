import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/themes/default";
import { GlobalStyle } from "../styles/global";

interface ThemeContextProviderProps {
    children: React.ReactNode;
    
}

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType)

export function ThemeContextProvider({children}: ThemeContextProviderProps) {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
} 


