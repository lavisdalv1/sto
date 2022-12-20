import { Flex, Container } from '@chakra-ui/react';

import { ClientsIcon, LineDeshesIcon } from '../../icons';
import { BlockGo } from '../../common/BlockGo';

export const ClientsSection = ({ t }) => (
  <>
    <Container
      pt={{ base: '40px', sm: '40px', md: '130px' }}
      pb={{ base: '80px', sm: '80px', md: '130px' }}
    >
      <Flex
        justifyContent="space-between"
        flexDirection={{ base: 'column-reverse', sm: 'row' }}
        alignItems={{ base: 'center' }}
      >
        <ClientsIcon />
        <Flex ml={{ base: '0px', sm: '50px' }} mr="auto">
          <BlockGo
            heading={t('ClientsSection.head')}
            desc={t('ClientsSection.desc')}
          />
        </Flex>
      </Flex>
    </Container>
    <LineDeshesIcon />
  </>
);

export default ClientsSection;
