import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: 40px;
  width: 100px;

background-color: ${props => props.theme["primary"]};

/* 
  ${(props) => {
    return `background-color: ${buttonVariants[props.variant]}`;
  }} */
`;
