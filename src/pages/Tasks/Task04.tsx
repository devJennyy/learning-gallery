import { GrPowerCycle } from "react-icons/gr";

const Task04 = () => {
  return (
    <div
      id="task-four"
      className="flex flex-col justify-center items-center w-full h-screen"
    >
      <div className="flex flex-col justify-center items-center gap-14 w-full sm:max-w-[540px] sm:mx-auto sm:h-[667px] h-screen px-8 sm:border border-primaryStroke relative overflow-hidden bg-quinaryFill">
        <div className="flex flex-col gap-1">
          <p className="capitalize text-2xl font-bold z-10">
            Currency Exchange Rate
          </p>
          <p className="text-sm z-10">Please enter an amount</p>
        </div>

        <div className="bg-primaryFill rounded-full w-[50rem] h-[50rem] absolute bottom-1/2 z-0 overflow-hidden"></div>

        <div className="flex flex-col gap-3 justify-center items-center relative bg-primaryFill border border-primaryStroke p-4 rounded-xl">
          {/* USD Section */}
          <div className="flex flex-col items-start gap-2 w-full bg-secondaryFill border border-primaryStroke rounded-xl px-4 py-5">
            <p className="text-secondary text-sm">USD $ - US Dollar</p>
            <input
              placeholder="0"
              type="number"
              className="text-5xl font-bold bg-transparent outline-none text-left w-full h-10"
            />
          </div>

          {/* Cycle button */}
          <div className="bg-primaryFill p-1 rounded-full absolute">
            <button className="p-2 bg-secondaryFill rounded-full border border-primaryStroke ">
              <GrPowerCycle size={24} className="spin-button" />
            </button>
          </div>

          {/* PHP Section */}
          <div className="flex flex-col items-start gap-2 w-full bg-secondaryFill border border-primaryStroke rounded-xl px-4 py-5">
            <p className="text-secondary text-sm">PHP ₱ - Philippine Peso</p>
            <input
              placeholder="0"
              type="number"
              className="text-5xl font-bold bg-transparent outline-none text-left w-full h-10"
            />
          </div>
        </div>

        <button className="flex justify-center items-center w-full mt-5 py-3 border border-primaryStroke bg-secondaryFill rounded-xl gap-1 hover:bg-quaternaryFill duration-300 transition-colors ease-out z-10">
          <p className="capitalize text-lg font-bold tracking-wide">Exchange</p>
        </button>
      </div>
    </div>
  );
};

export default Task04;
