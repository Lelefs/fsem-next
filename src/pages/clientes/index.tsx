import {
  Box, Button, Checkbox, Flex, Heading, HStack, Icon, Table, Tbody, Td, Text, Th, Thead, Tr,
} from '@chakra-ui/react';
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { SEO } from '../../components/SEO';

export default function ClientList() {
  return (
    <Box>
      <SEO title="Clientes | FSEM" />

      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Clientes</Heading>

            <Button as="a" size="sm" fontSize="sm" colorScheme="green" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="green" />
                </Th>
                <Th>Cliente</Th>
                <Th>Data de cadastro</Th>
                <Th w="5" />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="green" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Leandro Finochio</Text>
                    <Text fontSize="sm" color="gray.300">lefinochio@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  04/06/2021
                </Td>
                <Td>
                  <HStack spacing="4">
                    <Button as="a" size="sm" fontSize="sm" colorScheme="green">
                      <Icon as={RiPencilLine} fontSize="16" />
                    </Button>
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
