import { Flex, Avatar, Link } from '@chakra-ui/react';

import NextLink from 'next/link';
import Image from 'next/image';
import Heading from '../../common/Heading';

export const DesctopHeader = () => {
  return (
    <Flex
      h="90px"
      alignItems="center"
      justifyContent="space-between"
      display={{ base: 'none', md: 'flex' }}
      position="relative"
    >
      <NextLink href="/">
        <Flex alignItems="center">
          <Avatar src="/images/eagle.jpg" />
          <Heading variant="h4" ml="10px">
            Eagle
          </Heading>
        </Flex>
      </NextLink>

      <Flex>
        <Link mr="6px" mt="2px" href={'#uslugi'}>
          Услуги
        </Link>
        <Link mr="6px" mt="2px" href={'#jobs'}>
          Работы
        </Link>
        <Link mr="6px" mt="2px" href={'#contacts'}>
          Контакты
        </Link>
        <Flex>
          <Image
            alt="Мобильный телефон СТО Гомель"
            src="/images/mobile.svg"
            width={20}
            height={20}
          />
          <NextLink href={`tel:+375333593275`}>+375 33 359 32 75</NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DesctopHeader;
