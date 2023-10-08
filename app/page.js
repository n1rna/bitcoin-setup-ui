"use client";

import React, { useState } from "react";

import OverviewFlow from "./flow";
import {
  NextUIProvider,
  Accordion,
  AccordionItem,
  Divider,
} from "@nextui-org/react";
import { GlobalProvider } from "./context";
import CNavbar from "./navbar";
import {
  ChakraProvider,
} from "@chakra-ui/react";


export default function Home() {
  return (
    <ChakraProvider>
      <NextUIProvider>
        <main className="text-foreground bg-background h-screen flex flex-col">
          <GlobalProvider>
            <CNavbar />
            {/* <SettingsAccordion /> */}
            <Divider />
            <OverviewFlow />
          </GlobalProvider>
        </main>
      </NextUIProvider>
    </ChakraProvider>
  );
}
