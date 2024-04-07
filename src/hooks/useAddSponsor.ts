import { useState, useCallback } from "react";
import axios from "axios";

interface Sponsor {
  name: string;
  twitter: string;
}

interface AddSponsorResponse {
  message?: string;
}

type AddSponsorError = Error | string;

const useAddSponsor = (): {
  isLoading: boolean;
  error: AddSponsorError | null;
  success: boolean;
  addSponsor: (sponsor: Sponsor) => Promise<void>;
} => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AddSponsorError | null>(null);
  const [success, setSuccess] = useState(false);

  const addSponsor = useCallback(async (sponsor: Sponsor) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post<AddSponsorResponse>(
        "/api/add-sponsor",
        sponsor,
      );

      if (response.status === 201) {
        setSuccess(true);
      } else {
        setError(new Error("Failed to add sponsor"));
      }
    } catch (error) {
      console.error(error);
      setError(error as AddSponsorError);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, error, success, addSponsor };
};

export default useAddSponsor;
