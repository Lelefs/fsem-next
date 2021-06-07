import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/Form/Input';
import { SEO } from '../components/SEO';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function SignIn() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async values => {
    console.log(values);
    router.push('/inicio');
  };

  return (
    <>
      <SEO title="Login | FSEM" />
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          w="100%"
          maxWidth={360}
          bg="gray.800"
          padding="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              label="E-mail"
              error={errors.email}
              {...register('email')}
            />

            <Input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              label="Senha"
              error={errors.password}
              {...register('password')}
            />
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="green"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
