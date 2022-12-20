import { Flex } from '@chakra-ui/react';
import Header from '../Header';
import Footer from '../Footer';

export const MainLayout = ({ children }) => (
  <Flex w="100%" minHeight="100vh" flexDirection="column">
    <Header />
    {children}
    <Footer />
  </Flex>
);

export default MainLayout;
