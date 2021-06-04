import {
  Box, Flex, Text, Avatar,
} from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        FSEM
      </Text>

      <Flex
        align="center"
        ml="auto"
      >
        <Box mr="4" textAlign="right">
          <Text>Leandro Finochio</Text>
          <Text color="gray.300" fontSize="small">lefinochio@hotmail.com</Text>
        </Box>

        <Avatar
          size="md"
          name="Leandro Finochio"
          src="https://github.com/lelefs.png"
        />
      </Flex>
    </Flex>
  );
}
