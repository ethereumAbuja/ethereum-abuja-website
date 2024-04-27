import React from "react";
import { Box, Text, chakra, Center, Link } from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import ContainerWrapper from "../ContainerWrapper";
import { COLORS } from "@/constants/theme/lightDarkTheme";
import { SOCIAL_DISCORD } from "@/utils/site";

const AnnoucementNavbar = () => {
  return (
    <Box
      bg={COLORS.joinComColorBTN}
      boxShadow={COLORS.navBoxShadow}
      backdropFilter="blur(20px)"
      backgroundColor={"whiteAlpha.700"}
      zIndex={50}
      h="50px"
      border="0px solid #314D53"
      alignItems="center"
    >
      <ContainerWrapper>
        <Center h="50px">
          <motion.div
            animate={{
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Text color="white" fontSize="20px" textAlign="center">
              The EthAbuja Donation DAPP is now live on the Testnet - Explore it
              now and feel free to share your{" "}
              <chakra.span as={Link} target="_blank" href={SOCIAL_DISCORD}>
                feedback!
              </chakra.span>
            </Text>
          </motion.div>
        </Center>
      </ContainerWrapper>
    </Box>
  );
};

export default AnnoucementNavbar;
