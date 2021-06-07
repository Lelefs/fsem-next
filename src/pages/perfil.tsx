import { Flex, Text } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { SEO } from '../components/SEO';

export default function Profile() {
  return (
    <Flex direction="column" h="100vh">
      <SEO title="Perfil | FSEM" />

      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Flex>
          <Text>Perfil funcionando</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
