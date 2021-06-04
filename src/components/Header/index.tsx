import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { Logo } from './Logo';
import { Profile } from './Profile';

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      justify="space-between"
      px="6"
    >
      <Logo />

      <Profile showProfileData={isWideVersion} />
    </Flex>
  );
}
