import { Icon } from '@chakra-ui/react';

export const ArrowLongIcon = ({ ...props }) => (
  <Icon
    width={{ base: '200px', md: '400px' }}
    height="12px"
    viewBox="0 0 400 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M400 6L390 0.226497V11.7735L400 6ZM0 7H391V5H0V7Z"
      fill="#237FFF"
    />
  </Icon>
);

export default ArrowLongIcon;
