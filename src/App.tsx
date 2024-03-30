import * as Separator from "@radix-ui/react-separator";
import TextPreviewer from "./components/TextPreviewer";
import Button from "./components/Button";
import SliderControl from "./components/SliderControl";
import PlayerControl from "./components/PlayerControl";
import SelectInput from "./components/SelectInput";
import SwitchControl from "./components/SwitchControl";

function App() {
  return (
    <div className="w-min p-5">
      <TextPreviewer />
      <div>
        <div>
          <h1 className="text-sm font-bold">Player control</h1>
          <Separator.Root className="bg-black data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 justify-between">
            <PlayerControl text={"Previous"} handleClick={undefined} />
            <PlayerControl text={"Skip\xA010"} handleClick={undefined} />
            <PlayerControl text={"Play/Pause"} handleClick={undefined} />
            <PlayerControl text={"Skip\xA010"} handleClick={undefined} />
            <PlayerControl text={"Next"} handleClick={undefined} />
          </div>
          <Button text={"Ask Kadak"} handleClick={undefined} />
        </div>
      </div>
      <div>
        <h1 className="text-sm font-bold">Audio control</h1>
        <Separator.Root className="bg-black data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px" />
      </div>
      <div>
        <SliderControl
          leftText={""}
          rightText={""}
          leftIcon={undefined}
          rightIcon={undefined}
          handleClick={undefined}
        />
        <SliderControl
          leftText={""}
          rightText={""}
          leftIcon={undefined}
          rightIcon={undefined}
          handleClick={undefined}
        />
        <div className="flex justify-between">
          <SelectInput label={"Language"} placeHolder={""} />
          <SelectInput label={"Voice name"} placeHolder={""} />
        </div>
      </div>
      <div>
        <h1 className="text-sm font-bold">Aspect control</h1>
        <Separator.Root className="bg-black data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px" />
      </div>
      <div>
        <SliderControl
          leftText={""}
          rightText={""}
          leftIcon={undefined}
          rightIcon={undefined}
          handleClick={undefined}
        />
        <div className="flex justify-between">
          <SwitchControl
            description={""}
            value={false}
            handleClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <SwitchControl
            description={""}
            value={true}
            handleClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
