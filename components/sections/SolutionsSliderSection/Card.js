import { Text, Box, Flex } from '@chakra-ui/react';
import Heading from '../../common/Heading';
import MainLink from '../../common/MainLink';
import { getSliderIcon } from '../../../utils/getSliderIcon';

export const Card = ({ title, description, link, color }) => (
  <Box
    w={{ base: '280px', md: '325px' }}
    // minH={{ base: '280px', md: '428px' }}
    minH={'100%'}
    bg="#F5F5F5"
    borderRadius="50px"
    m={{ base: '0 auto' }}
  >
    <Box
      h={{ base: '58px', md: '126px' }}
      borderRadius="50px 50px 0px 0px"
      overflow="hidden"
    >
      {getSliderIcon(color)}
    </Box>

    <Box
      p={{ base: '15px 25px 25px 25px', md: '24px' }}
      minH={{ base: '220px', md: '300px' }}
    >
      <Box
        minH={{ base: '150px', md: '220px' }}
        // display="flex"
        // maxH="185px"
      >
        <Box minH={{ base: '25px', md: '56px' }}>
          <Heading variant="h3">{title}</Heading>
        </Box>
        <Text
          color="gray.500"
          // h={{ base: '115px', md: '130px' }}
          // noOfLines={[6, 7]}
          fontSize="sm"
          color="sub.v2"
        >
          {description}
        </Text>
      </Box>
      <Box mt="auto">
        {link && (
          <MainLink href={link} arrow>
            Пример страницы записи
          </MainLink>
        )}
      </Box>
    </Box>
  </Box>
);

export default Card;
