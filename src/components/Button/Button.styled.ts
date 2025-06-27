import { styled } from "../../../styled-system/jsx";

export const StyledButton = styled("button", {
  variants: {
    variant: {
      primary: {
        backgroundColor: "primary",
        color: "white",
        borderColor: "primary",
        borderWidth: "0.125rem",
        borderStyle: "solid",

        _hover: {
          backgroundColor: "secondary",
        },
      },
      secondary: {
        backgroundColor: "secondary",
        color: "white",
        _hover: {
          backgroundColor: "primary",
        },
      },
      tertiary: {
        backgroundColor: "grey.800",
        color: "grey.200",
        border: "0.125rem solid",
        borderColor: "grey.800",
        _hover: {
          backgroundColor: "transparent",
          borderColor: "grey.800",
          color: "grey.200",
        },
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
