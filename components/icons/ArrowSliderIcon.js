import { Icon } from '@chakra-ui/react';

export const ArrowSliderIcon = ({ fill, ...props }) => (
  <Icon
    width="39px"
    height="39px"
    viewBox="0 0 39 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="19.5" cy="19.5" r="19.5" fill="#2A3042" />
    <path
      d="M28.3536 20.3536C28.5488 20.1583 28.5488 19.8417 28.3536 19.6464L25.1716 16.4645C24.9763 16.2692 24.6597 16.2692 24.4645 16.4645C24.2692 16.6597 24.2692 16.9763 24.4645 17.1716L27.2929 20L24.4645 22.8284C24.2692 23.0237 24.2692 23.3403 24.4645 23.5355C24.6597 23.7308 24.9763 23.7308 25.1716 23.5355L28.3536 20.3536ZM11 20.5H28V19.5H11V20.5Z"
      fill="white"
    />
  </Icon>
);

export default ArrowSliderIcon;
