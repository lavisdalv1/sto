'use client';

import MainLayout from '../components/layouts/MainLayout/MainLayout';
import { ChakraProvider } from '@chakra-ui/provider';
import theme from '../theme';

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <ChakraProvider resetCSS theme={theme}>
          <MainLayout>{children}</MainLayout>
        </ChakraProvider>
      </body>
    </html>
  );
}
