import { Montserrat } from '@next/font/google';
// Georama
export const myFont = Montserrat({
  weight: '400',
  style: ['normal', 'italic'],
  weight: ['400', '500'],
  subsets: ['latin'],
});

export default {
  fonts: {
    body: myFont.style.fontFamily,

    heading: myFont.style.fontFamily,

    mono: myFont.style.fontFamily,
  },
  fontSizes: {
    '4xs': '10px',
    '3xs': '11px',
    xxs: '12px',
    xs: '13px',
    sm: '14px',
    md: '18px',
    lg: '24px',
    xl: '36px',
    '2xl': '48px',
    '3xl': '72px',
    name: '16px',
    subMenu: '13px',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    big: '52.4px',
    small: '31.2px',
    smaller: '28.37px',
    smallest: '16.55px',
    normal: '42.55px',
    sub: '30.6px',
    desc: '21px',
    descTwo: '40.8px',
    descThree: '27px',
  },
};
