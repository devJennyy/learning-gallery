
import { useState } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

const Task01 = () => {
  const [show, setShow] = useState(false)

  return (
    <div
      id="task-one"
      className="flex justify-center w-full sm:max-w-[375px] sm:mx-auto sm:mt-10 sm:h-[667px] bg-[#F4F5F3] h-screen p-3"
    >
      <div className="flex flex-col relative w-full">
        <img
          src="/images/sample-image.jfif"
          alt="sample-image"
          className="w-full h-2/3 object-cover rounded-t-[2rem] z-0"
        />

        <div className="flex flex-col justify-between items-center bg-primary w-full rounded-[2rem] absolute bottom-0 z-10 text-black p-7">
          <div className="flex flex-col justify-center items-center gap-4 mt-2 mb-5">
            <p className="text-3xl tracking-wide font-semibold">Jennie Doe</p>
            <div className="px-6 py-1 rounded-full border w-fit">
              <p className="text-sm">Model</p>
            </div>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectet, adipisicing elit. Quas quo,
              consectetur reiciendis magni quod.
            </p>
          </div>

          <div className={show ? "flex flex-col justify-between items-start pb-5 w-full gap-2" : "hidden"}>
            <p className="hover:underline underline-offset-4 cursor-pointer">@jenniedoe.com</p>
            <p>162 Fairview, Wonderland MNL</p>
            <p>Born in December 22, 2002</p>
          </div>
          <button onClick={() => setShow(prev => !prev)} className="flex justify-center items-center gap-1 py-3 border border-black w-full hover:bg-black hover:text-primary active:border-black active:bg-white active:text-black transition-all duration-300 ease-out">
            <p className="text-sm">See {show ? "Less" : "More"}</p>
            <IoChevronForwardOutline size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task01;
