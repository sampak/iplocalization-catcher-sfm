export type { FC } from "react";

export interface Props {
  text: string;
  disabled?: boolean;
  type?: "submit" | "button";
  onClick?: () => void;
}
