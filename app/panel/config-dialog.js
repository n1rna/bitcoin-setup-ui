import React, { useEffect, useCallback } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Tooltip,
  Button,
  Select,
  SelectItem,
  Checkbox,
} from "@nextui-org/react";
import { FiSettings } from "react-icons/fi";
import { useGlobalContext } from "../context";
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

export const availableSetups = [
  {
    label: "Single Signature: Mobile or PC",
    value: "setup1",
    description: "Bluewallet Single sig",
  },
  {
    label: "Single Signature: Mobile or PC + HWW",
    value: "setup2",
    description: "Desktop electrum",
  },
  {
    label: "Multi Signature: PC + HWW + Custodian",
    value: "setup3",
    description: "Multi sig",
  },
];

const SetupSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
 
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  const { selectedSetup, setSelectedSetup } = useGlobalContext();

  const handleSetupSelection = (e) => {
    router.push(pathname + '?' + createQueryString('setup', e.target.value))
  };

  useEffect(() => {
    if (searchParams.get("setup")) {
      setSelectedSetup(searchParams.get("setup"))
    }
  }, [searchParams, setSelectedSetup])

  return (
    <Select
      label="Select a setup"
      selectedKeys={new Set([selectedSetup])}
      onChange={handleSetupSelection}
      size="sm"
    >
      {availableSetups.map((setup) => (
        <SelectItem key={setup.value} value={setup.value}>
          {setup.label}
        </SelectItem>
      ))}
    </Select>
  );
};

const ConfigurationDialog = () => {
  return (
    <Popover offset={10} placement="right-start" backdrop="opaque">
      <Tooltip content="Configure setup" placement={"right"}>
        <div className="max-w-fit">
          <PopoverTrigger>
            <Button
              size="lg"
              isIconOnly
              color="primary"
              aria-label="Like"
              radius="full"
              style={{backgroundColor: "rgba(181, 101, 118, 0.8)"}}
            >
              <FiSettings />
            </Button>
          </PopoverTrigger>
        </div>
      </Tooltip>
      <PopoverContent>
        {(titleProps) => (
          <div className="px-1 py-2 w-full" style={{ width: 400 }}>
            <p className="text-small font-bold text-foreground" {...titleProps}>
              Configure Setup
            </p>
            <Spacer x={4} />
            <div className="mt-2 flex flex-col gap-2 w-full">
              <SetupSelector />
              <Spacer x={4} />
              <p
                className="text-small font-bold text-foreground"
                {...titleProps}
              >
                Privacy related
              </p>
              <Checkbox radius="lg">Personal Bitcoin Fullnode</Checkbox>
              <Checkbox radius="lg">Tor Network</Checkbox>
              <Spacer x={4} />
              <p
                className="text-small font-bold text-foreground"
                {...titleProps}
              >
                Physical safety
              </p>
              <Checkbox isSelected={true} radius="lg">
                Passphrase
              </Checkbox>
              <Checkbox radius="lg">Plausible Deniability</Checkbox>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default ConfigurationDialog;
