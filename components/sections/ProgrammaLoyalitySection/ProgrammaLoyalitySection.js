import { Flex, Image, Container, Box } from '@chakra-ui/react';

import { BlockGo } from '../../common/BlockGo';
import { LineDeshesIcon } from '../../icons';

export const ProgrammaLoyalitySection = ({ t }) => (
  <>
    <Container
      pt={{ base: '38px', sm: '62px', md: '88px' }}
      pb={{ base: '110px', sm: '91px', md: '93px' }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ base: 'column-reverse', sm: 'row' }}
      >
        <Image
          display={{ base: 'none', md: 'block' }}
          src="/images/bgProgrammaLoyality.svg"
          alt="bgProgrammaLoyality"
        />
        <Image
          display={{ base: 'block', md: 'none' }}
          src="/images/bgProgrammaLoyalityMobile.svg"
          alt="bgProgrammaLoyalityMobile"
        />
        <BlockGo
          mb={{ base: '', sm: '75px', md: '50px' }}
          maxW={{ base: '', sm: '263px', md: '495px' }}
          heading={
            <>
              {t('ProgrammaLoyalitySection.head')}{' '}
              <Box fontSize="lg" as="span">
                {t('ProgrammaLoyalitySection.span')}
              </Box>
            </>
          }
          desc={t('ProgrammaLoyalitySection.desc')}
        />
      </Flex>
    </Container>
    <LineDeshesIcon />
  </>
);

export default ProgrammaLoyalitySection;
