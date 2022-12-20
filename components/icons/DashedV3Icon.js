import { Icon } from '@chakra-ui/react';

export const DashedV3Icon = ({ fill, ...props }) => (
  <Icon
    width="14px"
    height="12px"
    viewBox="0 0 14 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.998 6.71362L8.08271 10.7314"
      stroke={fill ? fill : 'black'}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M10.0996 4.00269L3.93013 9.01209"
      stroke={fill ? fill : 'black'}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M7.66211 1.60522L0.999542 7.3637"
      stroke={fill ? fill : 'black'}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Icon>
);

export default DashedV3Icon;
