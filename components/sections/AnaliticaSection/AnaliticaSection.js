import { Box, Flex, Container } from '@chakra-ui/react';

import { AnaliticaIcon } from '../../icons';
import { BlockGo } from '../../common/BlockGo';

export const AnaliticaSection = ({ t }) => (
  <Box
    backgroundImage={{
      base: '/images/bgAnaliticaMobile.png',
      sm: '/images/bgAnaliticaTablet.png',
      md: '/images/bgAnalitica.png',
    }}
    backgroundRepeat="no-repeat"
    backgroundSize={{ base: '100% 759px', sm: '100% 550px', md: '100% 770px' }}
    height={{ base: '759px', sm: '550px', md: '770px' }}
  >
    <Container
      pt={{ base: '70px', sm: '82px', md: '101px' }}
      pb={{ base: '106px', sm: '129px', md: '277px' }}
    >
      <Flex
        justifyContent="space-between"
        flexDirection={{ base: 'column-reverse', sm: 'row' }}
        alignItems={{ base: 'center', sm: 'flex-start' }}
      >
        <AnaliticaIcon marginTop={{ base: '72px', sm: '0px' }} />
        <BlockGo
          maxW={'477px'}
          mt={{ base: '0xp', sm: '20px', md: '70px' }}
          colorH="white"
          colorD="sub.v3"
          heading={t('AnaliticaSection.head')}
          desc={t('AnaliticaSection.desc')}
        />
      </Flex>
    </Container>
  </Box>
);

export default AnaliticaSection;
