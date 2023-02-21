'use client';

import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Flex,
} from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CloseAccordionIcon, OpenAccordionIcon } from '../components/icons';
import Heading from '../components/common/Heading';
// import { gql } from '@apollo/client';
// import client from '../appoloClient';
import { dataPrice } from '../mockData/svarka';
import Slider from 'react-slick';
import { Montserrat } from '@next/font/google';
import Image from 'next/image';
// Georama
export const myFont = Montserrat({
  weight: '400',
  style: ['normal', 'italic'],
  weight: ['400', '500'],
});

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      alt="arrow"
      src="/images/arrow.png"
      onClick={onClick}
      className={className}
      style={{ transform: 'rotate(90deg)' }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      alt="arrow"
      src="/images/arrow.png"
      onClick={onClick}
      className={className}
      style={{ transform: 'rotate(270deg)' }}
    />
  );
}

const BannerCard = ({ head }) => (
  <Box height={{ base: '150px', sm: '350px' }}>
    <Flex justifyContent="space-between" position="relative">
      <Box
        position="absolute"
        left={{ base: '0px', sm: '80px' }}
        bg="#000"
        h="350px"
        w={{ base: '40px', sm: '100px' }}
        transform="skew(-20deg)"
        zIndex={2}
      />
      <Box
        position="absolute"
        right={{ base: '65px', sm: '80px' }}
        bg="#000"
        h="350px"
        w={{ base: '40px', sm: '100px' }}
        transform="skew(-20deg)"
        zIndex={2}
      />
      <Flex
        justifyContent="center"
        alignItems="center"
        h={{ base: '150px', sm: '350px' }}
        w="100%"
        zIndex={2}
      >
        <Heading variant="h3" w={{ base: '100px', sm: 'auto' }}>
          {head}
        </Heading>
      </Flex>
    </Flex>
  </Box>
);

export default function Page() {
  const settings = {
    infinite: true,

    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsBanner = {
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const stylesPhoto = {
    position: 'relative',
    overflow: 'hidden',
    h: { base: '220px', sm: '500px' },
    w: '200px',
  };

  const phohtos = [
    {
      photo: 1,
    },
    {
      photo: 2,
    },
    {
      photo: 3,
    },
    {
      photo: 4,
    },
    {
      photo: 5,
    },
    {
      photo: 12,
    },
    {
      photo: 7,
    },
    {
      photo: 8,
    },
    {
      photo: 9,
    },
    {
      photo: 10,
    },
    {
      photo: 11,
    },
  ];
  return (
    <Box>
      <Box height={{ base: '150px', sm: '350px' }} m="30px 0 30px 0">
        <Slider {...settingsBanner}>
          <BannerCard head="Сварка" />
          <BannerCard head="Полировка" />
          <BannerCard head="Окраска" />
          <BannerCard head="Беспокрасочное удаления вмятин (PDR)" />
        </Slider>
      </Box>
      <Heading id="uslugi" variant="h3" mb={{ base: '15px', sm: '40px' }}>
        Наши Услуги
      </Heading>
      <Accordion allowToggle variant="accord">
        {dataPrice?.map(({ title, data }, index) => (
          <AccordionItem key={index}>
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Heading
                    h={{ base: 'auto', sm: '42px' }}
                    fontSize={{ base: 'xxs', sm: 'md' }}
                    fontWeight="medium"
                    variant="h3"
                    flex="1"
                    textAlign="left"
                    lineHeight={{ base: '14px', md: 'smaller' }}
                  >
                    {title}
                  </Heading>
                  {isExpanded ? <CloseAccordionIcon /> : <OpenAccordionIcon />}
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <TableContainer>
                    <Table size="sm">
                      <Thead>
                        <Tr>
                          <Th>Вид работ</Th>
                          <Th isNumeric>цена</Th>
                          {index ? <Th isNumeric>снятие/уст.</Th> : null}
                          {/* <Th isNumeric>multiply by</Th> */}
                        </Tr>
                      </Thead>
                      <Tbody>
                        {data.map(({ price, name, takeOffInstall }, index) => (
                          <Tr key={index}>
                            <Td fontWeight={'500'}>
                              <Heading variant="h5">{name}</Heading>
                            </Td>
                            <Td isNumeric>от {price}</Td>

                            {takeOffInstall ? (
                              takeOffInstall === '-' ? (
                                <Td isNumeric>-</Td>
                              ) : (
                                <Td isNumeric>от {takeOffInstall}</Td>
                              )
                            ) : null}
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
      <Box mt="20px" mb="30px">
        <Heading id={'jobs'} variant="h3" mb={{ base: '15px', sm: '40px' }}>
          Наши работы
        </Heading>
        <Slider {...settings}>
          {phohtos.map(({ photo }) => (
            <Box {...stylesPhoto}>
              <Image alt="Наша работа" fill src={`/images/jobs/${photo}.jpg`} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
