import { useState } from "react";


const Task02 = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const calculate = () => {
    const calculateBmi = parseInt(weight) / ((parseInt(height) / 100) * (parseInt(height) / 100));
    setBmi(calculateBmi);

    if(calculateBmi <= 18.5) {
      setCategory("Underweight");
      setImage("/images/underweight.svg")
    } else if(calculateBmi >= 18.5 && calculateBmi <= 24.9) {
      setCategory("Normal");
      setImage("/images/normal.svg")
    } else if(calculateBmi >= 24.9 && calculateBmi <= 29.9) {
      setCategory("Overweight");
      setImage("/images/overweight.svg")
    } else if(calculateBmi >= 30 && calculateBmi <= 34.9) {
      setCategory("Obese");
      setImage("/images/obese.svg")
    } else if(calculateBmi >= 35) {
      setCategory("Extremely Obese");
      setImage("/images/extremly-obese.svg")
    }
  }
  
  return (
    <div
      id="task-two"
      className="flex flex-col gap-4 w-full sm:max-w-[375px] sm:mx-auto h-screen p-4"
    >
      <p className="uppercase text-2xl font-bold py-3">BMI Calculator</p>
      <div className="flex flex-col justify-center items-center gap-1 w-full py-5 rounded-sm bg-primaryFill border border-primaryStroke">
        <p className="text-sm">
          Your BMI is : 
          <span className="text-green-300 font-bold tracking-wide ml-1">{bmi.toFixed(2)}</span>
        </p>
        <p className="text-sm">
          You are
          <span className="uppercase text-green-300 font-bold tracking-wide ml-1">{category}</span>
        </p>
        {bmi ? <div className="h-fit sm:mt-2">
          <img
            src={image}
            alt="Bmi Category"
            className="w-full h-[250px] object-cover"
          />
        </div> : <div> ... </div>}
      </div>
      <div className="flex gap-4 w-full h-32">
        <div className="flex flex-col justify-center items-center w-full h-full bg-primaryFill border border-primaryStroke rounded-sm">
          <p className="text-[12px] uppercase tracking-wide text-secondary">
            Height
          </p>
          <div className="flex items-end">
            <input
              placeholder="152"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="text-5xl font-bold bg-transparent outline-none text-center w-24"
            />
            <p className="text-sm mb-3">cm</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full h-full bg-primaryFill border border-primaryStroke rounded-sm">
          <p className="text-[12px] uppercase tracking-wide text-secondary">
            Weight
          </p>
          <div className="flex items-end">
            <input
              placeholder="54"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="text-5xl font-bold bg-transparent outline-none text-center w-20"
            />
            <p className="text-sm mb-3">kg</p>
          </div>
        </div>
      </div>
      <button onClick={() => calculate()} className="flex justify-center items-center w-full mt-5 py-3 border border-primaryStroke bg-secondaryFill rounded-full gap-1 hover:bg-quaternaryFill duration-300 transition-colors ease-out">
        <p className="capitalize text-lg font-bold tracking-wide">
          Calculate your BMI
        </p>
      </button>
    </div>
  );
};

export default Task02;
