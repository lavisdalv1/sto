import { Box, Flex, Container, Image } from '@chakra-ui/react';

import BlockGo from '../../common/BlockGo/BlockGo';

export const StaffSection = ({ t }) => (
  <Container
    pt={{ base: '77px', sm: '70px', md: '70px' }}
    pb={{ base: '93px', sm: '77px', md: '123px' }}
  >
    <Flex
      justifyContent="space-between"
      flexDirection={{ base: 'column', sm: 'row' }}
      alignItems={{ base: 'center', md: 'flex-start' }}
    >
      <BlockGo
        mt={{ base: '0px', md: '78px' }}
        heading={t('StaffSection.head')}
        desc={t('StaffSection.desc')}
      />

      <Image
        w={{ base: '337px', sm: '344px', md: '810px' }}
        h={{ base: '241px', sm: '246px', md: '560px' }}
        objectFit="contain"
        src="/images/staff.svg"
        alt="staff"
      />
    </Flex>
  </Container>
);

export default StaffSection;
