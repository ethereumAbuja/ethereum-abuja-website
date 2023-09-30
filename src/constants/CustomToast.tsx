import { ToastProps, Box, Text, Heading, } from '@chakra-ui/react';

const MyToast: React.FC<ToastProps> = ({ title, description }) => (
    
  <Box
    bg="black"
    color="white"
    p={4}
    borderRadius="md"
    boxShadow="md"
    textAlign="center"
  >
    <Heading as="h4" size="md" mb={2}>
      {title}
    </Heading>
    <Text fontSize="sm">{description}</Text>
  </Box>
);

export default MyToast;