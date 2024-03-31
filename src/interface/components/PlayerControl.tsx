import { cn } from "../../utils";

interface PlayerControlsProps {
  text: string;
  handleClick: any;
  icon: any;
  className?: string;
}

const PlayerControls = (prop: PlayerControlsProps) => {
  return (
    <button
      onClick={prop.handleClick}
      className={cn(
        "flex flex-col items-center justify-center text-xs leading-normal m-0 py-2 px-4 bg-transparent text-black rounded-lg border border-[#A3A3A3] hover:shadow-[-4px_0px_8px_0px_hsla(209,100%,49%,0.3),4px_2px_4px_0px_hsla(187,100%,49%,0.2)] active:bg-[#292929] active:text-white",
        prop.className
      )}
    >
      {<img src={prop.icon} alt="Your SVG" />}
      {prop.text}
    </button>
  );
};

export default PlayerControls;
