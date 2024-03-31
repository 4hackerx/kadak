import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import React from "react";

import { cn } from "../utils";

interface selectProps {
  selectItems: SelectItem[];
  label: string;
  placeHolder: string;
}

interface SelectItem {
  content: string;
  value: string;
}

const SelectInput = (prop: selectProps) => (
  <div className=" flex flex-col gap-2 w-full">
    <p className=" text-sm font-medium">{prop.label}</p>
    <Select.Root>
      <Select.Trigger
        className="inline-flex items-center justify-between rounded-xl w-full p-6 px-[15px] leading-none h-[35px] bg-white shadow-[0_0_0_2px] shadow-[#C2C2C2] outline-none"
        aria-label="TODO"
      >
        <Select.Value placeholder={prop.placeHolder} />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="ml-2 overflow-hidden bg-white rounded-xl shadow-[-4px_0px_8px_0px_hsla(209,100%,49%,0.3),4px_2px_4px_0px_hsla(187,100%,49%,0.2)]">
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white cursor-default">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px]">
            <Select.Group>
              {prop.selectItems.map((selectItem) => {
                return (
                  <SelectItem value={selectItem.value}>
                    {selectItem.content}
                  </SelectItem>
                );
              })}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white cursor-default">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  </div>
);

const SelectItem = React.forwardRef<
  HTMLDivElement,
  {
    value: string;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
  }
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={cn(
        "leading-none rounded-[7px] flex items-center h-[25px] p-5 pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-black data-[highlighted]:text-white",
        className,
        props?.disabled &&
          " text-gray-400 after:content-['disabled'] after:ml-2 after:text-xs"
      )}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default SelectInput;
