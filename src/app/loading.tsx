"use client";
import { ETHABJ_SVG } from "@/assets/svg";
import { COLORS } from "@/constants/theme/lightDarkTheme";
import { useAppSelector } from "@/hooks/rtkHooks";
import { Flex, keyframes } from "@chakra-ui/react";

export default function Loading() {

  const { appTheme } = useAppSelector((state) => state.themeReducer);

  // You can add any UI inside Loading, including a Skeleton.
  const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

  return (
    <Flex
      pos="absolute"
      bg={COLORS.white}
      h="100vh"
      w="100%"
      align={"center"}
      justify="center"
      flexDirection={"column"}
      alignSelf="center"
    >
      <Flex
        w="15vw"
        h={"15vw"}
        borderRadius="10vw"
        align={"center"}
        justify="center"
        // borderWidth={2}
        // borderColor={"#314D53"}
        animation={`${pulse} 2s infinite`}
      >
        {ETHABJ_SVG().logo2()}
      </Flex>
    </Flex>
  );
}
