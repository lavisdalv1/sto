export const SelectStyles = {
  parts: ['icon', 'field'],
  baseStyle: {},
  variants: {
    transparent: {
      field: {
        fontSize: 'md',
        fontWeight: 'bold',
        color: 'black',
        minHeight: '50px',
        cursor: 'pointer',
        paddingInlineStart: '0px',
      },
      icon: {
        _focus: {
          color: 'red',
        },
        color: 'gray.44',
      },
    },
  },
  defaultProps: {
    variant: 'transparent',
  },
};
