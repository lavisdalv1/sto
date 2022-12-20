import { Box, Container, Flex, Grid, Text } from '@chakra-ui/react';
import {
  TelegramShareButton,
  ViberShareButton,
  InstapaperShareButton,
} from 'next-share';
// import { useRouter } from 'next/router';
import MainLink from '../../common/MainLink';
import {
  LogoAndText,
  MobLogoAndTextIocn,
  ViberIcon,
  TelegramIcon,
  InstIcon,
} from '../../icons';
import {
  BePaidIcon,
  VisaIcon,
  VisaSecurIcon,
  MasterCard,
} from '../../icons/cards';

import Heading from '../../common/Heading';

export const Footer = () => {
  // const router = useRouter();

  return (
    <Box bg="#F5F5F5" overflow={{ base: 'initial', sm: 'hidden' }}>
      <Container
        pt={{ base: '38px', sm: '55px' }}
        pb={{ base: '21px', sm: '37px' }}
        position="relative"
      >
        <Flex justifyContent="space-between" mb="30px" alignItems="center">
          <LogoAndText display={{ base: 'none', sm: 'block' }} />
          <MobLogoAndTextIocn display={{ base: 'block', sm: 'none' }} />
        </Flex>

        <Heading variant="h3" mb="8px">
          footer
          {/* {footer.headings.solutions} */}
        </Heading>
        <Grid
          templateRows={{ base: '1fr ' }}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={3}
          mb="20px"
        >
          items
          {/* {footer.solutions.map((block, index) => (
            <Flex key={index} maxW="269px" flexDirection="column">
              {block.block.map((link, index) => (
                <Box
                  fontSize={{ base: 'xxs', sm: '4xs', md: 'sm' }}
                  key={index}
                  m="3px 0px"
                  variant="footerLink"
                >
                  {link.label}
                </Box>
              ))}
            </Flex>
          ))} */}
        </Grid>

        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: '2fr 1fr',
            md: 'repeat(2, 1fr)',
          }}
          gap={3}
          templateAreas={{ base: `"info" "useFull"`, sm: `"useFull info"` }}
        >
          <Box gridArea="useFull">
            <Heading variant="h3" mb="8px">
              {/* {footer.headings.useful} */}
              head
            </Heading>
            items
            {/* {footer.useFulLink.map((link, index) => (
              <Flex key={index} flexDirection="column">
                <MainLink
                  m="3px 0px"
                  color="blue.blueV1"
                  variant="footerLink"
                  href={link.link}
                >
                  {link.label}
                </MainLink>
              </Flex>
            ))} */}
          </Box>
          <Box gridArea="info">
            <Heading variant="h3" mb="8px">
              head
              {/* {footer.headings.info} */}
            </Heading>
            items
            {/* {footer.info.map((link, index) => (
              <Flex key={index} flexDirection="column">
                {index === 0 ? (
                  <MainLink href={link?.href} m="3px 0px" variant="footerLink">
                    {link.label}
                  </MainLink>
                ) : (
                  <MainLink
                    locale={false}
                    href={
                      router.locale === 'ru' ||
                      router.locale === 'be' ||
                      router.locale === 'ua'
                        ? link?.href
                        : `${link?.href_en}`
                    }
                    m="3px 0px"
                    variant="footerLink"
                  >
                    {link.label}
                  </MainLink>
                )}
            </Flex>
            ))} */}
          </Box>
        </Grid>
        <Flex
          flexWrap="wrap"
          justifyContent={{ base: 'space-evenly', sm: 'space-between' }}
          alignItems="center"
          maxW="380px"
          mt="56px"
        >
          <VisaIcon />
          <VisaSecurIcon />
          <MasterCard />
          <BePaidIcon />
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
