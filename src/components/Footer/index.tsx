import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import IconStack from './IconStack';

export default function Footer() {
  const date = new Date().toLocaleDateString('pt-BR', {
    year: 'numeric',
  });
  return (
    <Flex
      as="footer"
      w="100%"
      mt="54px"
      h={'125px'}
      bgColor="green.200"
      justifyContent={['center', 'center', 'space-around']}
      align="center"
      flexDirection={['column', 'column', 'row']}
    >
      <IconStack />
      <Box mt={['20px', '20px', '0px']}>
        <Text lineHeight="25px" fontSize="xl">
          Start, {date}. All rights reserved.
        </Text>
      </Box>
    </Flex>
  );
}
