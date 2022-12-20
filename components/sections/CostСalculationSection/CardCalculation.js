import { Box, Text, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { constants } from '../../../constants';

export const CardCalculation = ({
  hit,
  term,
  desc,
  costMonth,
  total,
  typeCurrecny,
  month,
  t,
}) => (
  <Box
    h="348px"
    w="269px"
    bg="#F5F5F5"
    borderRadius="30px"
    overflow="hidden"
    border={hit && '1px solid'}
    borderColor={hit && 'blue.blueV1'}
  >
    {hit && (
      <Box
        h="33px"
        bg="blue.blueV1"
        color="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {t('CostСalculationSection.hit')}
      </Box>
    )}

    <Box
      p="0px 41px 34px 41px"
      display="flex"
      flexDirection="column"
      height={hit ? '90%' : '100% '}
      justifyContent="flex-end"
    >
      <Box display="flex" alignItems="flex-end">
        <Text fontSize="3xl" lineHeight="60px" color="black">
          {term}
        </Text>
        <Text color="black" ml="15px" mb="8px">
          {month}
        </Text>
      </Box>
      <Text h="27px" fontSize="xxs" mt="8px">
        {desc}
      </Text>
      <Box display="flex" fontSize="sm" mt="24px" whiteSpace="pre">
        <Text color="blue.blueV1">
          {t('CostСalculationSection.coastMoth')}{' '}
        </Text>
        {costMonth} {typeCurrecny ? 'BYN' : 'EUR'}
      </Box>
      <Box display="flex" fontSize="sm" mb="20px" whiteSpace="pre">
        <Text color="blue.blueV1">{t('CostСalculationSection.total')} </Text>{' '}
        {total} {typeCurrecny ? 'BYN' : 'EUR'}
      </Box>
      <NextLink href={constants.routs.registration}>
        <Button>{t('different.try')}</Button>
      </NextLink>
    </Box>
  </Box>
);
