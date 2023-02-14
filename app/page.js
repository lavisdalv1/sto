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
import { CloseAccordionIcon, OpenAccordionIcon } from '../components/icons';
import Heading from '../components/common/Heading';
// import { gql } from '@apollo/client';
// import client from '../appoloClient';
// import Image from 'next/image';
import { dataPrice } from '../mockData/svarka';

import { Montserrat } from '@next/font/google';
// Georama
export const myFont = Montserrat({
  weight: '400',
  style: ['normal', 'italic'],
  weight: ['400', '500'],
});

export default function Page() {
  return (
    <Box>
      <Heading variant="h3" mb={{ base: '15px', sm: '40px' }}>
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
    </Box>
  );
}
