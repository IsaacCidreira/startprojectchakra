import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Titles from '../Titles';

interface Talent {
  id: number;
  name: string;
  cargo: string;
  avatar: string;
}
interface TalentsProps {
  talents: Talent[];
}
export default function Talents({ talents }: TalentsProps) {
  return (
    <Flex alignItems="center" maxW="1180px" flexDir="column">
      <Titles
        subtitle="team"
        text="Lorem ipsum, dolor sit amet consectetur
Suscipit nemo hic quos, ab,"
        title="Our Talents"
      />
      <Flex
        maxW="100%"
        mt={['40px']}
        justifyContent={['space-between']}
        flexDirection={['column', 'column', 'row']}
      >
        {talents.map((talent) => (
          <Flex
            w={['252px']}
            h={['299px']}
            justify="center"
            flexDir="column"
            key={talent.id}
            boxShadow="3px 1px 10px  rgba(0,0,0, 0.2)"
            mt={['35px', '35px', '0px']}
            _first={{ mt: '0px' }}
            mr={['0px', '0px', '47px']}
            _last={{ mr: '0px' }}
          >
            <Image
              w="175px"
              h="175px"
              src={talent.avatar}
              alt="imagem dos talentos"
              margin="0 auto"
            />
            <Heading
              ml={['25px']}
              mt={['19px']}
              fontSize="2xl"
              color="gray.900"
            >
              {talent.name}
            </Heading>
            <Text
              textTransform="uppercase"
              fontSize="0.9375 rem"
              color="gray.600"
              mt={['17px']}
              ml={['25px']}
            >
              {talent.cargo}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Button
        _hover={{
          bg: 'gray.700',
        }}
        mt="45px"
        w="170px"
        h="48px"
        bg="gray.900"
      >
        View Team
      </Button>
    </Flex>
  );
}
