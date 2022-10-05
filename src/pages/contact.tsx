/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Flex, Image, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { FieldError, useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../components/Form/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Titles from '../components/Titles';

type contactUserFormData = {
  name: string;
  email: string;
  message: string;
};

const contactFormSchema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
});
export default function contacts() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const isWideVersion = useBreakpointValue({
    base: true,
    md: true,
    lg: false,
  });

  const { errors } = formState;

  const handleSubmitContact: SubmitHandler<contactUserFormData> = async (
    values,
  ) => {
    console.log(values);
  };

  return (
    <Flex
      justifyContent="center"
      align="center"
      flexDir="column"
      mb={['0px', '0px', '44px']}
    >
      <Titles
        title="Contact Us"
        text="Lorem ipsum, dolor sit amet consectetur
adipisicing elit."
      />
      <Box maxW="1180px" mt={['45px', '45px', '67px']}>
        <Flex
          flexDirection={['column', 'column', 'row']}
          w="100%"
          maxW={1480}
          mx="auto"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            color="gray.900"
            as="form"
            flex={1}
            borderRadius={8}
            onSubmit={handleSubmit(handleSubmitContact)}
            width={['335px', '335px', '575px']}
            order={isWideVersion ? '2' : '1'}
          >
            <Flex flexDir="column" w="100%">
              <Input
                name="name"
                label="Name"
                {...register('name')}
                error={errors.name as FieldError}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                {...register('email')}
                error={errors.email as FieldError}
              />
            </Flex>
            <Flex w="100%">
              <Input
                name="message"
                type="message"
                label="Message"
                {...register('message')}
                error={errors.message as FieldError}
              />
            </Flex>
            <Flex mt="8" justify="flex-end"></Flex>
            <Button
              _hover={{
                bg: 'gray.700',
              }}
              color="#fff"
              w="100%"
              type="submit"
              bg="gray.900"
            >
              Submit
            </Button>
          </Box>
          <Image
            ml={['0px', '0px', '30px']}
            w={['335px', '335px', '575px']}
            src="images/map.svg"
            alt="imagem mapa"
            order={isWideVersion ? '1' : '2'}
            mb={['21px', '21px', '0px']}
          />
        </Flex>
      </Box>
    </Flex>
  );
}
