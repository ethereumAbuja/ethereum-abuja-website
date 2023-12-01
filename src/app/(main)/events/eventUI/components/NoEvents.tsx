import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { COLORS } from "@/constants/theme/lightDarkTheme";

export default function NoEvents() {
  return (
    <Flex flexDirection={["column", "row"]}>
      <VStack
        p="1rem"
        width="100%"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Text my="1rem" fontWeight="semibold" fontSize="40px">
          We have no events listed right now : (
        </Text>
        <Text my="1rem" fontSize="20px">
          Sign up to our newsletter to get notified when any event gets listed
        </Text>

        <Button
          as="a"
          href="https://docs.google.com/forms/d/e/1FAIpQLSc1wGP8PQkydcjO6nCiYePQRR33OcWm4LYF5b-8GU2uqrZQeQ/viewform?usp=send_form&usp=embed_facebook"
          target="_blank"
          bg="black"
          w={["160px", "", "200px"]}
          h="50px"
          p="20px"
          border="0.5px solid #000"
          borderRadius={"8px"}
          color="white"
          fontWeight={400}
          _hover={{
            bg: COLORS.joinComColorBTN,
            borderColor: "1px solid black",
          }}
        >
          Join Community
        </Button>
      </VStack>
      <Box
        pos="relative"
        width="100%"
        height={["300px", "450px", "600px"]}
        order={[-1, 1]}
      >
        <Image
          src="/image/eventsPage/NoEvents.svg"
          alt="No events listed"
          fill
          style={{ objectFit: "contain" }}
        />
      </Box>
    </Flex>
  );
}
