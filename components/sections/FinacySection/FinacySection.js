import { Box, Flex, Container, Image } from '@chakra-ui/react';

import { BlockGo } from '../../common/BlockGo';

export const FinacySection = ({ t }) => (
  <Container
    pt={{ base: '110px', sm: '43px', md: '126px' }}
    pb={{ base: '67px', sm: '105px', md: '84px' }}
  >
    <Flex
      justifyContent="space-between"
      flexDirection={{ base: 'column', sm: 'row' }}
    >
      <BlockGo
        maxW="100%"
        heading={
          <>
            {t('FinacySection.head')}{' '}
            <Box fontSize="lg" as="span">
              {t('FinacySection.span')}
            </Box>
          </>
        }
        desc={t('FinacySection.desc')}
      />
      <Image
        display={{ base: 'none', md: 'block' }}
        src="/images/bgFinacy.png"
        alt="bgFinacy"
      />
      <Image
        display={{ base: 'block', md: 'none' }}
        src="/images/bgFinacyMobile.png"
        alt="bgFinacyMobile"
      />
    </Flex>
  </Container>
);

export default FinacySection;
