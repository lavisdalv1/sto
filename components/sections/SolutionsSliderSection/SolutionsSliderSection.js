import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import { useRef } from 'react';
import Slider from 'react-slick';
import { useTranslations } from 'next-intl';

import { StarV1icon, DashesIcon } from '../../icons';
import Card from './Card';
import Heading from '../../common/Heading';
import { ArrowSliderIcon } from '../../icons';

export const SolutionsSliderSection = ({ data }) => {
  const t = useTranslations('header');
  const ref = useRef();
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: '180px',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
      <Center>
        <Heading
          mb={{ base: '35px', sm: '49px', md: '63px' }}
          variant="h2"
          position="relative"
        >
          {t('ourSolutions')}
          <StarV1icon position="absolute" top="-37px" left="-83px" />
          <DashesIcon position="absolute" top="-8px" right="-23px" />
        </Heading>
      </Center>
      <Box position="relative">
        <DashesIcon
          position="absolute"
          top="-21px"
          left="24px"
          display={{ base: 'none', md: 'block' }}
        />
        <Box>
          <Box display={{ base: 'none', sm: 'block' }}>
            <Slider ref={ref} {...settings} styles={{ height: 'max-content' }}>
              {data.map((i) => (
                <Box key={i.id}>
                  <Card {...i} />
                </Box>
              ))}
            </Slider>
          </Box>
          <Box
            overflowX={{ base: 'scroll', md: 'auto' }}
            display={{ base: 'flex', sm: 'none' }}
            gridTemplateColumns={{ base: 'none', md: '1fr 1fr 1fr' }}
            gap="27px"
            width="100%"
            pl="50px"
            pr="50px"
          >
            {data.map((i, index) => (
              <Box key={index}>
                <Card {...i} />
              </Box>
            ))}
          </Box>
        </Box>
        <Center
          mt={{ base: '31px', sm: '53px' }}
          display={{ base: 'none', sm: 'flex' }}
        >
          <ArrowSliderIcon
            transform="rotate(180deg)"
            cursor="pointer"
            onClick={() => ref.current?.slickPrev()}
            _hover={{
              circle: {
                fill: 'blue.blueV1',
              },
            }}
          />
          <ArrowSliderIcon
            ml="15px"
            cursor="pointer"
            onClick={() => ref.current?.slickNext()}
            _hover={{
              circle: {
                fill: 'blue.blueV1',
              },
            }}
          />
        </Center>
      </Box>
    </>
  );
};

export default React.memo(SolutionsSliderSection);
