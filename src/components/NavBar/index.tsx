import ContainerWrapper from "../ContainerWrapper";
import {
  Box,
  Text,
  HStack,
  Center,
  Tooltip,
  useDisclosure
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@/hooks/rtkHooks";
import { darkTheme, lightTheme } from "@/constants/theme/lightDarkTheme";
import { chooseTheme } from "@/store/themeSlice";
import { ETHABJ_SVG } from "@/assets/svg/index"
import { Link } from "@chakra-ui/next-js";
import { usePathname } from "next/navigation";
import { nanoid } from "@reduxjs/toolkit";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { TabsProps } from "@/lib/components/types";
import { For, block } from "million/react";
import { FaTelegram, FaTwitter, FaDiscord} from "react-icons/fa";

const NavBar = () => {
  const { appTheme } = useAppSelector((state) => state.themeReducer);
  const dispatch = useAppDispatch();

  const pathname = usePathname();

  const tabs: TabsProps[] = [
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "Showcase",
      link: "/showcase",
    },
    {
      name: "Talks",
      link: "/talks",
    },
    {
      name: "Guides", 
      link: "/guides",
    },
    {
      name: "About",
      link: "/about",
    },
  ];

  return (
    <Box backgroundColor="none" pos={"relative"} w="100%" zIndex={10} p="10px">
      <ContainerWrapper>
        <HStack h={"60px"} justify={"space-between"}>
          <Link href={"/home"} role="logo_link">
            {ETHABJ_SVG().logo()}
          </Link>

          <HStack spacing={4}>
            <For each={tabs}>
              {(e) => (
                <Link href={e.link}>
                  <HStack
                    _hover={{
                      bg: appTheme.textColor,
                      color: appTheme.backgroundColor,
                    }}
                    p="10px"
                    borderRadius={"20px"}
                    color={
                      pathname?.includes(e.link)
                        ? appTheme.backgroundColorReverse
                        : pathname === "/" && e.link === "/home"
                        ? appTheme.backgroundColorReverse
                        : appTheme.backgroundColorReverse
                    }
                  >
                    {/* {e.icon} */}
                    <Text fontSize="16px" fontWeight={500}>{e.name}</Text>
                  </HStack>
                </Link>
              )}
            </For>
          </HStack>

          {/* <HStack>
            <DarkModeSwitch
              role="toggleSwitcher"
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
              checked={appTheme.name === "dark"}
              onChange={() => {
                if (appTheme.name === "light") {
                  dispatch(chooseTheme(darkTheme));
                } else {
                  dispatch(chooseTheme(lightTheme));
                }
              }}
              size={120}
            />
          </HStack> */}

            <HStack spacing={4}>
            <Tooltip label="link dropping soon"
              placement="top"
              display={"flex"}
              alignItems={"center"}
              borderRadius="5px"
              color={appTheme.textColor}
              bg={appTheme.backgroundColor2}
            >
            <Link href="#">
              <FaTelegram size={24} color={appTheme.backgroundColorReverse} />
            </Link>
            </Tooltip>

            <Tooltip label="link dropping soon"
              placement="top"
              display={"flex"}
              alignItems={"center"}
              borderRadius="5px"
              color={appTheme.textColor}
              bg={appTheme.backgroundColor2}
            >
            <Link href="#">
              <FaTwitter size={24} color={appTheme.backgroundColorReverse} />
            </Link>
            </Tooltip>

            <Tooltip label="link dropping soon"
              placement="top"
              display={"flex"}
              alignItems={"center"}
              borderRadius="5px"
              color={appTheme.textColor}
              bg={appTheme.backgroundColor2}
            >
            <Link href="#">
              <FaDiscord size={24} color={appTheme.backgroundColorReverse} />
            </Link>
            </Tooltip>
          </HStack>
        </HStack>
      </ContainerWrapper>
    </Box>
  );
};

export default NavBar;
