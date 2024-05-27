import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: end;

  nav {
    display: flex;
    gap: 0.5rem;
  }

  a {
    width: 3rem;
    height: 3rem;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    color: ${(props) => props.theme["foreground"]};

    &:hover {
        border-bottom: 3px solid ${(props) => props.theme["primary"]};
    }


    &.active {
        color: ${(props) => props.theme["primary"]};
    }
  } 
`;

export const ButtonIcon = styled.button`
      background: none;
      border: none;
      cursor: pointer;
      color: ${props => props.theme["foreground"]};
`
