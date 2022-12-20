import { extendTheme } from '@chakra-ui/react';
import breakpoints from './brekpoints';
import typography from './typography';
import global from './global';
import colors from './colors';
import sizes from './sizes';
import components from './components';

export default extendTheme({
  colors,
  sizes,
  breakpoints,
  components,
  styles: { global },
  ...typography,
});
