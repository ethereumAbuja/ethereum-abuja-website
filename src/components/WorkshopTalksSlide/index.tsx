import React from 'react';
import {
  Box,
  VStack,
  Text,
  Button,
  Icon,
  Flex,
  Stack,
  HStack,
  Avatar, 
  Tooltip,
  IconButton
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { nanoid } from '@reduxjs/toolkit';
import { meetups } from '@/utils/dummyJSON';
import { Link } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useAppSelector } from '@/hooks/rtkHooks';
import {BsArrowUpRight} from 'react-icons/bs'

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const WorkshopsTalksSlide = () => {

  const { appTheme } = useAppSelector((state) => state.themeReducer);

  return (
    <Swiper
    slidesPerView={4}
    spaceBetween={30}
    centeredSlides={true}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
   {meetups.map((e: any) => (
        <SwiperSlide key={nanoid()}>
          <Flex
            flexDir="column"
            bg={appTheme.backgroundColor2}
            width={"100%"}
            maxW="500px"
            p="10px"
            borderRadius='12px'
            border="1px solid black"
          >
            <Flex
              flexDir="column"
              borderRadius="5px"
              bg={appTheme.backgroundColor}
              boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.05)"
              p="20px"
            >
              <Flex
               as="button"
               bg="#AC79FF"
               w="35%"
               h="25px"
               p="10px"
               borderRadius="50px"
               fontWeight={600}
               justify="center"
               alignItems="center"
               border="1.5px solid black"
               textTransform="uppercase"
              >
                <Text fontSize=".75rem" lineHeight="1rem">Meet-up</Text>
              </Flex>

              <Flex flexDir="column" mt="15px"  textAlign="start">
                <Text fontSize="18px" fontWeight={500} color="black">
                 {e.title}
                </Text>
                <Text mt="10px" color="black" fontWeight={500} fontSize="12px" lineHeight="1.25rem">ETHAbuja 2023</Text>
              </Flex>
               
               {/* --------------------- DATE -------------------------- */}
              <Flex
               as="button"
               w="45%"
               h="25px"
               p="10px"
               borderRadius="5px"
               fontWeight={400}
               justify="center"
               alignItems="center"
               border="2px solid black"
               mt="15px"
              >
                <Text fontSize="12px" color="black">{e.date}</Text>
              </Flex>

            </Flex>

            <Flex 
            as="button"
            justify="space-between"
            bg={appTheme.backgroundColor5}
            borderRadius="0 0 10px 10px"
            borderTop="1px solid black"
            p="20px"
            alignItems="center"
            >
             <Link href={e.link} isExternal>
             <Text fontSize="16px" fontWeight={600} color="black">Learn More</Text>
             </Link>
             <IconButton
               bg="none"
               color="black"
               _hover={{
                 bg: 'none',
               }}
               aria-label="Subscribe"
               icon={<BsArrowUpRight />}
               height="100%"
              /> 
            </Flex>
          </Flex>
        </SwiperSlide>
      ))}
  </Swiper>
  );
};

export default WorkshopsTalksSlide;
