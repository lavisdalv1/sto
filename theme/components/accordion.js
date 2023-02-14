export const AccordionStyles = {
  parts: ['container', 'button', 'icon', 'panel'],
  baseStyle: {},
  sizes: {},
  variants: {
    accord: {
      button: {
        // p: { base: '5px 33px', md: '0px 0px' },
        p: '5px 0px 5px 0px',
        display: 'flex',
        m: '0 auto',
        maxWidth: '1216px',
        fontSize: 'md',
        color: 'black',
        _focus: { background: 'transparent', boxShadow: 'none' },
        _hover: { background: 'transparent' },
        _expanded: { fontWeight: 'medium' },
      },
      container: {
        cursor: 'pointer',
        p: '0px',
        border: 0,
        mb: '0px',
        _last: { mb: 0 },
      },
      panel: {
        // border: '1px solid',
        // borderColor: 'sub.v2',
        w: '100%',
        color: 'sub.v1',
        fontSize: 'md',
        m: '15px 0',
        // p: {
        //   base: '17px 33px',
        //   md: '27px calc((100vw - 1216px) / 2) 27px calc((100vw - 1216px) / 2)',
        //   lg: '27px 122px 27px 109px',
        // },
      },
    },
  },
  defaultProps: {
    size: '',
    color: '',
  },
};
