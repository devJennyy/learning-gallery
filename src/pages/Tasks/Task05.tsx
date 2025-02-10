import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Task05 = () => {

  return (
    <div
      id="task-five"
      className="flex flex-col justify-center items-center w-full h-screen"
    >
      <div className="w-full flex flex-col items-center gap-5 sm:max-w-[540px] sm:mx-auto sm:h-[667px] h-screen px-4 py-7 overflow-hidden bg-primaryFill sm:border sm:border-primaryStroke sm:rounded-md">
        <p className="capitalize text-2xl font-semibold z-10">
          Distance Conversion
        </p>

        {/* BMI Report */}
        <div className="w-full h-[30rem] grid grid-cols-2 justify-between items-center gap-3 p-3 rounded-md border border-primaryStroke">
          <div className="w-full h-full flex flex-col justify-center items-center gap-2 bg-secondaryFill border border-primaryStroke rounded-md">
            <p className="uppercase text-[12px] text-secondary font-thin">
              Meter
            </p>
            <p className="text-5xl font-bold">100</p>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center gap-2 bg-quinaryFill/50 rounded-md">
            <p className="uppercase text-[12px] text-secondary font-thin">
              Meter
            </p>
            <p className="text-5xl font-bold">0</p>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center gap-2 bg-quinaryFill/50 rounded-md">
            <p className="uppercase text-[12px] text-secondary font-thin">
              Meter
            </p>
            <p className="text-5xl font-bold">0</p>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center gap-2 bg-quinaryFill/50 rounded-md">
            <p className="uppercase text-[12px] text-secondary font-thin">
              Meter
            </p>
            <p className="text-5xl font-bold">0</p>
          </div>
        </div>

        <div className="relative w-full flex flex-col justify-center items-start bg-secondaryFill border border-primaryStroke rounded-xl px-4 py-3">
          <div className="absolute right-4">
          <Select>
            <SelectTrigger className="w-[130px] bg-quinaryFill border border-primaryStroke">
              <SelectValue placeholder="Miles" />
            </SelectTrigger>
            <SelectContent className="bg-quinaryFill border border-primaryStroke">
              <SelectItem value="miles">Miles</SelectItem>
              <SelectItem value="meter">Meter</SelectItem>
              <SelectItem value="kilometer">Kilometer</SelectItem>
              <SelectItem value="yard">Yard</SelectItem>
            </SelectContent>
          </Select>
          </div>
          
          <p className="text-[12px] uppercase tracking-wide text-secondary">
            kilometer
          </p>

          <input
            placeholder="0"
            type="number"
            className="text-[40px] font-bold bg-transparent outline-none text-left h-12"
          />
        </div>

        <button className="flex justify-center items-center w-full mt-5 py-3 border border-primaryStroke bg-secondaryFill rounded-xl gap-1 hover:bg-quaternaryFill duration-300 transition-colors ease-out z-10">
          <p className="capitalize text-lg font-bold tracking-wide">
            Calculate
          </p>
        </button>
      </div>
    </div>
  );
};

export default Task05;
