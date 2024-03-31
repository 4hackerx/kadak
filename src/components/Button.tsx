import { cn } from "../utils";

interface buttonProps {
  text: string;
  handleClick: any;
  icon: string;
  className?: string;
}

const Button = (prop: buttonProps) => {
  return (
    <button
      onClick={prop.handleClick}
      className={cn(
        "flex w-full items-center justify-center gap-2 font-bold text-sm leading-normal m-0 py-3 px-4 bg-[#292929] text-white rounded-lg border-2 border-[#A3A3A3] hover:shadow-[-4px_0px_8px_0px_hsla(209,100%,49%,0.3),4px_2px_4px_0px_hsla(187,100%,49%,0.2)] active:bg-transparent active:text-black",
        prop.className
      )}
    >
      {prop.icon && <img src={prop.icon} alt="Your SVG" />}
      {prop.text}
    </button>
  );
};

export default Button;
