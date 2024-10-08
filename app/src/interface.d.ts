import { PossibleCredentialIDs } from "./context/credentlalsContext";
import { CountryData } from "./lib/countrys";
import type { API } from "./types/electronAPI";

declare global {
  interface Window {
    api: {
      manageToken: (
        region: Region,
        action: "refresh" | "get"
      ) => Promise<ManageTokenIPCResponse>;

      getListingForAsin: (
        countrys: CountryData[],
        asin: string,
        condition: ItemCondition
      ) => Promise<GetListingForAsinIPCResponse>;

      changeCredentials: (
        id: PossibleCredentialIDs,
        value: string
      ) => Promise<ChangeCredentialsIPCResponse>;

      getCredentials: (
        id: PossibleCredentialIDs
      ) => Promise<GetCredentialsIPCResponse>;
    };
  }
}
