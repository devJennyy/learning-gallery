import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const Task05 = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [unitType, setUnitType] = useState("");
  const [distanceValue, setDistanceValue] = useState("");
  const [kilometer, setKilometer] = useState("");
  const [meter, setMeter] = useState("");
  const [yard, setYard] = useState("");

  const calculateDistance = () => {
    const calculateMilesToKilometers = (parseFloat(distanceValue) * 1.60934).toLocaleString();
    setKilometer(calculateMilesToKilometers.toString());
    const calculateMilesToMeters = (parseFloat(distanceValue) * 1609.34).toLocaleString();
    setMeter(calculateMilesToMeters.toString());
    const calculateMilesToYards = (parseFloat(distanceValue) * 1760).toLocaleString();
    setYard(calculateMilesToYards.toString());
  }

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <div
      id="task-five"
      className="flex flex-col justify-center items-center w-full h-screen"
    >
      {loading && <LoadingSpinner />}
      <div className="relative w-full flex flex-col justify-end items-center gap-8 sm:max-w-[540px] sm:mx-auto sm:h-[667px] sm:p-8 p-4 h-screen overflow-hidden bg-quinaryFill sm:border sm:border-primaryStroke sm:rounded-md">
        <div className="absolute top-0 w-full h-[18rem] flex justify-center items-center bg-primaryFill rounded-b-[3rem] z-0">
          {distanceValue ? (
            <div className="flex flex-col gap-1 mb-24">
              <p className="text-4xl font-bold z-10">
                The{" "}
                <span className="capitalize">
                  {unitType ? unitType : "Unit"}
                </span>{" "}
                of {distanceValue}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-1 mb-24">
              <p className="capitalize text-2xl font-bold z-10">
                Distance Conversion
              </p>
              <p className="text-sm z-10">
                Input a distance and choose a unit for conversion.
              </p>
            </div>
          )}
        </div>
        <div className="w-full flex flex-col justify-between items-center gap-3 p-3 rounded-md bg-primaryFill border border-primaryStroke z-10">
         <div className="w-full flex gap-3">
         <div className="w-full h-full flex flex-col justify-center items-center gap-2 p-4 bg-quinaryFill rounded-md">
            <p className="uppercase text-[12px] text-secondary font-thin">
              Kilometers
            </p>
            <p className="sm:text-3xl text-2xl font-semibold">{kilometer ? kilometer : "0"}</p>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center gap-2 p-4 bg-quinaryFill rounded-md">
            <p className="uppercase text-[12px] text-secondary font-thin">
              Meters
            </p>
            <p className="sm:text-3xl text-2xl font-semibold">{meter ? meter : "0"}</p>
          </div>
         </div>
          <div className="w-full h-full flex flex-col justify-center items-center gap-2 p-4 bg-quinaryFill rounded-md">
            <p className="uppercase text-[12px] text-secondary font-thin">
              Yards
            </p>
            <p className="sm:text-3xl text-2xl font-semibold">{yard ? yard : "0"}</p>
          </div>
        </div>
        <div className="relative w-full flex flex-col justify-center items-start bg-secondaryFill border border-primaryStroke rounded-xl px-4 py-3">
          <div className="absolute right-4">
            <Select value={unitType} onValueChange={setUnitType}>
              <SelectTrigger className="w-[130px] bg-quinaryFill border border-primaryStroke">
                <SelectValue
                  placeholder={unitType ? unitType : "Select a unit"}
                />
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
            {unitType ? unitType : "Select a unit"}
          </p>

          <input
            placeholder="0"
            type="number"
            value={distanceValue}
            onChange={(e) => setDistanceValue(e.target.value)}
            className="text-[40px] font-bold bg-transparent outline-none text-left h-12 w-64"
          />
        </div>
        <button onClick={() => calculateDistance()} className="flex justify-center items-center w-full mt-5 py-3 border border-primaryStroke bg-secondaryFill rounded-xl gap-1 hover:bg-quaternaryFill duration-300 transition-colors ease-out z-10">
          <p className="capitalize text-lg font-bold tracking-wide">
            Calculate
          </p>
        </button>
      </div>
    </div>
  );
};

export default Task05;
