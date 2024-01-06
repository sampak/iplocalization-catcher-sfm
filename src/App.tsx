import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import "./styles/global.scss";
import LocationDisplayer from "./modules/LocationDisplayer";
import { useState } from "react";
import { IPosition } from "./dto/base/IPosition";
import LocationsContext from "./contexts/LocationsContext";
const queryClient = new QueryClient();

function App() {
  const [locations, setLocations] = useState<IPosition[]>([]);

  return (
    <LocationsContext.Provider
      value={{
        locations,
        setLocations,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <LocationDisplayer />
      </QueryClientProvider>
    </LocationsContext.Provider>
  );
}

export default App;
