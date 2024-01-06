export type { FC } from "react";

export interface Props {
  value: string;
  setValue: (v: string) => void;
  isLoading: boolean;
}
