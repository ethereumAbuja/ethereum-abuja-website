"use client"

import {
  Flex,
  Box,
  Text,
} from '@chakra-ui/react'
import ContainerWrapper from "@/components/ContainerWrapper";
import { useAppSelector } from '@/hooks/rtkHooks';

type Props = {};

const GuideUI = ({ pipelineData }: any) => {

   const { appTheme } = useAppSelector((state) => state.themeReducer);

  return (
    <Box py="4%">
    <ContainerWrapper>
      <Flex>
        <Text>Resources page is here</Text>
      </Flex>
    </ContainerWrapper>
  </Box>
  )
}

export default GuideUI
