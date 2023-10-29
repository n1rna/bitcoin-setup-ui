import React, { memo } from "react";
import { Position, Handle } from "reactflow";
import {
  Card,
  CardBody,
  CardHeader,
  Popover,
  Button,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { LuMoreVertical } from "react-icons/lu";

// eslint-disable-next-line react/display-name
export default memo(({ data, isConnectable, ...props }) => {
  console.log("wwww", props, isConnectable)
  return (
    <>
      <Popover placement="right" backdrop="transparent">
          <Card className="h-14 z-10 overflow-hidden">
          <CardHeader className="justify-between">
              <div className="flex gap-5">
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small leading-none">
                    {data.label}
                  </h4>
                </div>
              </div>
              <PopoverTrigger>

              <Button
                color="primary"
                radius="full"
                variant="light"
                isIconOnly
              >
                <LuMoreVertical />
              </Button>
              </PopoverTrigger>
            </CardHeader>

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
        <PopoverContent className="max-w-xs">
          <div className="px-1 py-2 w-[240px]">
            <div className="text-small font-bold">{data.description}</div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
});
