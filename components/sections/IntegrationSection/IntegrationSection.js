import { Box, Container } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BlockGo } from '../../common/BlockGo';
import { LineAndButton } from '../../common/LineAndButton';

export const IntegrationSection = ({ t }) => {
  const router = useRouter();
  const language =
    router.locale === 'ru' || router.locale === 'be' || router.locale === 'ua';

  return (
    <>
      <Box
        backgroundImage={{
          base: language
            ? '/images/bgIntegrationMobile.svg'
            : '/images/bgIntegrationMobile_eng.svg',
          sm: language
            ? '/images/bgIntegrationtablet.svg'
            : '/images/bgIntegrationtablet_eng.svg',
          md: language
            ? '/images/bgIntegration.svg'
            : '/images/bgIntegration_eng.svg',
        }}
        backgroundRepeat="no-repeat"
        backgroundSize={{
          base: '100% 670px',
          sm: '100% 408px',
          md: '100% 675px',
        }}
        minHeight={{ base: '670px', sm: '408px', md: '675px' }}
      >
        <Container>
          <BlockGo
            pt={{ base: '', sm: '50px', md: '150px' }}
            heading={t('IntegrationSection.head')}
            desc={t('IntegrationSection.desc')}
          />
        </Container>
      </Box>
      <LineAndButton />
    </>
  );
};

export default IntegrationSection;
