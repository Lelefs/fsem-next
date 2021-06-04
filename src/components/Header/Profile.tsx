import {
  Avatar, Box, Flex, Text,
} from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }) {
  return (
    <Flex
      align="center"
    >
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Leandro Finochio</Text>
          <Text color="gray.300" fontSize="small">lefinochio@hotmail.com</Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Leandro Finochio"
        src="https://github.com/lelefs.png"
      />
    </Flex>
  );
}
