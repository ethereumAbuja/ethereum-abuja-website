"use client";

import {
    Stack,
    Flex,
    Box,
    Text,
} from '@chakra-ui/react'
import ContainerWrapper from '@/components/ContainerWrapper';
import { useAppSelector } from '@/hooks/rtkHooks';
import dynamic from "next/dynamic";
import MapChart from '@/components/AbujaMapChart';

const AboutSlider = dynamic(() => import("../components/AboutSlider"));

type Props = {};

const aboutUI = ({ pipelineData }: any) => {

    const { appTheme } = useAppSelector((state) => state.themeReducer);

  return (
    <Box py="4%" bgImage="linear-gradient(90deg, rgba(255,220,232,0.4768032212885154) 35%, rgba(227,229,255,0.37316176470588236) 100%)">
    <ContainerWrapper padding={5}>
      <Stack>
        <Flex flexDir="column" justify="center" alignItems="center">
            <Text fontSize="48px" fontWeight="600">About Us</Text>
            <Text fontSize="1.125rem" lineHeight="1.75rem"
            color="#787579"
            >
             "Building the Future, Together"
            </Text>
            <Text fontSize="1.125rem" 
            lineHeight="1.7rem"
            color="#787579"
            mt="10px"
            maxWidth="700px"
            textAlign="center"
            >
                We are a passionate community of builders, 
                developers, and innovators dedicated 
                to propelling the advancements of
                Ethereum and Layer 2 blockchains in Abuja and Northern Nigeria. 
                Our mission is to bring together minds that are eager to shape
                the future of decentralized technology, right here in our vibrant region.
            </Text>
        </Flex>
        <AboutSlider />
      </Stack>
    </ContainerWrapper>
    </Box>
  )
}

export default aboutUI
