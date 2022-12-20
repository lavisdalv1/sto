import { Container, Box, Image } from '@chakra-ui/react';

export const BrendsMedicSection = () => (
  <Container
    backgroundImage="/images/bgAbout.png"
    backgroundRepeat="no-repeat"
    backgroundSize={{ base: '100% 600px', sm: '100% 490px', md: '100% 558px' }}
    minH={{ base: '600px', sm: '490px', sm: '558px' }}
  >
    <Box
      p={{ base: '90px 0 90px 0', md: '130px 0 50px 0' }}
      maxW="900px"
      m="0 auto"
      display="grid"
      gridTemplateColumns={{
        base: 'repeat(3 ,1fr)',
        sm: 'repeat(5 ,1fr)',
      }}
      gap="10px"
      alignItems="center"
      justifyItems="center"
    >
      <Image src="/images/brendsMedic/sova.png" />
      <Image src="/images/brendsMedic/АспектДент.png" />
      <Image src="/images/brendsMedic/Vivaldi Medica.png" />
      <Image src="/images/brendsMedic/artDent.png" />
      <Image src="/images/brendsMedic/zubi.png" />
      <Image src="/images/brendsMedic/stomtravel.png" />
      <Image src="/images/brendsMedic/clinica.png" />
      <Image src="/images/brendsMedic/kreativ.png" />
      <Image src="/images/brendsMedic/lives.png" />
      <Image src="/images/brendsMedic/uroandro.png" />
      <Image src="/images/brendsMedic/centrSluxa.png" />
      <Image src="/images/brendsMedic/dobray.png" />
      <Image src="/images/brendsMedic/Неовит.png" />
      <Image src="/images/brendsMedic/liniy.png" />
      <Image src="/images/brendsMedic/premium.png" />
    </Box>
  </Container>
);

export default BrendsMedicSection;
