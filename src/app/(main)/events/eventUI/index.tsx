"use client"

import {
  Stack,
  Flex,
  Box,
  Text,
} from '@chakra-ui/react'
import ContainerWrapper from "@/components/ContainerWrapper";
import { useAppSelector } from '@/hooks/rtkHooks';
import Lottie from "lottie-react";
import comingsoon from '@/assets/json/animation_ln4m4xov.json'

type Props = {};

const eventUI = ({ pipelineData }: any) => {
  return (
    <Box py="4%" bgImage="linear-gradient(90deg, rgba(255,220,232,0.4768032212885154) 35%, rgba(227,229,255,0.37316176470588236) 100%)">
      <ContainerWrapper>
        <Flex flexDir="column" justify="center" alignItems="center">
        <Text fontSize="48px" fontWeight="600">Events</Text>
        <Text fontSize="1.125rem" lineHeight="1.75rem"
            color="#787579"
            >
             Hackathons & Summits
            </Text>
            
            <Flex w={"100%"} flexDir="column" px="5%">
                <Lottie animationData={comingsoon} style={{ height: 400 }} />
            </Flex>
        </Flex>
      </ContainerWrapper>
    </Box>
  )
}

export default eventUI
