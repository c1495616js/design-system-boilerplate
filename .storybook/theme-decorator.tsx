import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, Box, Text } from '../src';

const ThemeDecorator = (storyFn: any) => (
  <>
    <ThemeProvider theme={theme.light}>
      <Box
        bg="bg.primary"
        px={4}
        py={5}
        width="100%"
        height="100%"
        mb={4}
        border="1px solid #eee"
      >
        <Text variant="body" fontSize={5}>
          Light Theme:
        </Text>
        {storyFn({ id: (id) => 'light-' + id })}
      </Box>
    </ThemeProvider>
    <ThemeProvider theme={theme.dark}>
      <Box bg="bg.primary" px={4} py={5} width="100%" height="100%">
        <Text variant="body" fontSize={5}>
          Dark Theme:
        </Text>
        {storyFn({ id: (id) => 'dark-' + id })}
      </Box>
    </ThemeProvider>
  </>
);

export default ThemeDecorator;
