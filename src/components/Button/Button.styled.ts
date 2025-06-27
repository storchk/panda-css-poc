import { styled } from "../../../styled-system/jsx";
import { ButtonProps } from "./Button.types";

export const StyledButton = styled("button", {
  base: {
    borderWidth: "0.125rem",
    borderStyle: "solid",
    fontSize: "md",
    _hover: {
      cursor: "pointer",
    },
    borderRadius: "0.75rem",
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "primary",
        borderColor: "primary",

        color: "white",

        _hover: {
          backgroundColor: "secondary",
          borderColor: "secondary",
        },
      },
      secondary: {
        backgroundColor: "secondary",
        borderColor: "secondary",

        color: "white",
        _hover: {
          backgroundColor: "primary",
          borderColor: "primary",
        },
      },
      tertiary: {
        backgroundColor: "grey.800",
        color: "grey.200",
        borderColor: "grey.800",
        _hover: {
          backgroundColor: "transparent",
          borderColor: "grey.800",
          color: "grey.200",
        },
      },
    },
    size: {
      extraSmall: {
        paddingBlock: "xxs",
        paddingInline: "sm",
      },
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
