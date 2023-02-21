'use client';
import React from 'react';
import MainLayout from '../components/layouts/MainLayout/MainLayout';
import { Container } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/provider';
import theme from '../theme';

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head />
      <body>
        <ChakraProvider resetCSS theme={theme}>
          <MainLayout>
            <Container>{children}</Container>
          </MainLayout>
        </ChakraProvider>
      </body>
    </html>
  );
}
