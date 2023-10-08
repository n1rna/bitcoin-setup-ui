import React from "react";

import {
  Navbar,
  Image,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import { Box } from "@chakra-ui/react";

export default function CNavbar() {
  return (
    <>
      <Box style={{ zIndex: 10000 }}>
        <Navbar isBordered isBlurred={false}>
          <NavbarBrand></NavbarBrand>
          <NavbarContent className="sm:flex gap-4" justify="center">
            <Image width={150} alt="cyphersages" src="logo.png" />
            {/* <NavbarItem isActive>
                            <Link href="#" aria-current="page">
                                Customers
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="#">
                                Integrations
                            </Link>
                        </NavbarItem> */}
          </NavbarContent>
          <NavbarContent justify="end"></NavbarContent>
        </Navbar>
      </Box>
    </>
  );
}
