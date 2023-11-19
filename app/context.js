import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

import { nodes as setup1Nodes, edges as setup1Edges } from "./setups/setup1-elements";
import { nodes as setup2Nodes, edges as setup2Edges } from "./setups/setup2-elements";
import { nodes as setup3Nodes, edges as setup3Edges } from "./setups/setup3-elements";

const GlobalContext = createContext({
  selectedSetup: undefined,
  setSelectedSetup: undefined,
});

export const GlobalProvider = ({ children }) => {
  const searchParams = useSearchParams();

  const [selectedSetup, setSelectedSetup] = useState(() => searchParams.get("setup") || "setup1");
  
  const [nodes, setNodes] = useState(() => []);
  const [edges, setEdges] = useState(() => []);

  useEffect(() => {
    if (selectedSetup === "setup1") {
      setNodes(setup1Nodes);
      setEdges(setup1Edges);
    } else if (selectedSetup === "setup2") {
      setNodes(setup2Nodes);
      setEdges(setup2Edges);
      
    } else if (selectedSetup === "setup3") {
      setNodes(setup3Nodes);
      setEdges(setup3Edges);
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
