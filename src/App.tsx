import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { CyclesContextProvider } from "./contexts/CyclesContext";
import { ThemeContextProvider } from "./contexts/themeContext";
export function App() {
  return (
    <ThemeContextProvider>
      <CyclesContextProvider>
        <GlobalStyle />
        <Router />
      </CyclesContextProvider>
    </ThemeContextProvider>
  );
}
