import { useState } from "react";
import { GrPowerCycle } from "react-icons/gr";
const Task03 = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [convertType, setConvertType] = useState("celsius to fahrenheit");
  const [converted, setConverted] = useState("");
  const [weatherType, setWeatherType] = useState("");

  const convert = () => {
    if (convertType === "celsius to fahrenheit") {
      const fahrenheitValue = ((parseInt(celsius) * 9) / 5 + 32).toFixed(0);
      setFahrenheit(fahrenheitValue.toString());
      setConverted(fahrenheitValue.toString());

      if(fahrenheitValue )
    } else if (convertType === "fahrenheit to celsius") {
      const celsiusValue = (((parseInt(fahrenheit) - 32) * 5) / 9).toFixed(0);
      setCelsius(celsiusValue.toString());
      setConverted(celsiusValue.toString());
    }
  };

  const switchButton = () => {
    if (convertType === "celsius to fahrenheit") {
      setConvertType("fahrenheit to celsius");
    } else if (convertType === "fahrenheit to celsius") {
      setConvertType("celsius to fahrenheit");
    }

    setCelsius("");
    setFahrenheit("");
    setConverted("");
  };

  return (
    <div
      id="task-three"
      className="w-full flex justify-center items-center h-screen"
    >
      <div className="w-full sm:max-w-[540px] sm:mx-auto sm:h-[667px] h-screen flex flex-col justify-between items-center bg-quinaryFill">
        <div className="w-full h-full flex flex-col justify-center items-center gap-5 bg-primaryFill rounded-bl-[3rem] bottom-0 py-7 relative overflow-hidden">
          {/* Background */}
          <div className="w-full">
            <div className="absolute left-2 opacity-30">
              <img
                src="/images/cloud-bg-one.svg"
                alt="Background"
                className="w-full h-full"
              />
            </div>
            <div className="absolute right-[-3rem] top-0 opacity-30">
              <img
                src="/images/cloud-bg-one.svg"
                alt="Background"
                className="w-full h-full"
              />
            </div>
            <div className="absolute right-[1rem] bottom-4 opacity-30">
              <img
                src="/images/cloud-bg-two.svg"
                alt="Background"
                className="w-full h-full"
              />
            </div>

            <div className="h-[9rem]">
              <img
                src="/images/warm.svg"
                alt="Weather Temperature"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[3.5rem] font-semibold leading-none">{converted} <span className="ml-[-10px] text-secondary">°C</span></p>
            <p>The Temperature is {weatherType}</p>
          </div>
        </div>

        <div className="bg-primaryFill">
          <div className="w-full flex flex-col justify-between items-center bg-quinaryFill rounded-tr-[3rem] bottom-0 z-10 py-7 sm:px-10 px-7">
            <div className="flex flex-col gap-3 justify-center items-center relative border border-primaryStroke p-3 rounded-xl w-full">
              {/* Celsius Section */}
              {convertType === "celsius to fahrenheit" ? (
                <div className="flex flex-col items-start gap-1 w-full bg-secondaryFill border border-primaryStroke rounded-xl py-2 px-4">
                  <p className="text-secondary text-sm">Celsius</p>
                  <div className="flex">
                    <input
                      placeholder="0"
                      type="number"
                      value={celsius}
                      onChange={(e) => setCelsius(e.target.value)}
                      className="text-4xl font-bold bg-transparent outline-none text-left w-full h-10"
                    />
                    <p className="text-4xl text-secondary font-bold">°C</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-start gap-1 w-full bg-secondaryFill border border-primaryStroke rounded-xl py-2 px-4">
                  <p className="text-secondary text-sm">Fahrenheit</p>
                  <div className="flex">
                    <input
                      placeholder="0"
                      type="number"
                      value={fahrenheit}
                      onChange={(e) => setFahrenheit(e.target.value)}
                      className="text-4xl font-bold bg-transparent outline-none text-left w-full h-10"
                    />
                    <p className="text-4xl text-secondary font-bold">°F</p>
                  </div>
                </div>
              )}

              {/* Cycle button */}
              <div className="bg-quinaryFill p-1 rounded-full absolute">
                <button
                  onClick={() => switchButton()}
                  className="p-2 bg-secondaryFill rounded-full border border-primaryStroke "
                >
                  <GrPowerCycle size={24} className="spin-button" />
                </button>
              </div>

              {/* Fahrenheit Section */}
              {convertType === "celsius to fahrenheit" ? (
                <div className="flex flex-col items-start gap-1 w-full bg-secondaryFill border border-primaryStroke rounded-xl py-2 px-4">
                  <p className="text-secondary text-sm">Fahrenheit</p>
                  <div className="flex">
                    <input
                      placeholder="0"
                      type="text"
                      disabled={true}
                      value={fahrenheit}
                      onChange={(e) => setFahrenheit(e.target.value)}
                      className="text-4xl font-bold bg-transparent outline-none text-left w-full h-10"
                    />
                    <p className="text-4xl text-secondary font-bold">°F</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-start gap-1 w-full bg-secondaryFill border border-primaryStroke rounded-xl py-2 px-4">
                  <p className="text-secondary text-sm">Celsius</p>
                  <div className="flex">
                    <input
                      placeholder="0"
                      type="text"
                      disabled={true}
                      value={celsius}
                      onChange={(e) => setCelsius(e.target.value)}
                      className="text-4xl font-bold bg-transparent outline-none text-left w-full h-10"
                    />
                    <p className="text-4xl text-secondary font-bold">°C</p>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => convert()}
              className="flex justify-center items-center w-full mt-8 py-3 border border-primaryStroke bg-secondaryFill rounded-xl gap-1 hover:bg-quaternaryFill duration-300 transition-colors ease-out z-10"
            >
              <p className="capitalize text-lg font-bold tracking-wide">
                Convert
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task03;
