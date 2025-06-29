import { styled } from "../../../styled-system/jsx";
import { Button } from "../Button/Button";

export const StyledCustomButton = styled(Button, {
  base: {
    borderWidth: "0.125rem",
    borderStyle: "solid",
    fontSize: "lg",
    _hover: {
      cursor: "pointer",
    },
    borderRadius: "0",
  },
});
