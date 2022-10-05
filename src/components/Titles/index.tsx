import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
interface TitlesProps {
  subtitle?: string;
  title: string;
  text: string;
}

export default function Titles({ subtitle, text, title }: TitlesProps) {
  return (
    <Flex
      flexDir="column"
      lineHeight="20px"
      fontSize={['1rem']}
      mt={['36px', '36px', '60px']}
      w={['335px', '335px', '411px']}
      h={['162']}
    >
      <Text
        mb="16px"
        textTransform="uppercase"
        color="green.200"
        textAlign="center"
        letterSpacing="5px"
        fontWeight="bold"
      >
        {subtitle}
      </Text>
      <Heading
        lineHeight="50px"
        fontSize={['24px', '24px', '40px']}
        color="gray.900"
        w="100%"
        textAlign="center"
      >
        {title}
      </Heading>
      <Text
        mt="16px"
        lineHeight="25px"
        textAlign="center"
        fontSize="xl"
        color="gray.900"
      >
        {text}
      </Text>
    </Flex>
  );
}
