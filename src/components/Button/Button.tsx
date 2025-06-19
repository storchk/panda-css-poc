import type { FC } from "react";
import type { ButtonProps } from "./Button.types";
import { css } from "../../../styled-system/css";

export const Button: FC<ButtonProps> = ({}) => {
  return <button className={css({ backgroundColor: "bg" })}>Bla</button>;
};
