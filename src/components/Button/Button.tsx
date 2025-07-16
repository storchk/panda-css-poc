import type { FC } from "react";
import type { ButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styles";

export const Button: FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "medium",
  onClick,
  className,
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={onClick}
      className={className}
      margin={{ smScreen: "md", mdScreen: "lg" }}
    >
      {label}
    </StyledButton>
  );
};
