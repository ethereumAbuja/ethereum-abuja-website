"use client";

import {
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Center,
    chakra, 
    SimpleGrid
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import Images_Icons from '@/constants/icons-images';
import { ETHABJ_SVG } from '@/assets/svg';
import NavBar from '@/components/NavBar';
import { partners } from '@/utils/dummyJSON';
import { useAppSelector } from '@/hooks/rtkHooks';
import ContainerWrapper from '@/components/ContainerWrapper';
import dynamic from 'next/dynamic';
import { useMediaQuery } from "@chakra-ui/react"; 

const WorkshopsTalksSlide = dynamic(() => import("@/components/WorkshopTalksSlide"));

type Props = {};

const homeUI = ({ pipelineData }: any) => {

  const { appTheme } = useAppSelector((state) => state.themeReducer);

    return (
      <Box py="5%">
       <ContainerWrapper padding={5}>
         <Stack>
           <Flex justify="space-between">
             <Stack flexDir="column" mt="60px">
               <Text fontSize="3.75rem"  fontWeight={600} lineHeight={1}>
                Welcome to 
                <br />
                web3abuja.eth
              </Text>
               <Text mt="10px" fontSize="16px">
                Where Traditional Ingenuity Meets Digital Innovation
               </Text>
               <Link href="https://chat.whatsapp.com/FcsSrUumLY0IdBUcsXqcQi" isExternal>
               <Button
               bg={appTheme.backgroundColorReverse}
               p="10px 20px"
               mt="10px"
               color={appTheme.backgroundColor}
               _hover={{ bg: `${appTheme.backgroundColorReverse}`, }}
               fontSize="16px"
               fontWeight="400"
               borderRadius="15px"
               w="200px"
               h="50px"
               >
                Join The Community
               </Button>
               </Link>
             </Stack>
             <Stack>
               {ETHABJ_SVG().homeBackground()}
             </Stack>
           </Flex>
         </Stack>
      </ContainerWrapper>
       {/* ---------------- Curve Edge --------------------- */}
        <Box mt="-200px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#F4EFF4" fill-opacity="1" d="M0,288L80,261.3C160,235,320,181,480,138.7C640,96,800,64,960,80C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </Box>
        <Stack bg="#F4EFF4">
         <ContainerWrapper>
            <Flex flexDir="column" alignItems="center">
              <Flex flexDir="column" textAlign="center" mb="30px">
                <Text 
                  fontSize="18px" 
                  textTransform="uppercase" 
                  opacity={0.5}
                  >
                  Schedule
                 </Text>
                <Text 
                fontSize="60px" 
                lineHeight="1" 
                fontWeight={500}
                mt="8px"
                pb="10px"
                >
                   Physical Meetups
                  </Text>
                  <chakra.p mt="10px" opacity={0.5} lineHeight="1.25rem"
                  maxWidth="700px"
                  >
                  "Connect, Collaborate, and Create"
                  <br/>
                   Join our regular meetups to network with like-minded individuals, share insights, and foster collaborations that can redefine the digital landscape.
                  </chakra.p>
                </Flex>
              <WorkshopsTalksSlide />
            </Flex>
         </ContainerWrapper>
       </Stack>
       <Box>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#F4EFF4" fill-opacity="1" d="M0,128L80,144C160,160,320,192,480,208C640,224,800,224,960,192C1120,160,1280,96,1360,64L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
       </Box>

        <ContainerWrapper>
            <Flex flexDir="column" alignItems="center">
            <Flex flexDir="column" textAlign="center" mb="30px">
            <Text 
              fontSize="18px" 
              textTransform="uppercase" 
              opacity={0.5}
              >
             Partners
            </Text>
            <Text 
              fontSize="60px" 
              lineHeight="1" 
              fontWeight={500}
              mt="8px"
              pb="10px"
             >
              Our ecosystem
              <br />
              partners
            </Text>

            <SimpleGrid
             columns={[2, 2, 3, 4, 4]}
             spacingX={["35px", "35px", "35px", "15px", "35px"]}
             w={"100%"}
             mt="40px"
            >
              {partners.map((e) => (
              <Link href={e.partnerwebsite} isExternal>
              <Box
              as="button"
              width="200px"
              height="200px"
              border="1.5px solid rgba(0, 0, 0, 0.07)"
              textAlign="center"
              p="20px"
              borderRadius="10px"
              _hover={{ bg: `${appTheme.backgroundColor2}`}}
              >
              <Image
                src={e.partnerimage}
                alt="aya logo"
                />
                <Text mt="10px">{e.partnername}</Text>
              </Box>
              </Link>
              ))}
            </SimpleGrid>
           </Flex>
          </Flex>
       </ContainerWrapper>


      </Box>
    );
}

export default homeUI