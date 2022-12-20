import { Box, Container, Text, Avatar } from '@chakra-ui/react';

import { StarIcon, StarV1icon, Sta } from '../../icons';
import Heading from '../../common/Heading';

export const AboutUsTemlateSection = ({ text, name, job, pathAvatar, t }) => (
  <Container
    pb={{ base: '88px', sm: '', md: '50px' }}
    pt={{ base: '88px', sm: '', md: '152px' }}
  >
    <Heading
      variant="h2"
      textAlign="center"
      mb={{ base: '28px', sm: '74px' }}
      position="relative"
    >
      {t('different.peopleAboutUS')}
      <StarV1icon
        display={{ base: 'none', md: 'block' }}
        position="absolute"
        top="55px"
        left="-39px"
      />
      <StarV1icon
        display={{ base: 'none', md: 'block' }}
        position="absolute"
        top="-6px"
        right="123px"
      />
    </Heading>
    <Box
      minH={{ base: '200px', sm: '150px', md: '288px' }}
      p={{
        base: '30px',
        sm: '25px 40px 32px 40px ',
        md: '47px 84px 36px 84px ',
      }}
      border="1px solid"
      borderColor="blue.blueV1"
      borderRadius="50px"
    >
      <Text fontSize={{ base: '4xs', sm: 'xs', md: 'md' }} color="black">
        {text}
      </Text>
      <Box
        mt="30px"
        display="flex"
        justifyContent="space-between"
        alignItems={{ base: 'flex-start', md: 'center' }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box display="flex">
          <Avatar
            h={{ base: '58px', md: '100px' }}
            w={{ base: '58px', md: '100px' }}
            src={pathAvatar}
          />
          <Box
            ml={{ base: '12px', md: '20px' }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Text
              fontSize={{ base: 'sm', md: 'lg' }}
              fontWeight="medium"
              color="black"
            >
              {name}
            </Text>
            <Text fontSize={{ base: 'xxs', md: 'sm' }}>{job}</Text>
          </Box>
        </Box>
        <Box>
          <StarIcon
            width={{ base: '17px', md: '30x' }}
            height={{ base: '17px', md: '30x' }}
          />
          <StarIcon
            width={{ base: '17px', md: '30x' }}
            height={{ base: '17px', md: '30x' }}
          />
          <StarIcon
            width={{ base: '17px', md: '30x' }}
            height={{ base: '17px', md: '30x' }}
          />
          <StarIcon
            width={{ base: '17px', md: '30x' }}
            height={{ base: '17px', md: '30x' }}
          />
          <StarIcon
            wwidth={{ base: '17px', md: '30x' }}
            height={{ base: '17px', md: '30x' }}
          />
        </Box>
      </Box>
    </Box>
  </Container>
);
