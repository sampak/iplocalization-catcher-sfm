import { IPosition } from "../../dto/base/IPosition";

export type { FC } from "react";

export interface Props {
  header: JSX.Element;
  location: IPosition;
  isLoading: boolean;
}
