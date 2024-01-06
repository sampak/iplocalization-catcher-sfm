import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import "./styles/global.scss";
import LocationDisplayer from "./modules/LocationDisplayer";
import { useState } from "react";
import { IPosition } from "./dto/base/IPosition";
import LocationsContext from "./contexts/LocationsContext";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

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
        <ToastContainer />
      </QueryClientProvider>
    </LocationsContext.Provider>
  );
}

export default App;
