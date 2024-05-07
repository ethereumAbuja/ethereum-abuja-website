import axios from "axios";
import { useEffect, useState } from "react";

export const useHerosList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);
  const [heroslist, setHeroslist] = useState<any[]>([]);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/getallsponsors");
      if (response.status === 201) {
        setHeroslist(response.data);
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
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = async () => {
    setError(null);
    await fetchData();
  };

  return {
    data: heroslist,
    isLoading,
    isError: error !== null,
    Error,
    isSuccess: heroslist.length > 0 && error === null,
    refetch,
  };
};
