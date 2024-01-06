import { useQuery } from "react-query";
import { axiosInstance } from "./axios";
import { IPosition } from "../dto/base/IPosition";

const queryKeys = {
  getLocation: (value: string) => ["locationService.getLocation", value],
  getIPAddress: "locationService.getIPAddress",
};

const getLocation = async (value: string): Promise<IPosition> => {
  value = value.replace(/^(https?:\/\/)?|\/+$/g, "");

  const r = await axiosInstance.get(`/${value}`);
  return r?.data ?? [];
};

const useGetLocation = (value: string, enabled = true) => {
  return useQuery(queryKeys.getLocation(value), () => getLocation(value), {
    enabled,
  });
};

const getIPAddress = async (): Promise<IPosition> => {
  const r = await axiosInstance.get("/check");

  return r?.data ?? [];
};

const useGetIPAddress = () => {
  return useQuery(queryKeys.getIPAddress, () => getIPAddress());
};

export default {
  useGetLocation,
  useGetIPAddress,
};
