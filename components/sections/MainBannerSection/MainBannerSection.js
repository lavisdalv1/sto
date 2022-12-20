import {
  Container,
  Image,
  Flex,
  Text,
  Button,
  Center,
  Box,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

import Heading from '../../common/Heading';
import AnimationArrow from '../../common/AnimationArrow';
import { constants } from '../../../constants';

export const MainBannerSection = ({ heading, desc, buttonDesc }) => {
  const t = useTranslations('different');
  const router = useRouter();
  const language =
    router.locale === 'ru' || router.locale === 'be' || router.locale === 'ua';
  return (
    <Container
      pt={{ base: '50px', md: '100px' }}
      pb={{ base: '50px', md: '100px' }}
    >
      <Flex
        justifyContent="space-between"
        flexDirection={{ base: 'column', sm: 'row' }}
      >
        <Flex
          position="relative"
          w={{ base: '100%', sm: '48%' }}
          justifyContent="center"
          flexDirection="column"
        >
          <Heading variant="h1">{heading}</Heading>
          <Text
            mt={{ base: '15px', sm: '7px' }}
            fontSize={{ base: 'sm', sm: 'md' }}
            color="sub.v2"
            fontWeight="medium"
            lineHeight={{ base: 'desc', md: 'sub' }}
          >
            {desc}
          </Text>

          <Flex mt={{ base: '15px', sm: '21px' }} alignItems="center">
            <NextLink href={constants.routs.registration}>
              <Button w="152px">{t('try')}</Button>
            </NextLink>
            <Text ml="13px" fontSize={{ base: 'xxs', sm: 'sm' }}>
              {buttonDesc}
            </Text>
          </Flex>
        </Flex>

        <Image
          src={
            language
              ? '/images/Online-zapis.com. Online booking service.png'
              : '/images/Online-zapis.com. Online booking service eng.png'
          }
          alt="Online-zapis.com. Online booking service"
          w={{ base: '100%', sm: '53%' }}
          h="100%"
          objectFit="contain"
          mt={{ base: '40px', sm: '0px' }}
        />
      </Flex>
      <Center mt="80px">
        <AnimationArrow />
      </Center>
    </Container>
  );
};

export default MainBannerSection;
