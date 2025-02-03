import { useState } from "react";
import GaugeChart from "react-gauge-chart";

const Task02 = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [category, setCategory] = useState("");
  const categoryList = [
    {
      color: "#0000FF",
      label: "Underweight",
    },
    {
      color: "#00FF00",
      label: "Normal",
    },
    {
      color: "#FFFF00",
      label: "Overweight",
    },
    {
      color: "#FF7F00",
      label: "Obese",
    },
    {
      color: "#FF0000",
      label: "Extremely Obese",
    },
  ];

  const calculate = () => {
    const calculateBmi =
      parseInt(weight) / ((parseInt(height) / 100) * (parseInt(height) / 100));
    setBmi(calculateBmi);

    if (calculateBmi <= 18.5) {
      setCategory("Underweight");
    } else if (calculateBmi > 18.5 && calculateBmi <= 24.9) {
      setCategory("Normal");
    } else if (calculateBmi > 24.9 && calculateBmi <= 29.9) {
      setCategory("Overweight");
    } else if (calculateBmi > 29.9 && calculateBmi <= 34.9) {
      setCategory("Obese");
    } else if (calculateBmi > 34.9) {
      setCategory("Extremely Obese");
    }
  };

  const formatBmiToGauge = () => {
    if (bmi <= 18.5) {
      return (bmi / 18.5) * 0.1;
    } else if (bmi > 18.5 && bmi <= 24.9) {
      return 0.2 + ((bmi - 18.5) / (24.9 - 18.5)) * 0.1;
    } else if (bmi > 24.9 && bmi <= 29.9) {
      return 0.4 + ((bmi - 24.9) / (29.9 - 24.9)) * 0.1;
    } else if (bmi > 29.9 && bmi <= 34.9) {
      return 0.6 + ((bmi - 29.9) / (34.9 - 29.9)) * 0.1;
    } else if (bmi > 34.9) {
      return 0.8 + Math.min((bmi - 34.9) / 5, 0.1);
    }
    return 0;
  };

  return (
    <div
      id="task-two"
      className="w-full flex flex-col justify-center items-center h-screen"
    >
      <div className="w-full flex flex-col items-center gap-5 sm:max-w-[540px] sm:mx-auto sm:h-[667px] h-screen px-4 py-7 relative overflow-hidden bg-quinaryFill sm:border border-primaryStroke sm:rounded-md">
        <p className="capitalize text-2xl font-semibold z-10">
          Your BMI Report
        </p>

        {/* BMI Report */}
        <div className="relative w-full h-[30rem] flex flex-col justify-center items-center bg-primaryFill rounded-xl">
          <div className="sm:w-[380px] w-[340px]">
            <GaugeChart
              id="gauge-chart1"
              percent={formatBmiToGauge()}
              colors={["#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000"]}
              nrOfLevels={5}
              animate={true}
              hideText={true}
            />
          </div>
          {category ? (
            <p className="font-bold sm:text-2xl text-2xl mb-7 sm:mb-12 sm:mt-[-10px]">
              {category}
            </p>
          ) : (
            <p className="font-bold sm:text-3xl text-2xl opacity-0 mb-7 sm:mb-12 sm:mt-[-10px]">
              0
            </p>
          )}
          <p className="absolute font-bold sm:text-[40px] text-3xl mt-1">
            {bmi.toFixed(2)}
          </p>

          <div className="absolute bottom-4 flex justify-between items-start sm:gap-5 gap-3">
            {categoryList?.map((items, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-2"
              >
                <div
                  className="sm:w-3 sm:h-[7px] w-2 h-[4px] opacity-80"
                  style={{ backgroundColor: items.color }}
                ></div>
                <p className="sm:text-[11px] text-[10px] text-secondary whitespace-nowrap">
                  {items.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center items-center relative bg-primaryFill border border-primaryStroke p-3 gap-3 rounded-xl">
          {/* Height Input */}
          <div className="w-full h-full flex flex-col justify-center items-center bg-secondaryFill border border-primaryStroke rounded-xl px-4 py-5">
            <p className="text-[12px] uppercase tracking-wide text-secondary">
              Height
            </p>
            <div className="flex items-end">
              <input
                placeholder="0"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="sm:text-5xl text-[40px] font-bold bg-transparent outline-none text-center sm:w-24 w-20 h-[63px] ml-3"
              />
              <p className="text-sm mb-3">cm</p>
            </div>
          </div>

          {/* Weight Input */}
          <div className="w-full h-full flex flex-col justify-center items-center bg-secondaryFill border border-primaryStroke rounded-xl px-4 py-5">
            <p className="text-[12px] uppercase tracking-wide text-secondary">
              Weight
            </p>
            <div className="flex items-end">
              <input
                placeholder="0"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="sm:text-5xl text-[40px] font-bold bg-transparent outline-none text-center sm:w-24 w-20 h-[63px] ml-3"
              />
              <p className="text-sm mb-3">kg</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => calculate()}
          className="flex justify-center items-center w-full mt-5 py-3 border border-primaryStroke bg-secondaryFill rounded-xl gap-1 hover:bg-quaternaryFill duration-300 transition-colors ease-out z-10"
        >
          <p className="capitalize text-lg font-bold tracking-wide">
            Calculate BMI
          </p>
        </button>
      </div>
    </div>
  );
};

export default Task02;
