import { ScrollTextIcon, TimerIcon } from "lucide-react";
import { HeaderContainer, ButtonIcon } from "./style";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import { Moon, Sun } from "lucide-react";

export function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <span>Logo</span>
      <nav>
        <NavLink to="/" title="Home">
          <TimerIcon size={32} />
        </NavLink>
        <NavLink to="history" title="Histórico">
          <ScrollTextIcon size={32} />{" "}
        </NavLink>
        {theme === "light" ? (
          <ButtonIcon onClick={toggleTheme}>
            <Moon  size={28}/>
          </ButtonIcon>
        ) : (
          <ButtonIcon onClick={toggleTheme}>
            <Sun size={28}/>
          </ButtonIcon>
        )}
      </nav>
    </HeaderContainer>
  );
}
