import React from "react";
import { Panel } from "reactflow";

import { VStack, Box } from "@chakra-ui/react";
import { useGlobalContext } from "./context";
import ConfigurationDialog from "./panel/config-dialog";
import InformationDialog from "./panel/info-dialog";


const FlowPanel = () => {
  return (
    <Panel position="top-left">
      <Box style={{ marginTop: 20, marginLeft: 20 }}>
        <VStack spacing={4}>
          <InformationDialog />
          <ConfigurationDialog />
        </VStack>
      </Box>
    </Panel>
  );
};

export default FlowPanel;
