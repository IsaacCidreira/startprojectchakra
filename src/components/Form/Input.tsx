import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref,
) => {
  return (
    <FormControl mt="21px" isInvalid={!!error}>
      {!!label && (
        <FormLabel mb="16px" htmlFor={name}>
          {label}
        </FormLabel>
      )}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="green.200"
        bgColor="gray.200"
        variant="filled"
        _hover={{
          bgColor: 'gray.300',
        }}
        _focus={{ bgColor: 'gray.200' }}
        size="lg"
        ref={ref}
        {...rest}
      />
      {error && (
        <FormErrorMessage color="red.800"> {error.message}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
