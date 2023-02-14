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

export default function Page() {
  const settings = {
    infinite: true,

    slidesToShow: 2,
    slidesToScroll: 2,

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
                            <Td fontWeight={'500'}>{name}</Td>
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
              <Image fill src={`/images/jobs/${photo}.jpg`} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
