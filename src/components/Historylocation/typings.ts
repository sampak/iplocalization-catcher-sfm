import { IPosition } from "../../dto/base/IPosition";

export type { FC } from "react";

export interface Props {
  location: IPosition | null;
  isLoading: boolean;
}
