import { Box, Image, Container } from '@chakra-ui/react';

import { BlockGo } from '../../common/BlockGo';
import { ArrowLongIcon } from '../../icons';

export const MaterialAccountingSection = ({ t }) => (
  <>
    <Box
      backgroundImage={{
        base: 'none',
        sm: '/images/MaterialAccountingMobile.png',
        md: '/images/MaterialAccounting.png',
      }}
      backgroundRepeat="no-repeat"
      backgroundPosition={'100%'}
      pb={{ base: '90px', sm: '40px', md: '120px' }}
      height={{ base: '580px', sm: '333px', md: '652px' }}
    >
      <Container pt={{ base: '0px', sm: '80px', md: '140px' }}>
        <BlockGo
          maxW={{ base: '276px', md: '453px' }}
          heading={t('MaterialAccountingSection.head')}
          desc={t('MaterialAccountingSection.desc')}
        />
      </Container>
      <Image
        pt={{ base: '70px', sm: '0px' }}
        m="0 auto"
        display={{ base: 'block', sm: 'none' }}
        src="/images/MaterialAccountingMobile.png"
        alt="MaterialAccountingMobile"
      />
    </Box>
    <ArrowLongIcon display={{ base: 'none', sm: 'block' }} />
  </>
);
