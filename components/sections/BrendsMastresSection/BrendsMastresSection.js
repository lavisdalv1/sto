import { Container, Box, Image } from '@chakra-ui/react';

export const BrendsMastresSection = () => (
  <Container
    backgroundImage="/images/bgAbout.png"
    backgroundRepeat="no-repeat"
    backgroundSize={{ base: '100% 450px' }}
    minH={{ base: '439px', sm: '450px' }}
  >
    <Box
      p={{ base: '90px 0 90px 0', sm: '90px 0 90px 0', md: '150px 0 150px 0' }}
      maxW="900px"
      m="0 auto"
      display="grid"
      gridTemplateColumns={{
        base: 'repeat(4 ,1fr)',
        sm: 'repeat(5 ,1fr)',
        md: 'repeat(7 ,1fr)',
      }}
      gap="10px"
      alignItems="center"
      justifyItems="center"
    >
      <Image src="/images/brendsMastres/beauti.png" />
      <Image src="/images/brendsMastres/Бигуди.png" />
      <Image src="/images/brendsMastres/bf.png" />
      <Image src="/images/brendsMastres/marafet.png" />
      <Image src="/images/brendsMastres/Бастэт.png" />
      <Image src="/images/brendsMastres/parichmaherskay.png" />
      <Image src="/images/brendsMastres/Сонари.png" />
      <Image src="/images/brendsMastres/number1.png" />
      <Image src="/images/brendsMastres/dom.png" />
      <Image src="/images/brendsMastres/LUXOR.png" />
      <Image src="/images/brendsMastres/krasava.png" />
      <Image src="/images/brendsMastres/lady.png" />
      <Image src="/images/brendsMastres/Пафия.png" />
      <Image src="/images/brendsMastres/pushkari.png" />
    </Box>
  </Container>
);

export default BrendsMastresSection;
