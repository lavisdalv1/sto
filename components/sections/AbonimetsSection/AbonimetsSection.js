import { Box, Container, Flex } from '@chakra-ui/react';

import { BlockGo } from '../../common/BlockGo';

export const AbonimetsSection = ({ t }) => (
  <Box
    maxW="1440px"
    margin="0 auto"
    backgroundImage={{
      base: '/images/bgAbonimentsMobile.png',
      sm: '/images/bgAbonimentsTablet.png',
      md: '/images/bgAboniments.png',
    }}
    backgroundRepeat="no-repeat"
    backgroundSize={{
      base: '100% 765px',
      sm: '100% 550px',
      md: '100% 702px',
    }}
    height={{ base: '765px', sm: '550px', md: '702px' }}
    mt={{ base: '78px', sm: '114px', md: '0px' }}
  >
    <Container h="100%">
      <Flex
        h="100%"
        alignItems={{ base: 'flex-start', sm: 'center' }}
        justifyContent={{ base: 'center', sm: 'flex-start' }}
      >
        <BlockGo
          mt={{ base: '92px', sm: '0px' }}
          mb={{ base: '0px', sm: '60px', md: '162px' }}
          maxW={{ base: '276px', md: '420px' }}
          colorH="white"
          colorD="white"
          heading={
            <>
              {t('AbonimetsSection.head')}{' '}
              <Box fontSize="lg" as="span">
                {t('AbonimetsSection.span')}
              </Box>
            </>
          }
          desc={t('AbonimetsSection.desc')}
        />
      </Flex>
    </Container>
  </Box>
);

export default AbonimetsSection;
