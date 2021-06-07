import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Input } from '../../components/Form/Input';
import { SEO } from '../../components/SEO';

export default function CreateClient() {
  const [physicalPerson, setPhysicalPerson] = useState(true);
  const router = useRouter();

  const handleClick = e => {
    e.preventDefault();
    router.back();
  };

  return (
    <Box>
      <SEO title="Criar cliente | FSEM" />

      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={['4', '4', '6']}>
          <Heading size="lg" fontWeight="normal">
            Dados pessoais
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={['4', '4', '6']}>
            <SimpleGrid
              minChildWidth="240px"
              spacing={['4', '4', '6']}
              w="100%"
            >
              {physicalPerson ? (
                <Input
                  name="name"
                  label="Nome completo"
                  placeholder="Digite seu nome completo"
                />
              ) : (
                <Input
                  name="corporateName"
                  label="Razão Social"
                  placeholder="Digite a razão social"
                />
              )}
            </SimpleGrid>

            <SimpleGrid
              minChildWidth="240px"
              spacing={['4', '4', '6']}
              w="100%"
            >
              <Input
                name="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                type="email"
              />
              <Input
                name="telephone"
                label="Telefone"
                placeholder="Digite seu telefone"
                type="number"
              />
            </SimpleGrid>

            {physicalPerson ? (
              <SimpleGrid
                minChildWidth="240px"
                spacing={['4', '4', '6']}
                w="100%"
              >
                <Input
                  name="cpf"
                  label="CPF"
                  placeholder="Digite seu CPF"
                  type="number"
                />
                <Input
                  name="rg"
                  label="RG"
                  placeholder="Digite seu RG"
                  type="number"
                />
              </SimpleGrid>
            ) : (
              <SimpleGrid
                minChildWidth="240px"
                spacing={['4', '4', '6']}
                w="100%"
              >
                <Input
                  name="cnpj"
                  label="CNPJ"
                  placeholder="Digite o CNPJ"
                  type="number"
                />
                <Input
                  name="stateRegistration"
                  label="Inscrição Estadual"
                  placeholder="Digite a Inscrição Estadual"
                  type="number"
                />
              </SimpleGrid>
            )}

            <SimpleGrid
              minChildWidth="240px"
              spacing={['4', '4', '6']}
              w="100%"
            >
              <Checkbox
                colorScheme="green"
                isChecked={physicalPerson}
                onChange={e => setPhysicalPerson(!physicalPerson)}
              >
                Pessoa física
              </Checkbox>
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button onClick={handleClick} colorScheme="whiteAlpha">
                Cancelar
              </Button>
              <Button colorScheme="green">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
