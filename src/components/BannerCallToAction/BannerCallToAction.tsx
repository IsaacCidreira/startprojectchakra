import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
interface BannerCallToActionProps {
  title: string;
  text: string;
  image: string;
  alt: string;
  invert?: boolean;
  main?: boolean;
}
export default function BannerCallToAction({
  image,
  text,
  title,
  alt,
  invert = true,
  main = false,
}: BannerCallToActionProps) {
  const isWideVersion = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });

  return (
    <Flex maxW="1180px" flexDir={['column', 'column', 'row']} scaleX="-1">
      {isWideVersion ? (
        <Box
          ml={
            !invert
              ? ['0px', '0px', '32px', '32px']
              : ['0px', '0px', '0px', '0px']
          }
          mr={
            invert
              ? ['0px', '0px', '32px', '32px']
              : ['0px', '0px', '0px', '0px']
          }
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb={['30px', '30px', '0px', '0px']}
          order="1"
        >
          <Image
            w={['335px', '335px', '425px', '600px']}
            src={image}
            alt={alt}
          />
        </Box>
      ) : (
        <Box
          ml={
            !invert
              ? ['0px', '0px', '32px', '32px']
              : ['0px', '0px', '0px', '0px']
          }
          mr={
            invert
              ? ['0px', '0px', '32px', '32px']
              : ['0px', '0px', '0px', '0px']
          }
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb={['30px', '30px', '0px', '0px']}
          order={!invert ? '1' : '2'}
        >
          <Image
            w={['335px', '335px', '425px', '600px']}
            src={image}
            alt={alt}
          />
        </Box>
      )}
      <Box
        w={['335px', '335px', '400px', '470px']}
        ml={
          !invert
            ? ['0px', '0px', '55px', '110px']
            : ['0px', '0px', '55px', '0px']
        }
        mr={
          !invert
            ? ['0px', '0px', '0px', '0px']
            : ['0px', '0px', '55px', '32px']
        }
        display="flex"
        flexDir="column"
        justifyContent="center"
        order={!invert ? '2' : '1'}
      >
        {main && (
          <Text mb="15px" letterSpacing="5px" textTransform="uppercase">
            Welcome
          </Text>
        )}
        <Heading
          fontSize={['1.75rem', '1.75rem', '1.75rem', '2.5rem']}
          color={main ? 'white' : 'gray.900'}
          lineHeight={['30px', '30px', '30px', '50px']}
        >
          {title}
        </Heading>
        <Text
          fontSize={'0.9375rem'}
          mt={['20px', '20px', '16px']}
          color={main ? 'gray.200' : 'gray.600'}
          lineHeight="18.75px"
        >
          {text}
        </Text>
        <Button
          mt="20px"
          h="48px"
          w="170px"
          bg={main ? '#fff' : 'gray.900'}
          color={main ? 'gray.900' : '#fff'}
          fontSize="xl"
          _hover={{
            bg: `${main ? 'gray.900' : 'gray.700'}`,
            color: 'white',
          }}
        >
          {main ? 'Explore' : 'Learn More'}
        </Button>
      </Box>
    </Flex>
  );
}
