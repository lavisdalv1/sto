import { Flex, useDisclosure, Avatar, Link, Box } from '@chakra-ui/react';

import NextLink from 'next/link';

import Heading from '../../common/Heading';
import Image from 'next/image';
import CloseAccordionIcon from '../../icons/CloseAccordionIcon';

export const MobileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      h={{ base: '60px', sm: '90px' }}
      alignItems="center"
      justifyContent="space-between"
      display={{ base: 'flex', md: 'none' }}
    >
      <NextLink href="/">
        <Flex alignItems="center">
          <Avatar src="/images/eagle.jpg" />
          <Heading variant="h4" ml="10px">
            Eagle
          </Heading>
        </Flex>
      </NextLink>
      <Image onClick={onOpen} src="/images/burger.gif" height={20} width={20} />
      <Box
        position="absolute"
        display={isOpen ? 'block' : 'none'}
        bg="white"
        width="100%"
        height="100vh"
        left={0}
        top={0}
        zIndex="2147000000 !important"
        p="20px"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <NextLink href="/">
            <Flex alignItems="center">
              <Avatar src="/images/eagle.jpg" />
              <Heading variant="h4" ml="10px">
                Eagle
              </Heading>
            </Flex>
          </NextLink>
          <CloseAccordionIcon onClick={onClose} />
        </Flex>
        <Flex flexDirection="column" mt="20px">
          <Link mr="6px" href={'#uslugi'} onClick={onClose}>
            Услуги
          </Link>
          <Link mr="6px" mt="6px" href={'#jobs'} onClick={onClose}>
            Работы
          </Link>
          <Link mr="6px" mt="6px" href={'#contacts'} onClick={onClose}>
            Контакты и карта
          </Link>
          <Flex mt="20px">
            <Image src="/images/mobile.svg" width={20} height={20} />
            <NextLink href={`tel:+375333593275`}>+375 33 359 32 75</NextLink>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default MobileHeader;
