import { useState } from "react";
import { GrPowerCycle } from "react-icons/gr";
const Task03 = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [convertType, setConvertType] = useState("celsius to fahrenheit");
  const [converted, setConverted] = useState("");
  const [weatherType, setWeatherType] = useState("");
  const [symbol, setSymbol] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const weatherInsights = [
    {
      image: "/images/very-cold.svg",
      startLabel: "Very Cold to",
      endLabel: "Cool",
    },
    {
      image: "/images/cool.svg",
      startLabel: "Cold to",
      endLabel: "Mild",
    },
    {
      image: "/images/warm.svg",
      startLabel: "Warm to",
      endLabel: " Extremely Hot",
    },
  ];

  const convert = () => {
    if (convertType === "celsius to fahrenheit") {
      const fahrenheitValue = ((parseInt(celsius) * 9) / 5 + 32).toFixed(0);
      setFahrenheit(fahrenheitValue.toString());
      setConverted(fahrenheitValue.toString());
      setSymbol("°F");
      if (parseInt(fahrenheitValue) <= 14) {
        setWeatherType("Very Cold");
        setWeatherIcon("/images/very-cold.svg");
      } else if (
        parseInt(fahrenheitValue) >= 14 &&
        parseInt(fahrenheitValue) <= 32
      ) {
        setWeatherType("Cold");
        setWeatherIcon("/images/very-cold.svg");
      } else if (
        parseInt(fahrenheitValue) >= 32 &&
        parseInt(fahrenheitValue) <= 50
      ) {
        setWeatherType("Cool");
        setWeatherIcon("/images/cool.svg");
      } else if (
        parseInt(fahrenheitValue) >= 50 &&
        parseInt(fahrenheitValue) <= 68
      ) {
        setWeatherType("Mild");
        setWeatherIcon("/images/cool.svg");
      } else if (
        parseInt(fahrenheitValue) >= 68 &&
        parseInt(fahrenheitValue) <= 77
      ) {
        setWeatherType("Warm");
        setWeatherIcon("/images/warm.svg");
      } else if (
        parseInt(fahrenheitValue) >= 77 &&
        parseInt(fahrenheitValue) <= 86
      ) {
        setWeatherType("Hot");
        setWeatherIcon("/images/warm.svg");
      } else if (
        parseInt(fahrenheitValue) >= 86 &&
        parseInt(fahrenheitValue) <= 95
      ) {
        setWeatherType("Very Hot");
        setWeatherIcon("/images/warm.svg");
      } else if (parseInt(fahrenheitValue) >= 95) {
        setWeatherType("Extreme Hot");
        setWeatherIcon("/images/warm.svg");
      }
    } else if (convertType === "fahrenheit to celsius") {
      const celsiusValue = (((parseInt(fahrenheit) - 32) * 5) / 9).toFixed(0);
      setCelsius(celsiusValue.toString());
      setConverted(celsiusValue.toString());
      setSymbol("°C");
      if (parseInt(celsiusValue) <= -10) {
        setWeatherType("Extremely Cold");
        setWeatherIcon("/images/very-cold.svg");
      } else if (
        parseInt(celsiusValue) >= -10 &&
        parseInt(celsiusValue) <= -5
      ) {
        setWeatherType("Very Cold");
        setWeatherIcon("/images/very-cold.svg");
      } else if (parseInt(celsiusValue) >= -5 && parseInt(celsiusValue) <= 0) {
        setWeatherType("Cold");
        setWeatherIcon("/images/very-cold.svg");
      } else if (parseInt(celsiusValue) >= 0 && parseInt(celsiusValue) <= 10) {
        setWeatherType("Cool");
        setWeatherIcon("/images/cool.svg");
      } else if (parseInt(celsiusValue) >= 10 && parseInt(celsiusValue) <= 15) {
        setWeatherType("Mild");
        setWeatherIcon("/images/cool.svg");
      } else if (parseInt(celsiusValue) >= 15 && parseInt(celsiusValue) <= 20) {
        setWeatherType("Warm");
        setWeatherIcon("/images/warm.svg");
      } else if (parseInt(celsiusValue) >= 20 && parseInt(celsiusValue) <= 30) {
        setWeatherType("Hot");
        setWeatherIcon("/images/warm.svg");
      } else if (parseInt(celsiusValue) >= 30 && parseInt(celsiusValue) <= 40) {
        setWeatherType("Very Hot");
        setWeatherIcon("/images/warm.svg");
      } else if (parseInt(celsiusValue) >= 40) {
        setWeatherType("Extremely Hot");
        setWeatherIcon("/images/warm.svg");
      }
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
    setSymbol("");
  };

  return (
    <div
      id="task-three"
      className="w-full flex justify-center items-center h-screen"
    >
      <div className="w-full sm:max-w-[540px] sm:mx-auto sm:h-[667px] h-screen flex flex-col justify-between items-center bg-quinaryFill">
        {converted ? (
          <div className="w-full h-full flex flex-col justify-center items-center gap-5 bg-primaryFill rounded-bl-[3rem] bottom-0 py-7 relative overflow-hidden">
            {/* Background */}
            <div className="w-full">
              <div className="absolute left-2 opacity-30 animate-slide-fast">
                <img
                  src="/images/cloud-bg-one.svg"
                  alt="Background"
                  className="w-full h-full"
                />
              </div>
              <div className="absolute right-[-3rem] top-0 opacity-30 animate-slide-reverse">
                <img
                  src="/images/cloud-bg-one.svg"
                  alt="Background"
                  className="w-full h-full"
                />
              </div>
              <div className="absolute right-[1rem] bottom-4 opacity-30 animate-slide-slow">
                <img
                  src="/images/cloud-bg-two.svg"
                  alt="Background"
                  className="w-full h-full"
                />
              </div>
            </div>
            {/* Output Section */}
            <div className="h-[8rem]">
              <img
                src={weatherIcon}
                alt="Weather Temperature"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[3.5rem] font-semibold leading-none">
                {converted} <span className="ml-[-10px]">{symbol}</span>
              </p>
              <p>The Temperature is {weatherType}</p>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col justify-center items-center gap-8 bg-primaryFill rounded-bl-[3rem] bottom-0 py-7 relative overflow-hidden">
            <div className="flex flex-col gap-1">
              <p className="capitalize text-2xl font-bold z-10">
                Temperature Converter
              </p>
              <p className="text-sm z-10">Please enter a number</p>
            </div>
            <div className="flex justify-center items-center gap-16">
              {weatherInsights?.map((items) => {
                return (
                  <div className="flex flex-col gap-4">
                    <div className="w-20 h-20 p-2 rounded-full bg-quinaryFill/40">
                      <img
                        src={items.image}
                        alt="weather icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm">
                      {items.startLabel} <br />
                      {items.endLabel}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

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
            
            {/* Convert Button */}
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
