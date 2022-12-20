import { Image, Flex, Container } from '@chakra-ui/react';

import { BlockGo } from '../../common/BlockGo';
import { LineAndButton } from '../../common/LineAndButton';

export const ServiceSection = ({ t }) => (
  <>
    <Container
      pt={{ base: '36px', sm: '0px' }}
      pb={{ base: '60px', sm: '129px', md: '114px' }}
    >
      <Flex
        justifyContent="space-between"
        flexDirection={{ base: 'column', sm: 'row' }}
        alignItems={{ base: 'center', sm: 'flex-start' }}
      >
        <BlockGo
          mt={{ base: '0px', sm: '98px' }}
          maxW="466px"
          heading={t('ServiceSection.head')}
          desc={t('ServiceSection.desc')}
        />
        <Image
          w="647px"
          display={{ base: 'none', md: 'block' }}
          src="/images/serviceIcon.svg"
          alt="serviceIcon"
        />

        <Image
          display={{ base: 'block', md: 'none' }}
          src="/images/serviceMobileIcon.svg"
          alt="serviceMobileIcon"
        />
      </Flex>
    </Container>
    <LineAndButton lineBlue />
  </>
);
