import {
  Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Input } from '../../components/Form/Input';
import { SEO } from '../../components/SEO';

export default function EditClient() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <Box>
      <SEO title="Editar cliente | FSEM" />

      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={['4', '4', '6']}>
          <Heading size="lg" fontWeight="normal">Criar cliente</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={['4', '4', '6']}>
            <SimpleGrid minChildWidth="240px" spacing={['4', '4', '6']} w="100%">
              <Input name="name" label="Nome completo" placeholder="Digite seu nome completo" />
              <Input name="email" label="E-mail" placeholder="Digite seu e-mail" type="email" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['4', '4', '6']} w="100%">
              <Input name="password" label="Senha" placeholder="Digite sua senha" type="password" />
              <Input name="password_confirmation" label="Confirmação de senha" placeholder="Confirme sua senha" type="password" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button onClick={handleClick} colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="green">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}