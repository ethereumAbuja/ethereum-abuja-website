"use client";

import ContainerWrapper from "../ContainerWrapper";
import {
  Box,
  Text,
  HStack,
  Button
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@/hooks/rtkHooks";
import { darkTheme, lightTheme } from "@/constants/theme/lightDarkTheme";
import { chooseTheme } from "@/store/themeSlice";
import { ETHABJ_SVG } from "@/assets/svg/index"
import { Link } from "@chakra-ui/next-js";
import { usePathname } from "next/navigation";
import { COLORS } from "@/constants/theme/lightDarkTheme";
import { TabsProps } from "@/lib/components/types";
import { For, block } from "million/react";

const NavBar = () => {
  const { appTheme } = useAppSelector((state) => state.themeReducer);
  const dispatch = useAppDispatch();

  const pathname = usePathname();

  const tabs: TabsProps[] = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "Resources", 
      link: "/guides",
    },
  
  ];

  return (
    <Box 
    boxShadow="0px 4px 64px 0px rgba(108, 108, 108, 0.05)"
    backdropFilter="blur(20px)"
    backgroundColor="none" 
    pos={"relative"} 
    w="100%" 
    zIndex={10} 
    p="10px"
    border="0px solid #314D53"
    >
      <ContainerWrapper>
        <HStack h={"80px"} justify={"space-between"}>
          <Link href={"/home"} role="logo_link">
            {ETHABJ_SVG().logo()}
          </Link>

          <HStack spacing={4}>
            <For each={tabs}>
              {(e) => (
                <Link href={e.link}
                 style={{ textTransform: "none" }}
                >
                  <HStack
                    p="10px"
                    color={
                      pathname?.includes(e.link)
                        ? appTheme.backgroundColorReverse
                        : pathname === "/" && e.link === "/home"
                        ? appTheme.backgroundColorReverse
                        : appTheme.backgroundColorReverse
                    }
                    bgClip={
                      pathname?.includes(e.link)
                      ? "text"
                      : pathname === "/" && e.link === "/home"
                      ? "none"
                      : "none"
                    }
                    bgGradient={
                      pathname?.includes(e.link)
                      ? COLORS.navHoverLinkColor
                      : pathname === "/" && e.link === "/home"
                      ? "none"
                      : "none"
                    }
                  >
                    {/* {e.icon} */}
                    <Text fontWeight={500}>{e.name}</Text>
                  </HStack>
                </Link>
              )}
            </For>
          </HStack>

            <HStack spacing={4}>
              <Button
               bg={COLORS.black}
               color={appTheme.backgroundColor}
               p="11px 0px"
               w="160px"
               borderRadius="8px"
               _hover={{
                bg: COLORS.joinComColorBTN,
                borderColor: "1px solid black"
               }}
               >
                <Text fontSize="14px" fontWeight={500}>Join Community</Text>
              </Button>
            </HStack>
        </HStack>
      </ContainerWrapper>
    </Box>
  );
};

export default NavBar;
