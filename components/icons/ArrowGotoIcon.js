import { Icon } from '@chakra-ui/react';

export const ArrowGotoIcon = (props) => (
  <Icon
    width={{ base: '70px', sm: '100px' }}
    height={{ base: '70px', sm: '100px' }}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_13_5243)">
      <circle cx="50" cy="46" r="30" fill="#2D6EFD" />
    </g>
    <path
      d="M49.2929 56.7071C49.6834 57.0976 50.3166 57.0976 50.7071 56.7071L57.0711 50.3431C57.4616 49.9526 57.4616 49.3195 57.0711 48.9289C56.6805 48.5384 56.0474 48.5384 55.6569 48.9289L50 54.5858L44.3431 48.9289C43.9526 48.5384 43.3195 48.5384 42.9289 48.9289C42.5384 49.3195 42.5384 49.9526 42.9289 50.3431L49.2929 56.7071ZM49 35V56H51V35H49Z"
      fill="white"
    />
    <defs>
      <filter
        id="filter0_d_13_5243"
        x="0"
        y="0"
        width="100"
        height="100"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_13_5243"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_13_5243"
          result="shape"
        />
      </filter>
    </defs>
  </Icon>
);
