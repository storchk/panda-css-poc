import type { FC } from "react";
import type { ButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styled";

export const Button: FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "medium",
  onClick,
}) => {
  return (
    <StyledButton variant={variant} size={size} onClick={onClick}>
      {label}
    </StyledButton>
  );
};
