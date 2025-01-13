import { useState } from "react";
import { TbTransferVertical } from "react-icons/tb";

const Task03 = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState(0);
  const [temperature, setTemperature] = useState("");
  const [image, setImage] = useState("");

  const convert = () => {
    const convertFahrenheit = parseInt(celsius) * 1.8 + 32;
    setFahrenheit(convertFahrenheit);

    if (convertFahrenheit <= 14) {
      setTemperature("Very Cold");
      setImage("/images/very-cold.png");
    } else if (convertFahrenheit >= 14 && convertFahrenheit <= 32) {
      setTemperature("Cold");
      setImage("/images/cold-cool.png");
    } else if (convertFahrenheit >= 32 && convertFahrenheit <= 50) {
      setTemperature("Cool");
      setImage("/images/cold-cool.png");
    } else if (convertFahrenheit >= 50 && convertFahrenheit <= 68) {
      setTemperature("Mild");
      setImage("/images/mild-warm.png");
    } else if (convertFahrenheit >= 68 && convertFahrenheit <= 77) {
      setTemperature("Warm");
      setImage("/images/mild-warm.png");
    } else if (convertFahrenheit >= 77 && convertFahrenheit <= 86) {
      setTemperature("Hot");
      setImage("/images/hot-veryhot.png");
    } else if (convertFahrenheit >= 86 && convertFahrenheit <= 95) {
      setTemperature("Very Hot");
      setImage("/images/hot-veryhot.png");
    } else if (convertFahrenheit >= 95) {
      setTemperature("Extreme Hot");
      setImage("/images/extreme-hot.png");
    }
  };

  return (
    <div
      id="task-three"
      className="flex flex-col gap-4 w-full sm:max-w-[375px] sm:mx-auto h-screen p-4"
    >
      <p className="uppercase text-2xl font-bold py-3 text-center">
        Weather temperature
      </p>
      <div className="flex flex-col gap-3 justify-center items-center relative">
        <div className="flex flex-col items-start gap-2 w-full bg-primaryFill border border-primaryStroke rounded-sm p-4">
          <p className="text-secondary text-sm">Enter Degree Celsius</p>
          <input
            placeholder="0"
            type="number"
            value={celsius}
            onChange={(e) => setCelsius(e.target.value)}
            className="text-5xl font-bold bg-transparent outline-none text-left w-full h-10"
          />
        </div>

        <button
          onClick={() => convert()}
          className="p-3 bg-primaryFill rounded-full border border-primaryStroke absolute"
        >
          <TbTransferVertical size={24} className="spin-button" />
        </button>

        <div className="flex flex-col items-start gap-2 w-full bg-primaryFill border border-primaryStroke rounded-sm p-4">
          <p className="text-secondary text-sm">Fahrenheit</p>
          <p className="text-5xl font-bold text-left w-full h-10">
            {fahrenheit}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1 border-t border-secondary/20 mt-10">
        <p className="text-sm mt-5">
          The Temperature Is :
          <span className="text-cyan-300 font-bold tracking-wide ml-1">
            {temperature}
          </span>
        </p>
        {temperature ? (
          <div className="h-[15rem]">
            <img
              src={image}
              alt="Temperature Illustration"
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    </div>
  );
};

export default Task03;
