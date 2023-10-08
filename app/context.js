import React, { createContext, useContext, useEffect, useState } from "react";

import { nodes as setup1Nodes, edges as setup1Edges } from "./setup1-elements";
import { nodes as setup2Nodes, edges as setup2Edges } from "./setup2-elements";

const GlobalContext = createContext({
  selectedSetup: undefined,
  setSelectedSetup: undefined,
});

export const GlobalProvider = ({ children }) => {
  const [selectedSetup, setSelectedSetup] = useState(() => "setup1");
  const [nodes, setNodes] = useState(() => []);
  const [edges, setEdges] = useState(() => []);

  useEffect(() => {
    if (selectedSetup === "setup1") {
      setNodes(setup1Nodes);
      setEdges(setup1Edges);
    } else if (selectedSetup === "setup2") {
      setNodes(setup2Nodes);
      setEdges(setup2Edges);
    }
  }, [selectedSetup, setSelectedSetup, setNodes, setEdges]);

  return (
    <GlobalContext.Provider
      value={{ selectedSetup, setSelectedSetup, elements: { nodes, edges } }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
