import { Text } from '@chakra-ui/react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href='/inicio' passHref>
      <Text
        as="a"
        fontSize={['2xl', '3xl']}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        FSEM
      </Text>
    </Link>
  );
}
