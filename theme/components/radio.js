export const RadioStyles = {
  parts: ['control', 'label'],
  baseStyle: {},
  variants: {
    coins: {
      label: {
        _focus: {
          display: 'none',
        },
        cursor: 'pointer',
        fontSize: 'md',
        color: 'black',
        ml: '6px',
        mt: '5px',
      },
      control: {
        _focus: {
          boxShadow: 'none',
        },

        minW: '20px',
        minH: '20px',
        width: '20px',
        height: '20px',
        border: '1px',
        borderColor: 'black',
        _checked: {
          width: '10px',
          height: '10px',
          bg: 'transparent',
          _hover: {
            bg: 'none',
          },
          _before: {
            width: '10px',
            height: '10px',
            bg: 'blue.blueV1',
          },
        },
        mr: 0,
      },
    },
  },
  defaultProps: {},
};
