import { Box, Text, Avatar } from '@chakra-ui/react';

import { StarIcon } from '../../icons';

export const CardReviev = ({ desc, name, job, src }) => (
  <Box
    p={{ base: '34px 24px', md: '35px' }}
    borderRadius="50px"
    background="white"
    maxW={'381px'}
    minW={{ base: '263px', md: '340px' }}
    minHeight={{ base: '335px', md: '298px' }}
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
  >
    <Text fontSize="sm">{desc}</Text>
    <Box display="flex">
      <Avatar loading="lazy" height="61px" width="61px" src={src} alt={name} />
      <Box ml="10px">
        <Text fontSize="name" color="black" fontWeight="medium">
          {name}
        </Text>
        <Text
          width={{ base: '140px', md: '220px' }}
          fontSize="sm"
          color="rgba(0, 0, 0, 0.6)"
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: ' ellipsis',
          }}
        >
          {job}
        </Text>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </Box>
    </Box>
  </Box>
);

export default CardReviev;
