import * as Slider from "@radix-ui/react-slider";

interface SliderControlProps {
  sliderProps: SliderProps;
  leftText: string;
  rightText: string;
  leftIcon: any;
  rightIcon: any;
  handleClick: any;
  ariaLabel: string;
}

interface SliderProps {
  defaultValue: number[];
  max: number;
  step: number;
}

const SliderControl = (prop: SliderControlProps) => {
  return (
    <div className="flex gap-2 w-full items-center">
      <p className="block text-right w-[7ch] text-xs">{prop.leftText}</p>
      <div className="flex w-10 h-10 shadow-[0_0_0_1px] shadow-[#C2C2C2] items-center justify-center rounded-full">
        <img src={prop.leftIcon} alt="Your SVG" />
      </div>
      <form className="flex-1">
        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          defaultValue={prop.sliderProps.defaultValue}
          max={prop.sliderProps.max}
          step={prop.sliderProps.step}
        >
          <Slider.Track className="bg-white shadow-[0_0_0_1px] shadow-black outline-none relative grow rounded-full h-3">
            <Slider.Range className="absolute bg-[#474747] shadow-[-4px_0px_8px_0px_hsla(209,100%,49%,0.3),4px_2px_4px_0px_hsla(187,100%,49%,0.2)] rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-6 h-6 bg-[#474747] rounded-full focus:outline-none"
            aria-label={prop.ariaLabel}
          />
        </Slider.Root>
      </form>
      <div className="flex w-10 h-10 shadow-[0_0_0_1px] shadow-[#C2C2C2] items-center justify-center rounded-full">
        <img src={prop.rightIcon} alt="Your SVG" />
      </div>
      <p className="block text-left w-[7ch] text-xs">{prop.rightText}</p>
    </div>
  );
};

export default SliderControl;
