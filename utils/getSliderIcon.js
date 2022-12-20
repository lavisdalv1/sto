import {
  YellowIcon,
  BlueIcon,
  SeaBlueIcon,
  OrangeIcon,
  PinkIcon,
  PurpleBoldIcon,
  LightBlueIcon,
  RedIcon,
  PurpleNormalIcon,
  PurpleLightIcon,
} from '../components/icons';

export const getSliderIcon = (color) => {
  switch (color) {
    case 'YellowIcon':
      return <YellowIcon />;

    case 'BlueIcon':
      return <BlueIcon />;

    case 'SeaBlueIcon':
      return <SeaBlueIcon />;

    case 'OrangeIcon':
      return <OrangeIcon />;

    case 'PinkIcon':
      return <PinkIcon />;

    case 'PurpleBoldIcon':
      return <PurpleBoldIcon />;

    case 'LightBlueIcon':
      return <LightBlueIcon />;

    case 'RedIcon':
      return <RedIcon />;

    case 'PurpleNormalIcon':
      return <PurpleNormalIcon />;

    case 'PurpleLightIcon':
      return <PurpleLightIcon />;

    default:
      null;
  }
};
