import * as Separator from "@radix-ui/react-separator";
import Button from "./components/Button";
import PlayerControl from "./components/PlayerControl";
import SelectInput from "./components/SelectInput";
import SliderControl from "./components/SliderControl";
import SwitchControl from "./components/SwitchControl";
import TextPreviewer from "./components/TextPreviewer";

import MicSvg from "../assets/mic.svg";
import MinusSvg from "../assets/minus-sign.svg";
import NextSvg from "../assets/next.svg";
import PlaySvg from "../assets/play.svg";
import PlusSvg from "../assets/plus-sign.svg";
import PreviousSvg from "../assets/previous.svg";
import RewindSvg from "../assets/rewind-10-sec.svg";
import RocketSvg from "../assets/rocket.svg";
import SkipSvg from "../assets/skip-10-sec.svg";
import SnailSvg from "../assets/snail.svg";
import VolumeMinusSvg from "../assets/volume-minus.svg";
import VolumePlusSvg from "../assets/volume-plus.svg";

function App() {
  return (
    <div className="w-min p-5">
      <div className="flex flex-col gap-4">
        <TextPreviewer />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-sm font-bold">Player control</h1>
            <Separator.Root className="bg-black data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 justify-between">
              <PlayerControl
                text={"Previous"}
                icon={PreviousSvg}
                handleClick={undefined}
              />
              <PlayerControl
                text={"Rewind\xA010'"}
                icon={RewindSvg}
                handleClick={undefined}
              />
              <PlayerControl
                text={"Play/Pause"}
                icon={PlaySvg}
                handleClick={undefined}
              />
              <PlayerControl
                text={"Skip\xA010'"}
                icon={SkipSvg}
                handleClick={undefined}
              />
              <PlayerControl
                text={"Next"}
                icon={NextSvg}
                handleClick={undefined}
              />
            </div>
            <Button text={"Ask Kadak"} icon={MicSvg} handleClick={undefined} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-sm font-bold">Audio control</h1>
            <Separator.Root className="bg-black data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px" />
          </div>
          <div className="flex flex-col gap-4">
            <SliderControl
              leftText={"Less volume"}
              rightText={"More volume"}
              leftIcon={VolumeMinusSvg}
              rightIcon={VolumePlusSvg}
              handleClick={undefined}
              ariaLabel={"volume"}
              sliderProps={{ defaultValue: [50], max: 100, step: 10 }}
            />
            <SliderControl
              leftText={"Slower"}
              rightText={"Faster"}
              leftIcon={SnailSvg}
              rightIcon={RocketSvg}
              handleClick={undefined}
              ariaLabel={"speed"}
              sliderProps={{ defaultValue: [50], max: 100, step: 10 }}
            />
            <div className="flex justify-between gap-8 px-2">
              <SelectInput
                label={"Language"}
                placeHolder={""}
                selectItems={[
                  {
                    content: "English",
                    value: "english",
                  },
                  {
                    content: "French",
                    value: "french",
                  },
                ]}
              />
              <SelectInput
                label={"Voice name"}
                placeHolder={""}
                selectItems={[]}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-sm font-bold">Aspect control</h1>
            <Separator.Root className="bg-black data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px" />
          </div>
          <div className="flex flex-col gap-4">
            <SliderControl
              leftText={"Smaller text"}
              rightText={"Bigger text"}
              leftIcon={MinusSvg}
              rightIcon={PlusSvg}
              handleClick={undefined}
              ariaLabel={"text-size"}
              sliderProps={{ defaultValue: [50], max: 100, step: 10 }}
            />
            <div className="flex justify-between gap-4">
              <SwitchControl
                description={"Dyslexic font"}
                value={false}
                handleClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
              <SwitchControl
                description={"Invert colors"}
                value={true}
                handleClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
