import { Container, Flex } from '@chakra-ui/react';

import { useTopPage } from '../../../hooks/useTopPage';

import MobileHeader from './MobileHeader';
import DesctopHeader from './DesctopHeader';

export const Header = () => {
  const border = useTopPage();

  return (
    <Flex
      position="sticky"
      top="0px"
      bgColor="white"
      zIndex={1}
      transition="0.7s"
      boxShadow={border ? '0px 4px 20px rgba(0, 0, 0, 0.06)' : '0px'}
    >
      <Container>
        <MobileHeader />
        <DesctopHeader />
      </Container>
    </Flex>
  );
};

export default Header;
