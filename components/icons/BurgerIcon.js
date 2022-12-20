import { Icon } from '@chakra-ui/react';

export const BurgerIcon = (props) => (
  <Icon
    width="30px"
    height="9px"
    viewBox="0 0 30 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line
      x1="1.5"
      y1="1.5"
      x2="28.5"
      y2="1.5"
      stroke="black"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="1.5"
      y1="7.5"
      x2="28.5"
      y2="7.5"
      stroke="black"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </Icon>
);

export default BurgerIcon;
