import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#212529',
      '600': 'rgba(33, 37, 41, 0.5)',
    },
    green: {
      '200': '#74C69D',
    },
  },
  fonts: {
    heading: 'Crimson Text',
    body: 'Work Sans',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.50',
      },
    },
  },
});
