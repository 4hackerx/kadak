import { cn } from "../utils";

interface buttonProps {
  text: string;
  handleClick: any;
  buttonImg?: string;
  className?: string;
}

const Button = (button: buttonProps) => {
  return (
    <button
      onClick={button.handleClick}
      className={cn(
        "flex flex-col w-full items-center justify-center font-bold text-sm leading-normal m-0 py-3 px-4 bg-[#292929] text-white rounded-lg border-2 border-[#A3A3A3] hover:shadow-[-4px_0px_8px_0px_hsla(209,100%,49%,0.3),4px_2px_4px_0px_hsla(187,100%,49%,0.2)] active:bg-transparent active:text-black",
        button.className
      )}
    >
      {button.buttonImg && (
        <img src={`/${button.buttonImg}`} className="pl-4" />
      )}
      {button.text}
    </button>
  );
};

export default Button;
