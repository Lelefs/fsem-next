import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  placeholder: string;
}

export function Input({ name, label, placeholder, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={label}>{label}</FormLabel> }
      
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="green.600"
        bg="gray.900"
        variant="filled"
        _hover={{
          bg: 'gray.900'
        }}
        size="lg"
        placeholder={placeholder}
        {...rest}
      />
    </FormControl>
  )
}