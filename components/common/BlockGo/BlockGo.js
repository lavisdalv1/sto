import { Button, Box, Text } from '@chakra-ui/react';

import NextLink from 'next/link';
import Heading from '../../common/Heading';
import { ArrowLinkIcon, DashesV2Icon } from '../../icons';
import { constants } from '../../../constants';
import { useTranslations } from 'next-intl';

export const BlockGo = ({
  href = '',
  desc,
  heading,
  colorH,
  colorD,
  ...props
}) => {
  const t = useTranslations('different');

  return (
    <Box maxW="324px" {...props}>
      <Heading variant="h2" fontSize={{ base: 'lg', md: '2xl' }} color={colorH}>
        {heading}
      </Heading>
      <Text
        mt="10px"
        mb={{ base: '10px', sm: '20px' }}
        fontSize={{ base: 'sm', md: 'md' }}
        color={colorD}
      >
        {desc}
      </Text>

      <NextLink href={constants.routs.registration}>
        <Button w="152px">
          {t('go')} <ArrowLinkIcon marginLeft="5px" fill={'white'} />
        </Button>
      </NextLink>
    </Box>
  );
};

export default BlockGo;
