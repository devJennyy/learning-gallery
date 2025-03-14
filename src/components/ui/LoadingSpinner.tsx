import PulseLoader from "react-spinners/PulseLoader";

const LoadingSpinner = () => {
  return (
    <div className="fixed flex justify-center items-center top-0 z-20 w-screen h-screen bg-primaryFill backdrop-blur-md">
      <PulseLoader className="z-20 " color="#9198A1" size={20}/>
    </div>
  );
};

export default LoadingSpinner;
