import { Button, Stack } from '@chakra-ui/react';
import {
  RiBallPenLine,
  RiContactsLine,
  RiHome2Line,
  RiLogoutBoxLine,
  RiRulerLine,
  RiToolsLine,
  RiTruckLine,
  RiUser3Line,
} from 'react-icons/ri';
import { useRouter } from 'next/router';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  const router = useRouter();

  function handleSignOut() {
    router.push('/');
  }

  return (
    <Stack spacing="8" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/inicio" icon={RiHome2Line}>
          Início
        </NavLink>
        <NavLink href="/clientes" icon={RiContactsLine}>
          Clientes
        </NavLink>
      </NavSection>

      <NavSection title="LOJA">
        <NavLink href="/definicao" icon={RiRulerLine}>
          Definição
        </NavLink>
        <NavLink href="/vendas" icon={RiBallPenLine}>
          Vendas
        </NavLink>
      </NavSection>

      <NavSection title="ESCRITÓRIO">
        <NavLink href="/assitenciaTecnica" icon={RiToolsLine}>
          AT
        </NavLink>
        <NavLink href="/compras" icon={RiBallPenLine}>
          Compras
        </NavLink>
        <NavLink href="/entregas" icon={RiTruckLine}>
          Entregas
        </NavLink>
      </NavSection>

      <NavSection title="PESSOAL">
        <NavLink href="/perfil" icon={RiUser3Line}>
          Perfil
        </NavLink>
        <Button
          onClick={handleSignOut}
          variant="unstyled"
          pl="8"
          _hover={{ textDecoration: 'underline' }}
          type="submit"
        >
          Sair
        </Button>
      </NavSection>
    </Stack>
  );
}
