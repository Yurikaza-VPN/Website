import {
  AppShell,
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarLink,
} from "@saas-ui/react";

import { Button } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Nav style={{ paddingTop: 10 }}>
      <NavbarBrand></NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <NavbarLink isActive aria-current="page" href="#">
            Home
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#">About</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justifyContent="flex-end" spacing="2">
        <NavbarItem>
          <Button _activeLink="#">Login</Button>
        </NavbarItem>
        <NavbarItem>
          <Button variant="primary">Sign up</Button>
        </NavbarItem>
      </NavbarContent>
    </Nav>
  );
}
