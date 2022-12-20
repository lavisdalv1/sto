import { Icon } from '@chakra-ui/react';

export const DashesV2Icon = ({ fill, ...props }) => (
  <Icon
    width="28px"
    height="29px"
    viewBox="0 0 28 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.22656 2C8.34699 3.09088 4.82229 10.18 3.16989 13.5882"
      stroke={fill ? fill : 'black'}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16.2461 11C15.3528 11.4527 10.97 15.4507 8.89023 17.3931"
      stroke={fill ? fill : 'black'}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M26.3672 21.4961C24.8801 21.343 16.1707 22.794 12.0018 23.5386"
      stroke={fill ? fill : 'black'}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Icon>
);

export default DashesV2Icon;
