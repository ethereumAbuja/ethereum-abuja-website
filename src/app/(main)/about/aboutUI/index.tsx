"use client";

import {
    Flex,
    Box,
    Text,
} from '@chakra-ui/react'
import ContainerWrapper from '@/components/ContainerWrapper';
import { useAppSelector } from '@/hooks/rtkHooks';

type Props = {};

const AboutUI = ({ pipelineData }: any) => {

    const { appTheme } = useAppSelector((state) => state.themeReducer);

  return (
    <Box py="4%">
    <ContainerWrapper>
      <Flex>
        <Text>About page is here</Text>
      </Flex>
    </ContainerWrapper>
  </Box>
  )
}

export default AboutUI
