import { ILanguage } from "./ILanguage";

export interface ILocation {
  geoname_id: number;
  capital: string;
  languages: ILanguage[];
  country_flag: string;
  country_flag_emoji: string;
  country_flag_emoji_unicode: string;
  calling_code: string;
  is_eu: boolean;
}
