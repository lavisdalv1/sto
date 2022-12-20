export const ButtonStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    black: {
      fontSize: 'sm',
      fontWeight: '700',
      color: 'white',
      bgColor: 'black',
      borderRadius: '30px',
      boxShadow: '-6px 1px 20px rgba(0, 0, 0, 0.15)',
      w: '100%',
      minHeight: '50px',
      _focus: {
        boxShadow: 'none',
      },
      _hover: {
        bgColor: 'blue.blueV1',
      },
      _disabled: {
        _hover: {
          bg: `#646464 !important`,
        },
        opacity: 1,
        bg: '#646464',
      },
    },
  },
  defaultProps: {
    variant: 'black',
  },
};
