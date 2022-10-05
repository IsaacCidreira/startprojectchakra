import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import Titles from '../Titles';

function Partnes() {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Titles
        subtitle="Partners"
        text="Lorem ipsum, dolor sit amet consectetur
adipisicing elit."
        title="Lorem Ipsum Dolor"
      />
      <Flex mt="55px" flexDir={['column', 'column', 'row']} maxW="1158px">
        <Image
          mr={['0px', '0px', '68px']}
          w="160px"
          h="50px"
          src="images/google.svg"
          alt="imagem do google"
        />
        <Image
          w="160px"
          h="50px"
          mr={['0px', '0px', '68px']}
          mt={['40px', '40px', '0px']}
          maxW="100%"
          src="images/microsoft.svg"
          alt="imagem da microsoft"
        />
        <Image
          w="160px"
          h="50px"
          mt={['40px', '40px', '0px']}
          mr={['0px', '0px', '68px']}
          maxW="100%"
          src="images/airbnb.svg"
          alt="imagem da airbnb"
        />
        <Image
          w="160px"
          h="50px"
          mt={['40px', '40px', '0px']}
          mr={['0px', '0px', '68px']}
          maxW="100%"
          src="images/facebook.svg"
          alt="imagem do facebook"
        />
        <Image
          w="160px"
          h="50px"
          mt={['40px', '40px', '0px']}
          maxW="100%"
          src="images/spotify.svg"
          alt="imagem do spotify"
        />
      </Flex>
      <Button
        _hover={{
          bg: 'gray.700',
        }}
        mt="55px"
        w="170px"
        h="48px"
        bg="gray.900"
      >
        Learn More
      </Button>
    </Flex>
  );
}

export default Partnes;
