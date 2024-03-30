import * as _Switch from "@radix-ui/react-switch";

interface SwitchControlProps {
  label?: string;
  description: string;
  optional?: boolean;
  disabled?: boolean;
  value: boolean;
  handleClick: (checked: boolean) => void;
}

const SwitchControl = (prop: SwitchControlProps) => {
  return (
    <div>
      <span className="flex gap-2">
        {prop.label && <p className=" text-sm font-bold">{prop.label}</p>}
        {prop.optional && <p className=" text-sm font-normal">(Optional)</p>}
      </span>
      <div className="flex gap-4 items-center">
        <_Switch.Root
          className="w-[42px] h-[25px] bg-gray-300 rounded-full relative shadow-md focus:outline-none cursor-pointer data-[state=checked]:bg-[#63392c]/80"
          id="toggle-switch"
          checked={prop.value}
          onCheckedChange={prop.handleClick}
        >
          <_Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-md transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
        </_Switch.Root>
        <p className="text-sm font-normal">{prop.description}</p>
      </div>
    </div>
  );
};

export default SwitchControl;
