"use client";

import {
    Flex,
    Box,
    Text,
} from '@chakra-ui/react'
import { useAppSelector } from '@/hooks/rtkHooks';
import ContainerWrapper from '@/components/ContainerWrapper';
import { nanoid } from '@reduxjs/toolkit';

type Props = {};

const HomeUI = ({ pipelineData }: any) => {

  const { appTheme } = useAppSelector((state) => state.themeReducer);

    return (
      <Box py="5%">
       <ContainerWrapper padding={5}>
        <Flex>
          <Text>Landing page here</Text>
        </Flex>
       </ContainerWrapper>
      </Box>
    );
}

export default HomeUI