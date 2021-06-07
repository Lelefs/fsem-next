import { Flex, Text } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { SEO } from '../components/SEO';

export default function At() {
  return (
    <Flex direction="column" h="100vh">
      <SEO title="Assitência técnica | FSEM" />

      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Flex>
          <Text>Assitência técnica funcionando</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
