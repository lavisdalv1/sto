import { Icon } from '@chakra-ui/react';

export const LineIcon = ({ lineBlue = false, ...props }) => (
  <Icon
    width="100%"
    height="29px"
    viewBox="0 0 1440 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 1.44878C46.8301 6.01844 72.8577 12.2453 119.916 13.1501C178.534 14.2772 210.961 3.31851 269.559 1.44878C403.677 -2.83064 478 24.8555 612.176 26.8017C739.588 28.6498 810.742 12.6058 938.167 13.1501C1053.8 13.6441 1118.47 32.9198 1233.93 26.8017C1314.93 22.5094 1360.46 16.9074 1440 1.44878"
      stroke={lineBlue ? '#006BFF' : 'black'}
      strokeOpacity="0.5"
    />
  </Icon>
);

export default LineIcon;
