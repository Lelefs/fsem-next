import { Stack } from '@chakra-ui/react';
import {
  RiBallPenLine,
  RiContactsLine, RiHome2Line, RiLogoutBoxLine, RiRulerLine, RiToolsLine, RiTruckLine, RiUser3Line,
} from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack spacing="8" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/inicio" icon={RiHome2Line}>Início</NavLink>
        <NavLink href="/clientes" icon={RiContactsLine}>Clientes</NavLink>
      </NavSection>

      <NavSection title="LOJA">
        <NavLink href="/vendas" icon={RiRulerLine}>Definição</NavLink>
        <NavLink href="/vendas" icon={RiBallPenLine}>Vendas</NavLink>
      </NavSection>

      <NavSection title="ESCRITÓRIO">
        <NavLink href="/compras" icon={RiToolsLine}>AT</NavLink>
        <NavLink href="/compras" icon={RiBallPenLine}>Compras</NavLink>
        <NavLink href="/compras" icon={RiTruckLine}>Entregas</NavLink>
      </NavSection>

      <NavSection title="PESSOAL">
        <NavLink href="/formularios" icon={RiUser3Line}>Perfil</NavLink>
        <NavLink href="/automacao" icon={RiLogoutBoxLine}>Sair</NavLink>
      </NavSection>
    </Stack>
  );
}
