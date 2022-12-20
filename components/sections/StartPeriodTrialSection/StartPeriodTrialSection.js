import { Container, Button, Center, Text, Box } from '@chakra-ui/react';
import NextLink from 'next/link';

import {
  BulbIcon,
  DashesV2Icon,
  StarV1icon,
  CircleIcon,
  DashesIcon,
} from '../../icons';
import { Heading } from '@chakra-ui/react';
import { constants } from '../../../constants';

export const StartPeriodTrialSection = ({ t }) => (
  <Container
    pt={{ base: '50px', md: '100px' }}
    pb={{ base: '50px', md: '100px' }}
    position="relative"
  >
    <StarV1icon
      height="20px"
      width="27px"
      position="absolute"
      right={{ base: '57px', md: '0px' }}
      top={{ base: '14px', md: '300px' }}
    />
    <CircleIcon
      display={{ base: 'none', md: 'block' }}
      position="absolute"
      left="-20px"
      top="216px"
    />
    <DashesIcon
      display={{ base: 'block', md: 'none' }}
      position="absolute"
      left={{ base: '30px', sm: '53px' }}
      top={{ base: '38px', sm: '38px' }}
    />
    <Center
      minH={{ base: '349px', sm: '339px', md: '478px' }}
      bg="blue.blueV1"
      borderRadius="50px"
      p={{ base: '29px 20px 36px 20px', sm: '88px 20px 96px 20px' }}
      flexDirection="column"
      position="relative"
    >
      <CircleIcon
        display={{ base: 'none', md: 'block' }}
        width="5px"
        height="5px"
        position="absolute"
        left="80px"
        top="180px"
      />
      <CircleIcon
        display={{ base: 'none', md: 'block' }}
        position="absolute"
        right="80px"
        top="149px"
      />
      <StarV1icon
        display={{ base: 'none', md: 'block' }}
        height="15px"
        width="17px"
        position="absolute"
        left="161px"
        bottom="170px"
      />
      <BulbIcon />
      <Heading
        variant="h2"
        color="white"
        maxW="541px"
        textAlign="center"
        mt="22px"
        fontSize={{ base: '24px', md: '36px' }}
      >
        {t('StartPeriodTrialSection.head')}
      </Heading>
      <Text
        display={{ base: 'none', sm: 'block' }}
        color="white"
        maxW="300px"
        textAlign="center"
        fontSize={{ base: '9px', sm: 'sm' }}
        m="10px 0px 23px 0px"
      >
        {t('StartPeriodTrialSection.sub')}
      </Text>

      <Box alignItems="center" position="relative">
        <NextLink href={constants.routs.registration}>
          <Button
            _hover={{ bg: 'black' }}
            maxW="152px"
            w="152px"
            mt={{ base: '19px', md: '0px' }}
          >
            {t('different.try')}
          </Button>
        </NextLink>
        <DashesV2Icon
          display={{ base: 'none', md: 'block' }}
          position="absolute"
          right="-25px"
          top="-20px"
        />
      </Box>

      <Text
        display={{ base: 'block', sm: 'none' }}
        color="white"
        maxW="300px"
        textAlign="center"
        fontSize={{ base: '3xs', sm: 'sm' }}
        mt="10px"
        w="196px"
      >
        {t('StartPeriodTrialSection.sub')}
      </Text>
    </Center>
  </Container>
);

export default StartPeriodTrialSection;
