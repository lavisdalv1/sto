import { Box } from '@chakra-ui/react';

// import { DashesIcon, DashesV2Icon, DashedV3Icon } from '../../icons';

// const position = (left, top, right, bottom) => ({ left, top, right, bottom });

export const Heading = ({
  variant,
  children,
  // showIcon,
  // showIconV2,
  // showIconV3,
  // left,
  // top,
  // right,
  // bottom,
  // fill,
  ...props
}) => (
  <Box as={variant} {...props}>
    {children}
    {/* {showIcon && (
      <DashesIcon
        position="absolute"
        fill={fill}
        {...position(left, top, right, bottom)}
      />
    )}
    {showIconV2 && (
      <DashesV2Icon
        position="absolute"
        fill={fill}
        {...position(left, top, right, bottom)}
      />
    )}
    {showIconV3 && (
      <DashedV3Icon
        position="absolute"
        fill={fill}
        {...position(left, top, right, bottom)}
      />
    )} */}
  </Box>
);

export default Heading;
