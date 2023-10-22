import React, { useCallback, useEffect } from "react";
import ReactFlow, {
  addEdge,
  Controls,
  useNodesState,
  useEdgesState,
  useReactFlow,
} from "reactflow";

import SwimlaneNode from "./nodes/swimlane";
import DefaultNode from "./nodes/default";
import FlowPanel from "./panel";
import { useGlobalContext } from "./context";

import "reactflow/dist/style.css";

const nodeTypes = {
  swimlaneNode: SwimlaneNode,
  actionStepNode: DefaultNode,
};

const OverviewFlow = () => {
  const { elements } = useGlobalContext();
  const reactFlowInstance = useReactFlow();

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    reactFlowInstance && reactFlowInstance.fitView();
  }, [reactFlowInstance, nodes])

  useEffect(() => {
    setNodes(elements.nodes);
    setEdges(elements.edges);
  }, [elements.nodes, elements.edges, setNodes, setEdges]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  return (
    <div className="flex-1 overflow-auto">
        <ReactFlow
          nodesDraggable={false}
          nodesConnectable={false}
          // zoomOnDoubleClick={false}
          // zoomOnScroll={false}
          // panOnDrag={false}
          // elementsSelectable={false}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          attributionPosition="top-right"
          className="react-flow-subflows-example"
          nodeTypes={nodeTypes}
        >
          <Controls />
          <FlowPanel />
          {/* <Panel position="top-left">top-left</Panel> */}
          {/* <Background color="#fff" /> */}
        </ReactFlow>
    </div>
  );
};

export default OverviewFlow;
