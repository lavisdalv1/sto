import { useState } from 'react';
import { Flex, Button, useDisclosure } from '@chakra-ui/react';

import NextLink from 'next/link';
import MainLink from '../../common/MainLink';
import { LogoAndText, BurgerIcon, MobLogoAndTextIocn } from '../../icons';
import TabletAndMobileMenu from './menus/TabletAndMobileMenu';
import { constants } from '../../../constants';

export const MobileHeader = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const [show, setShow] = useState(false);

  const openMenu = () => setShow(true);
  const closeMenu = () => setShow(false);

  return (
    <Flex
      h={{ base: '60px', sm: '90px' }}
      alignItems="center"
      justifyContent="space-between"
      display={{ base: 'flex', md: 'none' }}
    >
      <MainLink href="/" display={{ base: 'none', sm: 'block' }}>
        <LogoAndText />
      </MainLink>
      <MainLink href="/" display={{ base: 'block', sm: 'none' }}>
        <MobLogoAndTextIocn />
      </MainLink>
      <Flex
        ml={{ base: '30px', md: '82px' }}
        alignItems="center"
        flexDirection="row"
      >
        <NextLink href={constants.routs.registration}>
          <Button maxW="144px" w="144px" display={{ base: 'none', sm: 'flex' }}>
            registration
          </Button>
        </NextLink>
        <MainLink
          ml="18px"
          mr="45px"
          display={{ base: 'none', sm: 'flex' }}
          href={constants.routs.login}
        >
          signIn
        </MainLink>
        <BurgerIcon onClick={openMenu} />
      </Flex>
      <TabletAndMobileMenu isOpen={show} onClose={closeMenu} />
    </Flex>
  );
};

export default MobileHeader;
