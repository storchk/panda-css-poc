import type { FC } from "react";
import type { CustomButtonProps } from "./CustomButton.types";
import { StyledCustomButton } from "./CustomButton.styled";

export const CustomButton: FC<CustomButtonProps> = ({ label, onClick }) => {
  return (
    <StyledCustomButton
      variant="secondary"
      size="small"
      onClick={onClick}
      label={label}
    />
  );
};
