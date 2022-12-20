import { Flex, Button, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { useState } from 'react';
import NextLink from 'next/link';

import MainLink from '../../common/MainLink';
import { LogoAndText, ArrowLink } from '../../icons';
import DropDownDesctop from './menus/DropDownDesctop';
import { constants } from '../../../constants';

export const DesctopHeader = () => {
  const [state, setState] = useState(0);

  console.log(state);

  return (
    <Flex
      h="90px"
      alignItems="center"
      justifyContent="space-between"
      display={{ base: 'none', md: 'flex' }}
      position="relative"
      bg="red"
    >
      <div onClick={() => setState((prev) => prev + 1)}>button</div>
      <div>{state}</div>
      head
    </Flex>
  );
};

export default DesctopHeader;
