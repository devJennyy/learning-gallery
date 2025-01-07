import { IoChevronForwardOutline } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail, BiWorld } from "react-icons/bi";

const Task01 = () => {
  return (
    <div id="task-one" className="flex justify-center sm:items-center w-full h-screen sm:mt-0 mt-14">
      <div className="flex justify-end items-center border border-l border-primaryStroke h-[30rem] w-80">
        <div className="flex flex-col justify-between items-center h-[400px] w-10 py-2 mr-[2px]">
          <div className="flex justify-center items-center -rotate-90">
            <p className="flex gap-2 uppercase text-[12px] text-secondary/50 font-bold tracking-wider">
              lorem
              <RiTailwindCssFill className="mt-1" />
            </p>
          </div>

          <div className="flex justify-center -rotate-90">
            <p className="flex gap-2 uppercase text-lg text-secondary/50 font-semibold tracking-wider">
              Company <span className="text-[#70DBE3]">Name</span>
            </p>
          </div>

          <div className="flex justify-center items-center gap-3 -rotate-90 text-secondary/50 w-[70px]">
            <FaGithub size={13} />
            <BiLogoGmail size={14} />
            <BiWorld size={14} />
          </div>
        </div>
        <div className="flex flex-col border-l border-l-primaryStroke  h-full w-[270px]">
          <div className="w-full h-48 bg-secondaryFill">
            <img
              src="/images/sample-image.jfif"
              alt="sample-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-start p-5 gap-3">
            <h1 className="flex flex-col text-4xl">
              LOREM <span className="text-xl text-[#70DBE3]">IPSUM.</span>
            </h1>
            <p>Front-End Developer</p>
            <p className="font-thin text-secondary">
              Lorem Ipsum dolor sit amet consectetur adipisicing elit, hic sequi
              minima aliquid.
            </p>

            <button className="flex justify-center items-center mt-3 w-fit px-3 py-1 border border-primaryStroke bg-secondaryFill rounded-sm gap-1 hover:bg-quaternaryFill duration-300 transition-colors ease-out">
              <p className="text-[12px]">See more</p>
              <IoChevronForwardOutline size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task01;
