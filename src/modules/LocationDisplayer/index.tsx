import LocationHistoryList from "../../components/LocationHistoryList";
import styles from "./styles.module.scss";
import { useContext, useEffect, useReducer, useState } from "react";
import locationService from "../../api/locationService";
import LocationsContext from "../../contexts/LocationsContext";
import { locationReducer } from "../../reducers/locationReducer";
import { EReducerActions } from "../../dto/base/EReducerActions";
import SearchInput from "../../components/SearchInput";
import CurrentLocation from "../../components/CurrentLocation";
import { IPosition } from "../../dto/base/IPosition";
import HistoryLocation from "../../components/Historylocation";

const LocationDisplayer = () => {
  const [prevLocation, setPrevLocation] = useState<IPosition | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const { locations, setLocations } = useContext(LocationsContext);
  const [state, dispatch] = useReducer(locationReducer, locations);

  const { data: IPAddressData, isLoading: loadingIP } =
    locationService.useGetIPAddress();

  const { data, isLoading: loadingLocation } = locationService.useGetLocation(
    searchValue,
    !!searchValue.length
  );

  const isLoading = loadingIP || loadingLocation;

  useEffect(() => {
    if (!IPAddressData?.ip) return;
    setSearchValue(IPAddressData.ip);
  }, [IPAddressData]);

  useEffect(() => {
    if (!data?.ip) return;
    dispatch({
      type: EReducerActions.PUSH,
      payload: { ...data, searchValue: searchValue },
    });
  }, [data]);

  useEffect(() => {
    setLocations(state);
  }, [state]);

  useEffect(() => {
    if (!prevLocation && locations.length + 1 >= 1) {
      setPrevLocation(locations[1]);
    }
  }, [locations]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue(inputValue);
    setInputValue("");
  };

  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <div className={styles.historyWrapper}>
          <LocationHistoryList locationsHistory={locations} />
        </div>
        <div className={styles.location}>
          <CurrentLocation
            location={locations?.[0]}
            isLoading={isLoading || !locations?.[0]}
          />
          <form onSubmit={handleSubmit}>
            <SearchInput
              value={inputValue}
              isLoading={isLoading}
              setValue={(t) => setInputValue(t)}
            />
          </form>
          <HistoryLocation location={prevLocation} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default LocationDisplayer;
