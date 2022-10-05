import { Button, Flex, Image } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import React from 'react';
import Titles from '../components/Titles';
import Portfolio from '../services/Portfolio';

interface PortfoliosProps {
  id: number;
  avatar: string;
}

interface IPortfoliosProps {
  portfolios: PortfoliosProps[];
}
export default function portfolio(portfolios: IPortfoliosProps) {
  return (
    <Flex align="center" maxW={['1180px']} flexDir="column" margin="0 auto">
      <Titles
        subtitle="works"
        text="Lorem ipsum, dolor sit amet consectetur
        adipisicing elit."
        title="Portfolio"
      />
      <Flex
        justify={['center', 'center', 'space-around']}
        flexWrap="wrap"
        mt={['45px', '45px', '82px']}
      >
        {portfolios.portfolios.map((portfolio: PortfoliosProps) => (
          <Flex
            key={portfolio.id}
            mt={['45px', '45px', '0px']}
            _first={{ mt: '0px' }}
          >
            <Image
              h={['195px', '195px', '334px']}
              w={['335px', '335px', '500px']}
              src={portfolio.avatar}
              alt="imagem de portfolio"
            />
          </Flex>
        ))}
      </Flex>
      <Button
        _hover={{
          bg: 'gray.700',
        }}
        mt="64px"
        w="170px"
        h="48px"
        bg="gray.900"
        mb={['40px']}
      >
        Learn More
      </Button>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await Portfolio.get();
  const portfolios = response.data;
  return {
    props: { portfolios },
  };
};
