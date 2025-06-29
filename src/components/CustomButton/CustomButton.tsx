import type { FC } from "react";
import type { CustomButtonProps } from "./CustomButton.types";
import { StyledCustomButton } from "./CustomButton.styled";
import { Button } from "../Button/Button";
import { css, cx } from "../../../styled-system/css";

export const CustomButton: FC<CustomButtonProps> = ({ label, onClick }) => {
  return (
    <>
      <StyledCustomButton
        variant="secondary"
        size="small"
        onClick={onClick}
        label={label}
      />
      <div
        className={cx(
          css({
            marginBlock: "sm",
          }),
        )}
      />
      <Button
        variant="secondary"
        size="small"
        onClick={onClick}
        label={label}
        className={cx(
          css({
            borderRadius: "0",
          }),
        )}
      />
    </>
  );
};
