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
import { isIPAddress } from "../../utils/isIPAddress";
import { isURLAddress } from "../../utils/isURLAddress";
import { toast } from "react-toastify";

const LocationDisplayer = () => {
  const [prevLocation, setPrevLocation] = useState<IPosition | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const { locations, setLocations } = useContext(LocationsContext);
  const [state, dispatch] = useReducer(locationReducer, locations);

  const {
    data: IPAddressData,
    isLoading: loadingIP,
    isError: IPAddressError,
  } = locationService.useGetIPAddress();

  const {
    data,
    isLoading: loadingLocation,
    isError: locationError,
  } = locationService.useGetLocation(searchValue, !!searchValue.length);

  const isLoading = loadingIP || loadingLocation;
  const isError = IPAddressError || locationError;

  useEffect(() => {
    if (!isError) return;
    toast.error("Something went wrong! try again later");
  }, [isError]);

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
    if (locations.length + 1 >= 1) {
      setPrevLocation(locations[1]);
    }
  }, [locations]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;

    if (!inputValue.length) {
      toast.error("Provide IP address or URL address!");
      return;
    }

    if (!(isIPAddress(inputValue) || isURLAddress(inputValue))) {
      toast.error("Provided IP address or URL address is invalid!");
      return;
    }

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
