import { Flex, Avatar } from '@chakra-ui/react';

import NextLink from 'next/link';
import Image from 'next/image';

export const DesctopHeader = () => {
  return (
    <Flex
      h="90px"
      alignItems="center"
      justifyContent="space-between"
      display={{ base: 'none', md: 'flex' }}
      position="relative"
    >
      <Avatar src="/images/eagle.jpg" />
      <Flex>
        <Image src="/images/mobile.svg" width={20} height={20} />
        <NextLink href={`tel:+375333593275`}>+375 33 359 32 75</NextLink>
      </Flex>
    </Flex>
  );
};

export default DesctopHeader;
