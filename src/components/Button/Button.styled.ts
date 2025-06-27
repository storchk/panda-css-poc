import { styled } from "../../../styled-system/jsx";

export const StyledButton = styled("button", {
  variants: {
    variant: {
      primary: {
        backgroundColor: "primary",
        color: "white",
      },
      secondary: {
        backgroundColor: "secondary",
        color: "white",
      },
      tertiary: {
        backgroundColor: "grey.200",
        color: "grey.800",
      },
    },
    size: {
      small: {
        paddingBlock: "xs",
        paddingInline: "sm",
      },
      medium: {
        paddingBlock: "sm",
        paddingInline: "md",
      },
      large: {
        paddingBlock: "md",
        paddingInline: "lg",
      },
    },
  },
});
