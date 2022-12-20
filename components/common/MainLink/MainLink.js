import { useState } from 'react';

import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { ArrowLinkIcon, ArrowLink } from '../../icons';

export const MainLink = ({
  href = '',
  children,
  arrow,
  arrowDrop,
  white = false,
  locale,
  ...props
}) => {
  const [state, setState] = useState(false);

  return (
    <NextLink href={href} passHref locale={locale}>
      <Link
        prefetch={false}
        {...props}
        onMouseEnter={() => setState(true)}
        onMouseLeave={() => setState(false)}
      >
        {children}
        {arrow && (
          <ArrowLinkIcon
            ml="12px"
            initFill={white}
            fill={state && 'blue.blueV1'}
          />
        )}
        {arrowDrop && <ArrowLink ml="12px" fill={state && 'blue.blueV1'} />}
      </Link>
    </NextLink>
  );
};

export default MainLink;
