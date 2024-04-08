import { useState, useCallback } from "react";
import axios from "axios";
import { useToast, Box } from "@chakra-ui/react";

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
        sponsor,
      );

      if (response.status === 201) {
        setSuccess(true);
        console.log("succesfully called api, posted sponsor details")
        toast({
          position: "top-right",
          render: () => (
            <Box color="white" p={3} bg="blue.500">
              Transaction Submitted
            </Box>
          ),
        });
      } else {
        console.log("succesfully called api, error occured")
        setError(new Error("Failed to add sponsor"));
      }
    } catch (error) {
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
           errror occured, asponsor name
          </Box>
        ),
      });
      console.log("succesfully called api, error occured")
      console.error(error);
      setError(error as AddSponsorError);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, error, success, addSponsor };
};

export default useAddSponsor;
