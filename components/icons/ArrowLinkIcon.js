import { Icon } from '@chakra-ui/react';

export const ArrowLinkIcon = ({ fill, initFill, ...props }) => (
  <Icon
    width="19px"
    height="8px"
    viewBox="0 0 19 8"
    fill={initFill ? (fill ? fill : 'white') : fill ? fill : 'black'}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.4643 4.35355C18.6596 4.15829 18.6596 3.84171 18.4643 3.64645L15.2823 0.464466C15.0871 0.269204 14.7705 0.269204 14.5752 0.464466C14.38 0.659728 14.38 0.976311 14.5752 1.17157L17.4037 4L14.5752 6.82843C14.38 7.02369 14.38 7.34027 14.5752 7.53553C14.7705 7.7308 15.0871 7.7308 15.2823 7.53553L18.4643 4.35355ZM0 4.5H18.1108V3.5H0V4.5Z"
      // fill={'#2D6EFD'}
    />
  </Icon>
);

export default ArrowLinkIcon;
