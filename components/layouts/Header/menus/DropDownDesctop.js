import { Box, SimpleGrid } from '@chakra-ui/react';

import Heading from '../../../common/Heading';
import { CloseIcon } from '../../../icons';

export const DropDownDesctop = ({ setShow, ...props }) => {
  return (
    <Box
      borderRadius="30px"
      boxShadow="0px 4px 30px rgba(0, 0, 0, 0.25)"
      maxW="996px"
      width="100%"
      minH="245px"
      p="37px 55px 41px 55px"
      bg="#ffffff"
      {...props}
    >
      <CloseIcon
        position="absolute"
        right="41px"
        onClick={() => setShow()}
        cursor="pointer"
      />
      <Heading variant="h3" textAlign="center" mb="43px">
        ourSolutions
      </Heading>

      <SimpleGrid columns={2} spacingY={8} spacingX="25px" w="890px">
        {/* <Links onClose={setShow} /> */}
      </SimpleGrid>
    </Box>
  );
};

export default DropDownDesctop;
