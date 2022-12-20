import { Box, Flex } from '@chakra-ui/react';

import { BlockGo } from '../../common/BlockGo';

export const TelefonySection = ({ t }) => (
  <Box
    maxW="1216px"
    margin="0 auto"
    backgroundImage={{
      base: '/images/BgTelefonyMobile.svg',
      sm: '/images/BgTelefonyTablet.svg',
      md: '/images/BgTelefony.svg',
    }}
    backgroundRepeat="no-repeat"
    backgroundSize={{
      base: '375px  456px',
      sm: '421px 440px',
      md: '100% 666px',
    }}
    backgroundPosition={{ base: 'bottom', sm: 'initial' }}
    height={{ base: '600px', sm: '440px', md: '666px' }}
    p={{ base: '0px 33px 0px 33px', md: '0px 60px 0px 60px' }}
    mt={{ base: '20px', sm: '40px' }}
  >
    <Flex
      justifyContent={{ base: 'center', sm: 'flex-end' }}
      alignItems="center"
      height={{ base: 'auto', sm: '100%' }}
    >
      <BlockGo
        mb={{ base: '0px', md: '143px' }}
        maxW={{ base: '295px', sm: '330px', md: '484px' }}
        heading={t('TelefonySection.head')}
        desc={t('TelefonySection.desc')}
      />
    </Flex>
  </Box>
);

export default TelefonySection;
