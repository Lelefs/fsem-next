import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from 'react-icons/ri';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { SEO } from '../../components/SEO';

export default function ClientList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <SEO title="Clientes | FSEM" />

      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={['4', '4', '8']}>
          <Flex mb="8" justify="space-between" align="center">
            <Stack spacing="4" align="center" direction="row">
              <Heading size="lg" fontWeight="normal">
                Clientes
              </Heading>
              <Text color="gray.300">(1)</Text>
            </Stack>

            <Link href="/clientes/criar-editar" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="green"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                {isWideVersion && (
                  <Th color="gray.300" px="6" width="5">
                    #
                  </Th>
                )}
                <Th color="gray.300">Cliente</Th>
                {isWideVersion && <Th color="gray.300">CPF/CNPJ</Th>}
                <Th w="5" />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                {isWideVersion && (
                  <Td px="6">
                    <Text>1</Text>
                  </Td>
                )}
                <Td>
                  <Box>
                    <Text fontWeight="bold">Leandro Finochio</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>123.456.789-01</Td>}
                <Td>
                  <HStack spacing="4">
                    <Link
                      href={{
                        pathname: '/clientes/criar-editar',
                        query: { name: 'Leandro' },
                      }}
                      passHref
                    >
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="green"
                      >
                        <Icon as={RiPencilLine} fontSize="16" />
                      </Button>
                    </Link>
                    <Button as="a" size="sm" fontSize="sm" colorScheme="red">
                      <Icon as={RiDeleteBinLine} fontSize="16" />
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}
