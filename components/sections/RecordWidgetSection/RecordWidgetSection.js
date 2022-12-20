import { Box, Container, Flex, Text, HStack } from '@chakra-ui/react';

import {
  WidgetIcon,
  BlockaArrowIcon,
  FacceBookWhiteIcon,
  TwitterWhiteIcon,
  TikTokWhiteIcon,
  InstWhiteicon,
  DashesIcon,
} from '../../icons';
import Heading from '../../common/Heading';
import MainLink from '../../common/MainLink';

export const RecordWidgetSection = ({ t }) => (
  <Box
    backgroundImage={{
      base: '/images/bgWidetMobile.png',
      sm: '/images/bgWidget.png',
    }}
    backgroundRepeat="no-repeat"
    backgroundSize={{ base: '100% 851px', sm: '100% 550px', md: '100% 774px' }}
    height={{ base: '851px', sm: '550px', md: '774px' }}
  >
    <Container
      pt={{ base: '70px', sm: '82px', md: '101px' }}
      pb={{ base: '106px', sm: '129px', md: '277px' }}
      pl={{ base: '30px' }}
      pr={{ base: '30px' }}
    >
      <Flex
        justifyContent={{ sm: 'space-around', md: 'space-between' }}
        flexDirection={{ base: 'column-reverse', sm: 'row' }}
        alignItems="center"
      >
        <Flex alignItems="center" mt={{ base: '40px', sm: '0px' }}>
          <WidgetIcon />
        </Flex>
        <Box maxW={{ base: '340px', sm: '340px', md: '475px' }} w="100%">
          <Heading
            fill="white"
            variant="h2"
            color="white"
            mb="25px"
            ml={{ base: '0px', md: '39px' }}
            position="relative"
          >
            {t('RecordWidgetSection.head')}
            <DashesIcon
              position="absolute"
              left="-26px"
              top="-17px"
              fill="white"
            />
          </Heading>
          <Flex>
            <BlockaArrowIcon />
            <Text
              maxW="400px"
              fontSize="md"
              color="sub.v3"
              mb={{ base: '20px', md: '25px' }}
              ml={{ base: '11px', md: '17px' }}
            >
              {t('RecordWidgetSection.one')}{' '}
            </Text>
          </Flex>
          <Flex>
            <BlockaArrowIcon />
            <Text
              maxW="300px"
              fontSize="md"
              color="sub.v3"
              ml={{ base: '11px', md: '17px' }}
            >
              {t('RecordWidgetSection.two')}
            </Text>
          </Flex>
          <HStack spacing={{ base: 18, md: 35 }} ml="39px" mb="40px" mt="5px">
            <FacceBookWhiteIcon />
            <TwitterWhiteIcon />
            <TikTokWhiteIcon />
            <InstWhiteicon />
          </HStack>
          <MainLink color="sub.v3" white href={''} arrow ml="39px">
            {t('RecordWidgetSection.link')}
          </MainLink>
        </Box>
      </Flex>
    </Container>
  </Box>
);
