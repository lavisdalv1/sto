import { Box } from '@chakra-ui/react';
import MainLink from '../../../common/MainLink';
import { SalonIcon, ChartIcon, StoIcon, MedicineIcon } from '../../../icons';

import { constants } from '../../../../constants';

export const Links = ({ mobile, onClose, closeModal }) => {
  const data = [
    {
      icon: <SalonIcon />,
      label: 'asd',
      href: constants.routs.beautySalon,
    },
    {
      icon: <ChartIcon />,
      label: 'sfd',
      href: constants.routs.masters,
    },
    {
      icon: <MedicineIcon />,
      label: 'Asd',
      href: constants.routs.medic,
    },
    {
      icon: <StoIcon />,
      label: 'ASd',
      href: constants.routs.auto,
    },
  ];
  return (
    <>
      {data.map((link, index) => (
        <Box
          key={index}
          m={mobile && '15px 0px 0px 0px'}
          onClick={() => onClose && onClose()}
          _last={{
            a: {
              marginLeft: '7px',
            },
          }}
        >
          {link.icon}
          <MainLink
            href={link.href}
            onClick={closeModal}
            ml="15px"
            fontWeight={{ base: '500', md: '700' }}
            fontSize={{ base: 'xs', md: 'md' }}
          >
            {link.label}
          </MainLink>
        </Box>
      ))}
    </>
  );
};
export default Links;
