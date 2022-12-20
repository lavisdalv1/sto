import { Box, Image, Flex } from '@chakra-ui/react';

import { BlockGo } from '../../common/BlockGo';

export const PayrollSection = ({ t }) => (
  <Box
    maxWidth="1216px"
    margin="0 auto"
    pt={{ base: '76px', sm: '76px', md: '80px' }}
    pb={{ base: '90px', sm: '40px', md: '120px' }}
  >
    <Flex
      justifyContent="space-between"
      flexDirection={{ base: 'column-reverse', sm: 'row' }}
      alignItems={{ base: 'center', sm: 'flex-start' }}
    >
      <Image
        w="647px"
        display={{ base: 'none', md: 'block' }}
        src="/images/payrollIcon.svg "
        alt="payrollIcon"
      />

      <Image
        display={{ base: 'none', sm: 'block', md: 'none' }}
        src="/images/payrollTabletIcon.svg"
        alt="payrollTabletIcon"
      />

      <Image
        display={{ base: 'block', sm: 'none', md: 'none' }}
        src="/images/payrollMobileIcon.svg"
        alt="payrollMobileIcon"
      />

      <BlockGo
        p={{ base: '33px', sm: '0px' }}
        mt={{ base: '0px', sm: '78px' }}
        mr={{ base: '0px', sm: '49px' }}
        ml={{ base: '0xp', sm: '30px' }}
        maxW="447px"
        heading={t('PayrollSection.head')}
        desc={t('PayrollSection.desc')}
      />
    </Flex>
  </Box>
);

export default PayrollSection;
