import { Image } from '@chakra-ui/react';

export const MySpaceIcon = (props) => (
  <Image
    src="/images/myspace.png"
    width={{ base: '87px', md: '101px' }}
    height={{ base: '73px', md: '85px' }}
    {...props}
  />
);

export default MySpaceIcon;
