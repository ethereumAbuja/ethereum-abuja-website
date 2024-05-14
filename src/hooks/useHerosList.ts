import { Sponsor } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  setReftchHerosList,
  setHerosList,
} from "@/store/donationTransactionSlice";

export const useHerosList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  // const [success, setSuccess] = useState(false); Success state can be included sometime
  const localHerosList = useSelector(
    (state: RootState) =>
      state.donationTransactionSlice.heroslistSlice.heroslist,
  );
  // const [heroslist, setHeroslist] = useLocalStorage<Sponsor[]>("heroslist", []);

  const fetchHerosList = async () => {
    //Fetches and safe to local storage
    try {
      setIsLoading(true);
      const response = await axios.get("/api/getallsponsors");
      if (response.status === 201) {
        const data = response.data;
        // setHeroslist(data);
        setHerosList(data);
        //set refetch list to false incase it is on.
        dispatch(setReftchHerosList(false));
      } else {
        setError(new Error("Failed to fetch sponsor list"));
      }
    } catch (error) {
      console.error(error);
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data: localHerosList,
    isLoading,
    isError: error !== null,
    Error,
    isSuccess: localHerosList.length > 0 && error === null,
    fetchHerosList,
  };
};
