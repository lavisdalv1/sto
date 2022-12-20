import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Mazzard M';
      src: url('/fonts/Mazzard/MazzardM-Medium.eot');
      src: local('/fonts/Mazzard/Mazzard M Medium'), local('/fonts/Mazzard/MazzardM-Medium'),
          url('/fonts/Mazzard/MazzardM-Medium.eot?#iefix') format('/fonts/Mazzard/embedded-opentype'),
          url('/fonts/Mazzard/MazzardM-Medium.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardM-Medium.woff') format('woff'),
          url('/fonts/Mazzard/MazzardM-Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard M';
      src: url('/fonts/Mazzard/MazzardM-ExtraLightItalic.eot');
      src: local('/fonts/Mazzard/Mazzard M ExtraLight Italic'), local(/fonts/'Mazzard/M-ExtraLightItalic'),
          url('/fonts/Mazzard/M-ExtraLightItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/M-ExtraLightItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/M-ExtraLightItalic.woff') format('woff'),
          url('/fonts/Mazzard/M-ExtraLightItalic.ttf') format('truetype');
      font-weight: 200;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard H';
      src: url('/fonts/Mazzard/MazzardH-BlackItalic.eot');
      src: local('/fonts/Mazzard/Mazzard H Black Italic'), local('/fonts/Mazzard/MazzardH-BlackItalic'),
          url('/fonts/Mazzard/MazzardH-BlackItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardH-BlackItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardH-BlackItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardH-BlackItalic.ttf') format('truetype');
      font-weight: 900;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard L';
      src: url('/fonts/Mazzard/MazzardL-ExtraBold.eot');
      src: local('/fonts/Mazzard/Mazzard L ExtraBold'), local('/fonts/Mazzard/MazzardL-ExtraBold'),
          url('/fonts/Mazzard/MazzardL-ExtraBold.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardL-ExtraBold.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardL-ExtraBold.woff') format('woff'),
          url('/fonts/Mazzard/MazzardL-ExtraBold.ttf') format('truetype');
      font-weight: 800;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard H';
      src: url('/fonts/Mazzard/MazzardH-Black.eot');
      src: local('/fonts/Mazzard/Mazzard H Black'), local('/fonts/Mazzard/MazzardH-Black'),
          url('/fonts/Mazzard/MazzardH-Black.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardH-Black.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardH-Black.woff') format('woff'),
          url('/fonts/Mazzard/MazzardH-Black.ttf') format('truetype');
      font-weight: 900;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard M';
      src: url('/fonts/Mazzard/MazzardM-BoldItalic.eot');
      src: local('Mazzard M Bold Italic'), local('MazzardM-BoldItalic'),
          url('/fonts/Mazzard/MazzardM-BoldItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardM-BoldItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardM-BoldItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardM-BoldItalic.ttf') format('truetype');
      font-weight: bold;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard H';
      src: url('/fonts/Mazzard/MazzardH-Medium.eot');
      src: local('Mazzard H Medium'), local('MazzardH-Medium'),
          url('/fonts/Mazzard/MazzardH-Medium.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardH-Medium.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardH-Medium.woff') format('woff'),
          url('/fonts/Mazzard/MazzardH-Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard M';
      src: url('/fonts/Mazzard/MazzardM-Light.eot');
      src: local('Mazzard M Light'), local('MazzardM-Light'),
          url('/fonts/Mazzard/MazzardM-Light.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardM-Light.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardM-Light.woff') format('woff'),
          url('/fonts/Mazzard/MazzardM-Light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard H';
      src: url('/fonts/Mazzard/MazzardH-LightItalic.eot');
      src: local('Mazzard H Light Italic'), local('MazzardH-LightItalic'),
          url('/fonts/Mazzard/MazzardH-LightItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardH-LightItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardH-LightItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardH-LightItalic.ttf') format('truetype');
      font-weight: 300;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard H';
      src: url('/fonts/Mazzard/MazzardH-ExtraLight.eot');
      src: local('Mazzard H ExtraLight'), local('MazzardH-ExtraLight'),
          url('/fonts/Mazzard/MazzardH-ExtraLight.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardH-ExtraLight.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardH-ExtraLight.woff') format('woff'),
          url('/fonts/Mazzard/MazzardH-ExtraLight.ttf') format('truetype');
      font-weight: 200;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard M';
      src: url('/fonts/Mazzard/MazzardM-Bold.eot');
      src: local('Mazzard M Bold'), local('MazzardM-Bold'),
          url('/fonts/Mazzard/MazzardM-Bold.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardM-Bold.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardM-Bold.woff') format('woff'),
          url('/fonts/Mazzard/MazzardM-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard M';
      src: url('/fonts/Mazzard/MazzardM-SemiBoldItalic.eot');
      src: local('Mazzard M SemiBold Italic'), local('MazzardM-SemiBoldItalic'),
          url('/fonts/Mazzard/MazzardM-SemiBoldItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardM-SemiBoldItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardM-SemiBoldItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardM-SemiBoldItalic.ttf') format('truetype');
      font-weight: 600;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard L';
      src: url('/fonts/Mazzard/MazzardL-ExtraLight.eot');
      src: local('Mazzard L ExtraLight'), local('MazzardL-ExtraLight'),
          url('/fonts/Mazzard/MazzardL-ExtraLight.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardL-ExtraLight.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardL-ExtraLight.woff') format('woff'),
          url('/fonts/Mazzard/MazzardL-ExtraLight.ttf') format('truetype');
      font-weight: 200;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard H';
      src: url('/fonts/Mazzard/MazzardH-Light.eot');
      src: local('Mazzard H Light'), local('MazzardH-Light'),
          url('/fonts/Mazzard/MazzardH-Light.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardH-Light.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardH-Light.woff') format('woff'),
          url('/fonts/Mazzard/MazzardH-Light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard L';
      src: url('/fonts/Mazzard/MazzardL-ThinItalic.eot');
      src: local('Mazzard L Thin Italic'), local('MazzardL-ThinItalic'),
          url('/fonts/Mazzard/MazzardL-ThinItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardL-ThinItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardL-ThinItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardL-ThinItalic.ttf') format('truetype');
      font-weight: 100;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard H';
      src: url('/fonts/Mazzard/MazzardH-ExtraBoldItalic.eot');
      src: local('Mazzard H ExtraBold Italic'), local('MazzardH-ExtraBoldItalic'),
          url('/fonts/Mazzard/MazzardH-ExtraBoldItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardH-ExtraBoldItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardH-ExtraBoldItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardH-ExtraBoldItalic.ttf') format('truetype');
      font-weight: 800;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard M';
      src: url('/fonts/Mazzard/MazzardM-SemiBold.eot');
      src: local('Mazzard M SemiBold'), local('MazzardM-SemiBold'),
          url('/fonts/Mazzard/MazzardM-SemiBold.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardM-SemiBold.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardM-SemiBold.woff') format('woff'),
          url('/fonts/Mazzard/MazzardM-SemiBold.ttf') format('truetype');
      font-weight: 600;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard L';
      src: url('/fonts/Mazzard/MazzardL-Regular.eot');
      src: local('Mazzard L Regular'), local('MazzardL-Regular'),
          url('/fonts/Mazzard/MazzardL-Regular.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardL-Regular.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardL-Regular.woff') format('woff'),
          url('/fonts/Mazzard/MazzardL-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard H';
      src: url('/fonts/Mazzard/MazzardH-MediumItalic.eot');
      src: local('Mazzard H Medium Italic'), local('MazzardH-MediumItalic'),
          url('/fonts/Mazzard/MazzardH-MediumItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardH-MediumItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardH-MediumItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardH-MediumItalic.ttf') format('truetype');
      font-weight: 500;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard L';
      src: url('/fonts/Mazzard/MazzardL-Italic.eot');
      src: local('Mazzard L Italic'), local('MazzardL-Italic'),
          url('/fonts/Mazzard/MazzardL-Italic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardL-Italic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardL-Italic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardL-Italic.ttf') format('truetype');
      font-weight: normal;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard L';
      src: url('/fonts/Mazzard/MazzardL-ExtraBoldItalic.eot');
      src: local('Mazzard L ExtraBold Italic'), local('MazzardL-ExtraBoldItalic'),
          url('/fonts/Mazzard/MazzardL-ExtraBoldItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardL-ExtraBoldItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardL-ExtraBoldItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardL-ExtraBoldItalic.ttf') format('truetype');
      font-weight: 800;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard L';
      src: url('/fonts/Mazzard/MazzardL-Bold.eot');
      src: local('Mazzard L Bold'), local('MazzardL-Bold'),
          url('/fonts/Mazzard/MazzardL-Bold.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardL-Bold.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardL-Bold.woff') format('woff'),
          url('/fonts/Mazzard/MazzardL-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard M';
      src: url('/fonts/Mazzard/MazzardM-BlackItalic.eot');
      src: local('Mazzard M Black Italic'), local('MazzardM-BlackItalic'),
          url('/fonts/Mazzard/MazzardM-BlackItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardM-BlackItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardM-BlackItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardM-BlackItalic.ttf') format('truetype');
      font-weight: 900;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard L';
      src: url('/fonts/Mazzard/MazzardL-MediumItalic.eot');
      src: local('Mazzard L Medium Italic'), local('MazzardL-MediumItalic'),
          url('/fonts/Mazzard/MazzardL-MediumItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardL-MediumItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardL-MediumItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardL-MediumItalic.ttf') format('truetype');
      font-weight: 500;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard M';
      src: url('/fonts/Mazzard/MazzardM-ExtraBoldItalic.eot');
      src: local('Mazzard M ExtraBold Italic'), local('MazzardM-ExtraBoldItalic'),
          url('/fonts/Mazzard/MazzardM-ExtraBoldItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardM-ExtraBoldItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardM-ExtraBoldItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardM-ExtraBoldItalic.ttf') format('truetype');
      font-weight: 800;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard M';
      src: url('/fonts/Mazzard/MazzardM-Regular.eot');
      src: local('Mazzard M Regular'), local('MazzardM-Regular'),
          url('/fonts/Mazzard/MazzardM-Regular.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardM-Regular.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardM-Regular.woff') format('woff'),
          url('/fonts/Mazzard/MazzardM-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard H';
      src: url('/fonts/Mazzard/MazzardH-Italic.eot');
      src: local('Mazzard H Italic'), local('MazzardH-Italic'),
          url('/fonts/Mazzard/MazzardH-Italic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardH-Italic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardH-Italic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardH-Italic.ttf') format('truetype');
      font-weight: normal;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard M';
      src: url('/fonts/Mazzard/MazzardM-LightItalic.eot');
      src: local('Mazzard M Light Italic'), local('MazzardM-LightItalic'),
          url('/fonts/Mazzard/MazzardM-LightItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardM-LightItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardM-LightItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardM-LightItalic.ttf') format('truetype');
      font-weight: 300;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard L';
      src: url('/fonts/Mazzard/MazzardL-LightItalic.eot');
      src: local('Mazzard L Light Italic'), local('MazzardL-LightItalic'),
          url('/fonts/Mazzard/MazzardL-LightItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardL-LightItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardL-LightItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardL-LightItalic.ttf') format('truetype');
      font-weight: 300;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard M';
      src: url('/fonts/Mazzard/MazzardM-Italic.eot');
      src: local('Mazzard M Italic'), local('MazzardM-Italic'),
          url('/fonts/Mazzard/MazzardM-Italic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardM-Italic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardM-Italic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardM-Italic.ttf') format('truetype');
      font-weight: normal;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard H';
      src: url('/fonts/Mazzard/MazzardH-Thin.eot');
      src: local('Mazzard H Thin'), local('MazzardH-Thin'),
          url('/fonts/Mazzard/MazzardH-Thin.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardH-Thin.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardH-Thin.woff') format('woff'),
          url('/fonts/Mazzard/MazzardH-Thin.ttf') format('truetype');
      font-weight: 100;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard H';
      src: url('/fonts/Mazzard/MazzardH-SemiBoldItalic.eot');
      src: local('Mazzard H SemiBold Italic'), local('MazzardH-SemiBoldItalic'),
          url('/fonts/Mazzard/MazzardH-SemiBoldItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardH-SemiBoldItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardH-SemiBoldItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardH-SemiBoldItalic.ttf') format('truetype');
      font-weight: 600;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard L';
      src: url('/fonts/Mazzard/MazzardL-BoldItalic.eot');
      src: local('Mazzard L Bold Italic'), local('MazzardL-BoldItalic'),
          url('/fonts/Mazzard/MazzardL-BoldItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardL-BoldItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardL-BoldItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardL-BoldItalic.ttf') format('truetype');
      font-weight: bold;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard H';
      src: url('/fonts/Mazzard/MazzardH-ThinItalic.eot');
      src: local('Mazzard H Thin Italic'), local('MazzardH-ThinItalic'),
          url('/fonts/Mazzard/MazzardH-ThinItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardH-ThinItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardH-ThinItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardH-ThinItalic.ttf') format('truetype');
      font-weight: 100;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard M';
      src: url('/fonts/Mazzard/MazzardM-ExtraLight.eot');
      src: local('Mazzard M ExtraLight'), local('MazzardM-ExtraLight'),
          url('/fonts/Mazzard/MazzardM-ExtraLight.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardM-ExtraLight.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardM-ExtraLight.woff') format('woff'),
          url('/fonts/Mazzard/MazzardM-ExtraLight.ttf') format('truetype');
      font-weight: 200;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard L';
      src: url('/fonts/Mazzard/MazzardL-Light.eot');
      src: local('Mazzard L Light'), local('MazzardL-Light'),
          url('/fonts/Mazzard/MazzardL-Light.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardL-Light.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardL-Light.woff') format('woff'),
          url('/fonts/Mazzard/MazzardL-Light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard H';
      src: url('/fonts/Mazzard/MazzardH-Bold.eot');
      src: local('Mazzard H Bold'), local('MazzardH-Bold'),
          url('/fonts/Mazzard/MazzardH-Bold.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardH-Bold.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardH-Bold.woff') format('woff'),
          url('/fonts/Mazzard/MazzardH-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard L';
      src: url('/fonts/Mazzard/MazzardL-Medium.eot');
      src: local('Mazzard L Medium'), local('MazzardL-Medium'),
          url('/fonts/Mazzard/MazzardL-Medium.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardL-Medium.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardL-Medium.woff') format('woff'),
          url('/fonts/Mazzard/MazzardL-Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard M';
      src: url('/fonts/Mazzard/MazzardM-MediumItalic.eot');
      src: local('Mazzard M Medium Italic'), local('MazzardM-MediumItalic'),
          url('/fonts/Mazzard/MazzardM-MediumItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardM-MediumItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardM-MediumItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardM-MediumItalic.ttf') format('truetype');
      font-weight: 500;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard L';
      src: url('/fonts/Mazzard/MazzardL-Thin.eot');
      src: local('Mazzard L Thin'), local('MazzardL-Thin'),
          url('/fonts/Mazzard/MazzardL-Thin.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardL-Thin.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardL-Thin.woff') format('woff'),
          url('/fonts/Mazzard/MazzardL-Thin.ttf') format('truetype');
      font-weight: 100;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard M';
      src: url('/fonts/Mazzard/MazzardM-ExtraBold.eot');
      src: local('Mazzard M ExtraBold'), local('MazzardM-ExtraBold'),
          url('/fonts/Mazzard/MazzardM-ExtraBold.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardM-ExtraBold.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardM-ExtraBold.woff') format('woff'),
          url('/fonts/Mazzard/MazzardM-ExtraBold.ttf') format('truetype');
      font-weight: 800;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard M';
      src: url('/fonts/Mazzard/MazzardM-Black.eot');
      src: local('Mazzard M Black'), local('MazzardM-Black'),
          url('/fonts/Mazzard/MazzardM-Black.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardM-Black.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardM-Black.woff') format('woff'),
          url('/fonts/Mazzard/MazzardM-Black.ttf') format('truetype');
      font-weight: 900;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard L';
      src: url('/fonts/Mazzard/MazzardL-Black.eot');
      src: local('Mazzard L Black'), local('MazzardL-Black'),
          url('/fonts/Mazzard/MazzardL-Black.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardL-Black.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardL-Black.woff') format('woff'),
          url('/fonts/Mazzard/MazzardL-Black.ttf') format('truetype');
      font-weight: 900;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard M';
      src: url('/fonts/Mazzard/MazzardM-ThinItalic.eot');
      src: local('Mazzard M Thin Italic'), local('MazzardM-ThinItalic'),
          url('/fonts/Mazzard/MazzardM-ThinItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardM-ThinItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardM-ThinItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardM-ThinItalic.ttf') format('truetype');
      font-weight: 100;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard L';
      src: url('/fonts/Mazzard/MazzardL-SemiBold.eot');
      src: local('Mazzard L SemiBold'), local('MazzardL-SemiBold'),
          url('/fonts/Mazzard/MazzardL-SemiBold.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardL-SemiBold.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardL-SemiBold.woff') format('woff'),
          url('/fonts/Mazzard/MazzardL-SemiBold.ttf') format('truetype');
      font-weight: 600;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard L';
      src: url('/fonts/Mazzard/MazzardL-SemiBoldItalic.eot');
      src: local('Mazzard L SemiBold Italic'), local('MazzardL-SemiBoldItalic'),
          url('/fonts/Mazzard/MazzardL-SemiBoldItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardL-SemiBoldItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardL-SemiBoldItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardL-SemiBoldItalic.ttf') format('truetype');
      font-weight: 600;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard M';
      src: url('/fonts/Mazzard/MazzardM-Thin.eot');
      src: local('Mazzard M Thin'), local('MazzardM-Thin'),
          url('/fonts/Mazzard/MazzardM-Thin.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardM-Thin.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardM-Thin.woff') format('woff'),
          url('/fonts/Mazzard/MazzardM-Thin.ttf') format('truetype');
      font-weight: 100;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard H';
      src: url('/fonts/Mazzard/MazzardH-Regular.eot');
      src: local('Mazzard H Regular'), local('MazzardH-Regular'),
          url('/fonts/Mazzard/MazzardH-Regular.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardH-Regular.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardH-Regular.woff') format('woff'),
          url('/fonts/Mazzard/MazzardH-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard L';
      src: url('/fonts/Mazzard/MazzardL-ExtraLightItalic.eot');
      src: local('Mazzard L ExtraLight Italic'), local('MazzardL-ExtraLightItalic'),
          url('/fonts/Mazzard/MazzardL-ExtraLightItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardL-ExtraLightItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardL-ExtraLightItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardL-ExtraLightItalic.ttf') format('truetype');
      font-weight: 200;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard H';
      src: url('/fonts/Mazzard/MazzardH-SemiBold.eot');
      src: local('Mazzard H SemiBold'), local('MazzardH-SemiBold'),
          url('/fonts/Mazzard/MazzardH-SemiBold.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardH-SemiBold.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardH-SemiBold.woff') format('woff'),
          url('/fonts/Mazzard/MazzardH-SemiBold.ttf') format('truetype');
      font-weight: 600;
      font-style: normal;
      
  }
  
  @font-face {
      font-family: 'Mazzard H';
      src: url('/fonts/Mazzard/MazzardH-BoldItalic.eot');
      src: local('Mazzard H Bold Italic'), local('MazzardH-BoldItalic'),
          url('/fonts/Mazzard/MazzardH-BoldItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardH-BoldItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardH-BoldItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardH-BoldItalic.ttf') format('truetype');
      font-weight: bold;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard L';
      src: url('/fonts/Mazzard/MazzardL-BlackItalic.eot');
      src: local('Mazzard L Black Italic'), local('MazzardL-BlackItalic'),
          url('/fonts/Mazzard/MazzardL-BlackItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardL-BlackItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardL-BlackItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardL-BlackItalic.ttf') format('truetype');
      font-weight: 900;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard H';
      src: url('/fonts/Mazzard/MazzardH-ExtraLightItalic.eot');
      src: local('Mazzard H ExtraLight Italic'), local('MazzardH-ExtraLightItalic'),
          url('/fonts/Mazzard/MazzardH-ExtraLightItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardH-ExtraLightItalic.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardH-ExtraLightItalic.woff') format('woff'),
          url('/fonts/Mazzard/MazzardH-ExtraLightItalic.ttf') format('truetype');
      font-weight: 200;
      font-style: italic;
      
  }
  
  @font-face {
      font-family: 'Mazzard H';
      src: url('/fonts/Mazzard/MazzardH-ExtraBold.eot');
      src: local('Mazzard H ExtraBold'), local('MazzardH-ExtraBold'),
          url('/fonts/Mazzard/MazzardH-ExtraBold.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Mazzard/MazzardH-ExtraBold.woff2') format('woff2'),
          url('/fonts/Mazzard/MazzardH-ExtraBold.woff') format('woff'),
          url('/fonts/Mazzard/MazzardH-ExtraBold.ttf') format('truetype');
      font-weight: 800;
      font-style: normal;
      
  }`}
  />
);

export default Fonts;
