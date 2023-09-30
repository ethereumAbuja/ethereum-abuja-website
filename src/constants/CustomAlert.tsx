import { Alert, AlertIcon } from "@chakra-ui/react";

const CustomAlert = ({ status, message }: any) => (
  <Alert status={status} mb={4}>
    <AlertIcon />
    {message}
  </Alert>
);

export default CustomAlert;
