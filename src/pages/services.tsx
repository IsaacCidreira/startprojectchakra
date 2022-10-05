import { Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import React from 'react';
import Titles from '../components/Titles';
import GetPrice from '../services/GetPrice';
import CardService from '../components/CardService.tsx/CardService';
interface PriceProps {
  id: number;
  type: string;
  price: number;
  description: string;
  benefits: string[];
}

interface IPriceProps {
  price: PriceProps[];
}

export default function services(price: IPriceProps) {
  return (
    <Flex justify="center" align="center" flexDir="column">
      <Titles
        subtitle="Plans"
        title="Our Services"
        text="Lorem ipsum, dolor sit amet consectetur
adipisicing elit."
      />
      <Flex
        maxW="1227px"
        flexDir={['column', 'column', 'row']}
        justifyContent={['space-between']}
        mt={['46px', '46px', '78px']}
      >
        <CardService price={price} />
      </Flex>
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prices = await GetPrice.get();
  const price = prices.data;
  return {
    props: {
      price,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
