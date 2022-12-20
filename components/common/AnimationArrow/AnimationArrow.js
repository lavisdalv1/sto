import { Box } from '@chakra-ui/react';
import { ArrowMainIcon } from '../../icons';
import s from './index.module.css';

export const AnimationArrow = () => (
  <Box cursor="pointer">
    <div className={s.animation}>
      <ArrowMainIcon />
    </div>
  </Box>
);

export default AnimationArrow;
