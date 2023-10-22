import React, { memo, useEffect, useMemo, useState } from "react";
import { useReactFlow, useNodeId } from "reactflow";
import { Card, CardHeader, CardBody, Divider, Button } from "@nextui-org/react";
import { nodes as initialNodes } from "../setups/setup1-elements";
import { FiEyeOff } from "react-icons/fi";
import { useGlobalContext } from "../context";

// eslint-disable-next-line react/display-name
export default memo(({ data, isConnectable }) => {
  const [isHidden, setHidden] = useState(() => false);
  const { elements } = useGlobalContext();

  const { setNodes, setEdges } = useReactFlow();

  const currentNodeId = useNodeId();
  const currentDefaults = initialNodes.find(
    (node) => node.id === currentNodeId,
  );

  const swimlaneNodes = useMemo(() => {
    return elements.nodes
      .filter((node) => node.parentNode === currentNodeId)
      .map((node) => node.id);
  }, [elements.nodes, currentNodeId]);

  useEffect(() => {
    setNodes((nodes) => {
      return nodes.map((node) => {
        if (swimlaneNodes.includes(node.id)) {
          if (isHidden) {
            node.className = node.className + " blur-node";
          } else {
            node.className = node.className?.replace("blur-node", "");
          }
        }
        return node;
      });
    });

    setEdges((edges) =>
      edges.map((edge) => {
        if (
          swimlaneNodes.includes(edge.source) ||
          swimlaneNodes.includes(edge.target)
        ) {
          if (isHidden) {
            edge.className += " blur-edge";
          } else {
            edge.className = edge.className?.replace("blur-edge", "");
          }
        }
        return edge;
      }),
    );
  }, [
    isHidden,
    currentNodeId,
    currentDefaults,
    setNodes,
    setEdges,
    swimlaneNodes,
  ]);

  const toggleSwimlane = () => {
    setHidden((val) => !val);
  };

  return (
    <>
      <Card className="h-full bg-transparent">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                {data.label}
              </h4>
            </div>
          </div>
          <Button
            color="primary"
            radius="full"
            variant="light"
            isIconOnly
            onClick={toggleSwimlane}
          >
            <FiEyeOff />
          </Button>
        </CardHeader>
        <Divider />

        <CardBody
          style={{ backgroundColor: data.bgColor || "rgba(0, 255, 0, 0.3)" }}
        ></CardBody>
      </Card>
      {/* {isHidden ? (
        <Card className="h-full bg-transparent">
          <CardBody className="">
            <Button color="danger" onClick={toggleSwimlane} isIconOnly className="h-auto">
              x
            </Button>
            <h4 className="text-small font-semibold leading-none text-default-600 origin-center rotate-90">{data.label}</h4>
          </CardBody>
        </Card >
      ) : (
        
      )} */}
    </>
  );
});
