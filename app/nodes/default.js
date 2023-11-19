import React, { memo } from "react";
import { Position, Handle } from "reactflow";
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { LuInfo } from "react-icons/lu";

// eslint-disable-next-line react/display-name
export default memo(({ data, isConnectable, ...props }) => {
  return (
    <div>

      <Popover placement="right">
        <div style={{ right: -15, top: -15 }} className="absolute z-50">
          <PopoverTrigger>
            <Button isIconOnly size="sm" variant="shadow" radius="full" color="default">
              <LuInfo />
            </Button>
          </PopoverTrigger>
        </div>
        <PopoverContent className="z-50">
          <div className="px-1 py-2 z-50" style={{width: 300}}>
            <div className="text-small font-bold">Information</div>
            <div className="text-tiny">{data.description}</div>
          </div>
        </PopoverContent>
      </Popover>

      <Card className="h-14 z-10 overflow-hidden">
        <CardBody className="p-0">
          <div className="flex justify-center w-full h-full text-center">
            <span className="pt-4" style={{ fontSize: data.fontSize || 16 }}>{data.label}</span>
          </div>
        </CardBody>

        <Handle
          type="target"
          position={Position.Top}
          id="top-target"
          isConnectable={isConnectable}
          style={{ background: "#fff" }}
        />
        <Handle
          type="source"
          position={Position.Top}
          id="top-source"
          isConnectable={isConnectable}
          style={{ background: "#fff" }}
        />
        <Handle
          type="target"
          position={Position.Right}
          id="right-target"
          isConnectable={isConnectable}
          style={{ background: "#fff" }}
        />
        <Handle
          type="source"
          position={Position.Right}
          id="right-source"
          isConnectable={isConnectable}
          style={{ background: "#fff" }}
        />
        <Handle
          type="target"
          position={Position.Bottom}
          id="bottom-target"
          isConnectable={isConnectable}
          style={{ background: "#fff" }}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          id="bottom-source"
          isConnectable={isConnectable}
          style={{ background: "#fff" }}
        />
        <Handle
          type="target"
          position={Position.Left}
          id="left-target"
          isConnectable={isConnectable}
          style={{ background: "#fff" }}
        />
        <Handle
          type="source"
          position={Position.Left}
          id="left-source"
          isConnectable={isConnectable}
          style={{ background: "#fff" }}
        />
      </Card>

    </div>
  );
});
