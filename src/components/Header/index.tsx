import {ScrollTextIcon, TimerIcon,  } from "lucide-react";
import { HeaderContainer } from "./style";
import { NavLink } from "react-router-dom";


export function Header() {
  return (
    <HeaderContainer>
      <span>
        Logo
      </span>
      <nav>
        <NavLink to="/" title="Home">
          <TimerIcon size={32} />
        </NavLink>
        <NavLink to="history" title="Histórico">
          <ScrollTextIcon size={32} />{" "}
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
