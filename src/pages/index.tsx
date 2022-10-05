import { Flex } from '@chakra-ui/react';
import type { GetServerSideProps, NextPage } from 'next';
import BannerCallToAction from '../components/BannerCallToAction/BannerCallToAction';
import Partnes from '../components/Partners';
import Talents from '../components/Talents';
import GetTalents from '../services/GetTalents';

interface Talent {
  id: number;
  name: string;
  cargo: string;
  avatar: string;
}
interface TalentsProps {
  talents: Talent[];
}
const Home: NextPage = ({ talents }: TalentsProps) => {
  return (
    <>
      <Flex w="100%" flexDirection="column" align="center">
        <Flex
          w="100%"
          justify="center"
          as="section"
          bg="green.200"
          pt={['5px', '5px', '10px', '10px']}
          pb={['40px', '40px', '25px', '25px']}
        >
          <BannerCallToAction
            image="/images/creativeidea.svg"
            title="Lorem ipsum dolor sit amet consectetur"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?"
            alt="imagem pessoa conversando"
            invert={true}
            main={true}
          />
        </Flex>
        <Partnes />
        <Flex as="section" mt={['60px', '60px', '70px']}>
          <BannerCallToAction
            image="/images/talk.svg"
            title="Lorem ipsum dolor sit amet consectetur"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?"
            alt="imagem pessoa conversando"
            invert={false}
          />
        </Flex>
        <Flex as="section" mt={['60px', '60px', '70px']}>
          <BannerCallToAction
            image="/images/peoplenotebook.svg"
            title="Lorem ipsum dolor sit amet consectetur"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?"
            alt="imagem pessoa conversando"
            invert={true}
          />
        </Flex>
        <Talents talents={talents} />
      </Flex>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await GetTalents.get();
  const talents = response.data;
  return {
    props: { talents },
  };
};

export default Home;
