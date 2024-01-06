import { EReducerActions } from "../dto/base/EReducerActions";
import { IPosition } from "../dto/base/IPosition";

interface IAction {
  type: EReducerActions;
  payload: IPosition;
}

export const locationReducer = (state: IPosition[], action: IAction) => {
  switch (action.type) {
    case EReducerActions.PUSH:
      return [...state, action.payload];
  }
};
