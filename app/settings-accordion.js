import React from "react";

import {
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { FiChevronRight } from "react-icons/fi";

const SettingsIndicator = () => {
  return (
    <div className="flex flex-row items-center">
      <FiChevronRight />
      <p>Settings</p>
    </div>
  );
};

const SettingsAccordion = () => {
  return (
    <Accordion>
      <AccordionItem
        classNames={{
          titleWrapper: "text-left max-w-5xl px-6",
          trigger: "flex items-center justify-center",
        }}
        hideIndicator
        key="1"
        aria-label="Accordion 1"
        title={<SettingsIndicator />}
      >
        <div className="flex max-w-5xl h-screen">
          <div></div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default SettingsAccordion;
