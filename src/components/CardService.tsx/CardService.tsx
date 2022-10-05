import {
  Button,
  Flex,
  Icon,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import { BsCheckLg } from 'react-icons/bs';

export default function CardService({ price }) {
  return (
    <>
      {price.price.map((service) => (
        <Flex
          w={['339px']}
          padding="46px 30px"
          justifyContent="center"
          align="center"
          color="gray.900"
          flexDir="column"
          key={service.id}
          textAlign="center"
          boxShadow="3px 1px 10px  rgba(0,0,0, 0.2)"
          _last={{ mr: '0px' }}
          _first={{ mt: '0px' }}
          mt={['50px', '50px', '0px']}
          mr={['0px', '0px', '105px']}
        >
          <Text lineHeight="18.75px" fontSize="0.9375 rem">
            {service.type}
          </Text>
          <Flex justify="center" align="center">
            <Text fontSize="2.5rem" fontWeight="bold" color="gray.900">
              ${service.price}
            </Text>
            <Text fontSize="0.9375 rem" color="gray.600">
              /month
            </Text>
          </Flex>
          <Text>{service.description}</Text>
          <UnorderedList
            mt={['55px']}
            ml={['0px']}
            flexDir="column"
            listStyleType="none"
          >
            {service.benefits.map((benefits, index) => (
              <ListItem
                display="flex"
                justifyContent="center"
                alignItems="center"
                key={index}
                mt={['14px']}
                _first={{ mt: '0px' }}
                textAlign="center"
              >
                <Icon mr="12px" color="green.200" as={BsCheckLg} /> {benefits}
              </ListItem>
            ))}
          </UnorderedList>
          <Button
            _hover={{
              bg: 'gray.700',
            }}
            mt="45px"
            w="170px"
            h="48px"
            bg="gray.900"
            mb={['40px']}
            color="#fff"
          >
            Learn More
          </Button>
        </Flex>
      ))}
    </>
  );
}
