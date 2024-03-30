import * as Slider from "@radix-ui/react-slider";

interface SliderControlProps {
  leftText: string;
  rightText: string;
  leftIcon: any;
  rightIcon: any;
  handleClick: any;
}

const SliderControl = ({}: SliderControlProps) => {
  return (
    <form>
      <Slider.Root
        className="relative flex items-center select-none touch-none w-[200px] h-5"
        defaultValue={[50]}
        max={100}
        step={10}
      >
        <Slider.Track className="bg-blackA7 relative grow rounded-full h-[3px]">
          <Slider.Range className="absolute bg-white rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA4 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA5"
          aria-label="Volume"
        />
      </Slider.Root>
    </form>
  );
};

export default SliderControl;
