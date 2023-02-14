import { Box, Container, Flex, Text } from '@chakra-ui/react';

import MainLink from '../../common/MainLink';
import NextLink from 'next/link';
import {
  FullscreenControl,
  Map,
  YMaps,
  ZoomControl,
  Placemark,
  RouteButton,
  Polyline,
} from '@pbe/react-yandex-maps';
import Heading from '../../common/Heading';

import Image from 'next/image';
export const Footer = () => {
  return (
    <Box bg="#E2E8F0">
      <Container
        pt={{ base: '38px', sm: '55px' }}
        pb={{ base: '21px', sm: '37px' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
      >
        <Box>
          <Text mb="10px">Наше место и схема проезда</Text>
          <Box borderRadius="16px" overflow="hidden" w="320px" h="240px">
            <YMaps
              query={{
                apikey: 'c39a16dc-3d81-4fda-abde-d3e759983279',
                lang: 'ru_RU',
              }}
            >
              <Map
                defaultState={{
                  center: [52.459984, 30.94507],
                  zoom: 15,
                }}
              >
                <Placemark geometry={[52.459984, 30.94507]} />
                <FullscreenControl />
                <ZoomControl
                  options={{ position: { right: 10, bottom: 27 } }}
                />
                <Polyline
                  geometry={[
                    [52.462137, 30.946479],
                    [52.461165, 30.9477],
                    [52.460421, 30.946234],
                    [52.460002, 30.946689],
                    [52.45946, 30.945554],
                    [52.459901, 30.94504],
                  ]}
                  options={{
                    balloonCloseButton: false,
                    strokeColor: '#3641fe',
                    strokeWidth: 4,
                    strokeOpacity: 0.5,
                  }}
                />
              </Map>
            </YMaps>
          </Box>
        </Box>
        <Box
          whiteSpace="pre-wrap"
          ml={{ base: '0px', sm: '60px' }}
          mt={{ base: '20px', sm: '0px' }}
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
        >
          <Flex mb="10px">
            <Image src="/images/map.png" width={20} height={20} />
            <Text fontWeight={600} ml="10px">
              Адресс:
            </Text>
            <NextLink
              href={`https://yandex.by/maps/155/gomel/?ll=30.945379%2C52.459588&mode=routes&rtext=~52.459973%2C30.944967&rtt=auto&ruri=~&z=18.36`}
              target="_blank"
            >
              г.Гомель Текстильная улица, 10к3
            </NextLink>
          </Flex>
          <Flex mb="10px">
            <Image src="/images/mobile.svg" width={20} height={20} />
            <Text fontWeight={600} ml="10px">
              Телефон:{' '}
            </Text>
            <NextLink href={`tel:+375333593275`}>+375 33 359 32 75</NextLink>
          </Flex>

          <Flex mb="10px">
            <Image src="/images/instagram.svg" width={20} height={20} />
            <Text fontWeight={600} ml="10px">
              Instagram:{' '}
            </Text>
            <NextLink
              href={`https://www.instagram.com/eagle_gomel/`}
              target="_blank"
            >
              eagle_gomel
            </NextLink>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
