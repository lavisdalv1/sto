import { Box } from '@chakra-ui/react';
// import NextLink from 'next/link';

import { LineIcon, ArrowGotoIcon } from '../../icons';

export const LineAndButton = ({ href = '', lineBlue = false, ...props }) => (
  <Box position="relative" h="29px" {...props}>
    <LineIcon lineBlue={lineBlue} />
    {/* <NextLink href={'#'}> */}
    <ArrowGotoIcon
      cursor="pointer"
      position="absolute"
      top={{ base: '-17px', sm: '-20px' }}
      left={{ base: '43%', sm: '45%' }}
    />
    {/* </NextLink> */}
  </Box>
);

export default LineAndButton;
