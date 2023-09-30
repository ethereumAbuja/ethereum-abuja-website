import { Box, Container, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import ContainerWrapper from '@/components/ContainerWrapper';
import Images_Icons from '@/constants/icons-images';
import image1 from '@/assets/images/image-1.jpg';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { nanoid } from '@reduxjs/toolkit';
import { slides } from '@/utils/dummyJSON';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';

const AboutSlider = () => {
  return (
    <ContainerWrapper padding={5}>
    <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
       {slides.map((e: any) => (
            <SwiperSlide key={nanoid()}>
              <Box
                textAlign="center"
                fontSize="18px"
                background="#fff"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p="2"
              >
               <Image
               //@ts-ignore
                src={e.image}
                alt={e.description} 
                // width={300}
                // height={300}
                />
              </Box>
            </SwiperSlide>
          ))}
      </Swiper>
    </ContainerWrapper>
  );
};

export default AboutSlider;
