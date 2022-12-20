import { Container, Box } from '@chakra-ui/react';

import {
  BigudiIcon,
  BfIcon,
  MySpaceIcon,
  MarafetIcon,
  DobrayClinica,
  ParikmaherkayIcon,
  BastetIcon,
  LuxorIcon,
  JustWorkIcon,
  ArtDentIcon,
  LedyLabIcon,
  SonaryIcon,
  KrasavaIcon,
  VivaldiMedicaIcon,
  PushkariIcon,
  DomBiutiIcon,
  NumberOneIcon,
  BeautyExprexxIcon,
  PafiyIcon,
  UroandroIcon,
  KIllerBeauty,
} from '../../icons/brends';
import { LineIcon } from '../../icons';

export const BrendsSection = () => {
  return (
    <Box>
      <Container
        pt={{ base: '77px', md: '115px' }}
        pb={{ base: '50px', md: '100px' }}
      >
        <Box
          display="grid"
          gridTemplateColumns={{
            base: 'repeat(3, 1fr)',
            sm: 'repeat(4, 1fr)',
            md: 'repeat(7, 1fr)',
          }}
          alignItems="center"
          justifyItems="center"
        >
          <BigudiIcon />
          <BfIcon />
          <MySpaceIcon />
          <MarafetIcon />
          <DobrayClinica />
          <ParikmaherkayIcon />
          <BastetIcon />
          <LuxorIcon />
          <KIllerBeauty />
          <JustWorkIcon />
          <ArtDentIcon />
          <LedyLabIcon />
          <SonaryIcon />
          <KrasavaIcon />
          <VivaldiMedicaIcon />
          <PushkariIcon />
          <DomBiutiIcon />
          <NumberOneIcon />
          <BeautyExprexxIcon />
          <PafiyIcon />
          <UroandroIcon />
        </Box>
      </Container>

      <LineIcon />
    </Box>
  );
};

export default BrendsSection;
