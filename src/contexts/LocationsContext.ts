import { createContext } from "react";
import { IPosition } from "../dto/base/IPosition";

type ILocationsContext = {
  locations: IPosition[];
  setLocations: (locations: IPosition[]) => void;
};

const LocationsContext = createContext<ILocationsContext>({
  locations: [],
  setLocations: () => {},
});

export default LocationsContext;
