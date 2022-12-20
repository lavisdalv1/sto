import textStyles from './text-styles';

export const global = ({ colorMode }) => {
  return {
    'html, body': {
      // overflowX: 'hidden',
      lineHeight: 'short',
      color: '#000000',
      height: '100%',
      scrollBehavior: 'smooth',
    },
    a: {
      textDecoration: 'none',
    },
    '#__next': {
      height: '100%',
    },

    ...textStyles,
  };
};

export default global;
