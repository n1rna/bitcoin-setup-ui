import React, { memo } from "react";
import { Position, Handle } from "reactflow";
import {
  Card,
  CardBody,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

// eslint-disable-next-line react/display-name
export default memo(({ data, isConnectable, ...props }) => {
  return (
    <>
      <Popover placement="right">
        <PopoverTrigger>
          <Card className="h-12 z-10 overflow-hidden">
            <CardBody className="flex items-center justify-center h-full overflow-hidden">
              <p className="text-center m-0">{data.label}</p>
            </CardBody>
            <Handle
              type="target"
              position={Position.Top}
              id="top-target"
              isConnectable={isConnectable}
            />
            <Handle
              type="source"
              position={Position.Top}
              id="top-source"
              isConnectable={isConnectable}
            />
            <Handle
              type="target"
              position={Position.Right}
              id="right-target"
              isConnectable={isConnectable}
            />
            <Handle
              type="source"
              position={Position.Right}
              id="right-source"
              isConnectable={isConnectable}
            />
            <Handle
              type="target"
              position={Position.Bottom}
              id="bottom-target"
              isConnectable={isConnectable}
            />
            <Handle
              type="source"
              position={Position.Bottom}
              id="bottom-source"
              isConnectable={isConnectable}
            />
            <Handle
              type="target"
              position={Position.Left}
              id="left-target"
              isConnectable={isConnectable}
            />
            <Handle
              type="source"
              position={Position.Left}
              id="left-source"
              isConnectable={isConnectable}
            />
          </Card>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-small font-bold">Links to related content</div>
            <div className="text-tiny">
              <a href="#">Link1</a>
            </div>
            <div className="text-tiny">
              <a href="#">Link2</a>
            </div>
            <div className="text-tiny">
              <a href="#">Link3</a>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
});
