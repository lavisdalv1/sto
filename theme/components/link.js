export const LinkStyles = {
  baseStyle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 'sm',
    _hover: {
      color: 'blue.blueV1',
      textDecoration: 'none',
    },
    _focus: {
      boxShadow: 'none',
    },
  },
  variants: {
    footerLink: {
      fontSize: { base: 'xxs', sm: '4xs', md: 'sm' },
      fontWeight: '500',
      color: 'sub.v1',
    },
  },
};
