import { useState, useCallback } from "react";
import axios from "axios";
import { useToast, Box } from "@chakra-ui/react";
import CustomToast from "@/components/CustomToast";
import CustomErrorToast from "@/components/CustomErrorToast";

export interface SponsorDetailsType {
  name: string;
  twitter: string;
  amount: string;
}

interface AddSponsorResponse {
  message?: string;
}

type AddSponsorError = Error | string;

const useAddSponsor = (): {
  isLoading: boolean;
  error: AddSponsorError | null;
  success: boolean;
  addSponsor: (sponsor: SponsorDetailsType) => Promise<void>;
} => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AddSponsorError | null>(null);
  const [success, setSuccess] = useState(false);

  let toast = useToast();
  const addSponsor = useCallback(async (sponsor: SponsorDetailsType) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post<AddSponsorResponse>(
        "/api/addsponsor",
        sponsor
      );

      if (response.status === 201) {
        setSuccess(true);
        console.log("succesfully called api, posted sponsor details");
        CustomToast(toast, "Transaction Submitted", 4000, "top-right");
      } else {
        console.log("succesfully called api, error occured");
        setError(new Error("Failed to add sponsor"));
      }
    } catch (error) {
      CustomErrorToast(
        toast,
        `Errror occured, sponsor name`,
        4000,
        "top-right"
      );
      console.log("succesfully called api, error occured");
      console.error(error);
      setError(error as AddSponsorError);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, error, success, addSponsor };
};

export default useAddSponsor;
