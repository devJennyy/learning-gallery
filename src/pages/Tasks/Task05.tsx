import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

const Task05 = () => {
  const [switchType, setSwitchType] = useState(false);

  return (
    <div
      id="task-five"
      className="flex flex-col justify-center items-center w-full h-screen"
    >
      <div className="w-full flex flex-col items-center gap-5 sm:max-w-[540px] sm:mx-auto sm:h-[667px] h-screen px-4 py-7 overflow-hidden bg-quinaryFill sm:border sm:border-primaryStroke/30 sm:rounded-md">
        <p className="capitalize text-2xl font-semibold z-10">
          Distance Conversion
        </p>

        {/* BMI Report */}
        <div className="w-full h-[30rem] flex flex-col justify-center items-center bg-primaryFill rounded-xl"></div>

        <div className="relative w-full flex flex-col justify-center items-start bg-secondaryFill border border-primaryStroke rounded-xl px-4 py-3">
          <button
            onClick={() => setSwitchType(!switchType)}
            className="absolute right-4 w-[110px] h-10 flex justify-between items-center px-2 bg-quinaryFill border border-primaryStroke rounded-lg"
          >
            <p className="ml-1 text-sm">Kilometer</p>
            {switchType ? (
              <div className="">
                <LuChevronUp size={15} />
                <div className="z-50 absolute top-11 right-[-1px] w-[110px] flex flex-col bg-quinaryFill border border-primaryStroke rounded-lg p-1 text-sm">
                  <button className="text-start hover:bg-secondaryFill rounded-sm py-2 px-3">Kilometer</button>
                  <button className="text-start hover:bg-secondaryFill rounded-sm py-2 px-3">Meter</button>
                  <button className="text-start hover:bg-secondaryFill rounded-sm py-2 px-3">Yard</button>
                </div>
              </div>
            ) : (
              <LuChevronDown size={15} />
            )}
          </button>
          <p className="text-[12px] uppercase tracking-wide text-secondary">
            kilometer
          </p>

          <input
            placeholder="0"
            type="number"
            className="text-[40px] font-bold bg-transparent outline-none text-left h-12"
          />
        </div>

        <button className="z-0 flex justify-center items-center w-full mt-5 py-3 border border-primaryStroke bg-secondaryFill rounded-xl gap-1 hover:bg-quaternaryFill duration-300 transition-colors ease-out z-10">
          <p className="capitalize text-lg font-bold tracking-wide">
            Calculate
          </p>
        </button>
      </div>
    </div>
  );
};

export default Task05;
