import { Icon } from '@chakra-ui/react';

export const DashesIcon = ({ fill, ...props }) => (
  <Icon
    width="19px"
    height="16px"
    viewBox="0 0 19 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.043 8.63672L10.4732 14.0068"
      stroke={fill ? fill : 'black'}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M13.168 5.0127L4.92192 11.7082"
      stroke={fill ? fill : 'black'}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M9.90625 1.80859L1.00114 9.50531"
      stroke={fill ? fill : 'black'}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Icon>
);

export default DashesIcon;
