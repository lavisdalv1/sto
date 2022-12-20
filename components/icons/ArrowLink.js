import { Icon } from '@chakra-ui/react';

export const ArrowLink = ({ fill, ...props }) => (
  <Icon
    width="8px"
    height="5px"
    viewBox="0 0 8 5"
    fill={fill || 'black'}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.64645 4.35355C3.84171 4.54882 4.15829 4.54882 4.35355 4.35355L7.53553 1.17157C7.7308 0.976311 7.7308 0.659728 7.53553 0.464466C7.34027 0.269204 7.02369 0.269204 6.82843 0.464466L4 3.29289L1.17157 0.464466C0.976311 0.269204 0.659728 0.269204 0.464466 0.464466C0.269204 0.659728 0.269204 0.976311 0.464466 1.17157L3.64645 4.35355ZM3.5 3V4H4.5V3H3.5Z"
      // fill="black"
    />
  </Icon>
);

export default ArrowLink;
