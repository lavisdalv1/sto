import { Icon } from '@chakra-ui/react';

export const BlockaArrowIcon = (props) => (
  <Icon
    width="24px"
    height="23px"
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    borderRadius="5px"
    {...props}
  >
    <g clipPath="url(#clip0_0_3)">
      <rect
        width="1440"
        height="10130"
        transform="translate(-802 -1107)"
        fill="white"
      />
      <g filter="url(#filter0_d_0_3)">
        <rect x="1" y="1" width="22" height="21" rx="3" fill="white" />
      </g>
      <path
        d="M8 9L12.8 15L17 9"
        stroke="#004796"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_0_3"
        x="-29"
        y="-25"
        width="82"
        height="81"
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
        <feGaussianBlur stdDeviation="15" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_0_3"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_0_3"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_0_3">
        <rect
          width="1440"
          height="10130"
          fill="white"
          transform="translate(-802 -1107)"
        />
      </clipPath>
    </defs>
  </Icon>
);

export default BlockaArrowIcon;
