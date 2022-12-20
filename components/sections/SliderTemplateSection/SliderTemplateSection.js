import { Box, Center, Image, Container } from '@chakra-ui/react';
import { useRef } from 'react';
import Slider from 'react-slick';
import { ArrowSlider } from '../../icons';
import Heading from '../../common/Heading';

export const SliderTemplateSection = ({ namesImage = [], images, t }) => {
  const settings = {
    customPaging: function (i) {
      return <Box>{namesImage[i]}</Box>;
    },
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <ArrowSlider
        right={{ base: '-25px', md: '-100px' }}
        mt="-25px"
        transform="rotate(180deg)"
      />
    ),
    prevArrow: <ArrowSlider left={{ base: '-25px', md: '-100px' }} />,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <Box
      backgroundImage={`url('/images/peopleAboutUsBg.png')`}
      backgroundPosition="0 0"
      backgroundRepeat="no-repeat"
      backgroundSize={{ base: 'cover', md: '100% 800px' }}
      height={{ base: '', sm: '600px', md: '800px' }}
      mt={{ base: '94px', sm: '82px', md: '95px' }}
    >
      <Container>
        <Center>
          <Heading
            textAlign="center"
            mt={{ base: '35px', sm: '90px', md: '106px' }}
            variant="h2"
            position="relative"
          >
            {t('SliderTemplateSection')}
          </Heading>
        </Center>
        <Box
          maxW="949px"
          pt={{ base: '90px', md: '120px' }}
          m="0 auto"
          sx={{
            '.slick-list': {
              zIndex: 1,
            },
            '.slick-dots': {
              top: '-80px',
              zIndex: 0,
            },
            '.slick-dots li': {
              width: 'auto',
              fontSize: 'sm',
              color: 'rgba(0, 0, 0, 0.4)',
              p: '0 20px',
            },
            '.slick-active': {
              color: 'black !important',
              fontSize: '24px !important',
              fontWeight: 'medium',
            },
            '@media (max-width:760px)': {
              '.slick-dots li': {
                width: 'auto',
                fontSize: '3xs',
                p: '0 5px',
              },
              '.slick-active': {
                fontSize: '12px !important',
              },
            },
          }}
        >
          <Slider {...settings}>
            {images?.map((image, index) => (
              <Box
                key={index}
                height={{ base: '300px', md: '400px' }}
                w="300px"
              >
                <Image
                  objectFit="contain"
                  h="100%"
                  w="100%"
                  src={image}
                  alt={image}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};
