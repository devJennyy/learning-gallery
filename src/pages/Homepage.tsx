import { GoArrowUpRight } from "react-icons/go";
import reactLogo from "../assets/react.svg";
import { LuSearch } from "react-icons/lu";
import { learningGalleryItems } from "@/data/GalleryData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Homepage = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-full xl:px-20 px-5 my-20">
      <div className="w-full h-11 flex justify-between items-center gap-3 mb-16 text-[15px] font-medium">
        <div className="w-full h-full flex justify-center items-center px-3 bg-primaryFill border border-primaryStroke rounded-md">
          <LuSearch size={18} className="opacity-70" />
          <input
            placeholder="Search Task Title or Any Word..."
            className="text-sm bg-transparent outline-none text-left w-full h-full pl-3"
          />
        </div>
        <Select>
          <SelectTrigger className="w-48 flex justify-between items-center gap-2 pl-4 h-full bg-primaryFill border border-primaryStroke rounded-md whitespace-nowrap no-scrollbar">
            <SelectValue placeholder="Sort by oldest" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Sort by oldest</SelectItem>
            <SelectItem value="dark">Sort by newest</SelectItem>
          </SelectContent>
        </Select>
        <button className="w-44 px-5 h-full bg-secondaryFill border border-primaryStroke rounded-md whitespace-nowrap hover:bg-quaternaryFill duration-300 transition-colors ease-out">
          Suggest Topic
        </button>
      </div>

      <div className="w-full flex flex-col justify-start items-start gap-4">
        <h1 className="text-2xl font-semibold">Learning Gallery</h1>
        <div className="flex justify-center items-center sm:gap-2 gap-4">
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tertiaryFill rounded-full p-2 flex items-center justify-center"
          >
            <img
              src={reactLogo}
              className="logo react spin-logo w-5 h-5"
              alt="React logo"
            />
          </a>

          <p className="capitalize text-sm text-secondary sm:w-full w-56 text-start">
            A journey to mastering React frontend development.
          </p>
        </div>

        {learningGalleryItems?.map((items, index) => {
          return (
            <div
              key="index"
              className="flex flex-col items-start w-full bg-primaryFill rounded-md border border-primaryStroke p-4 gap-3 cursor-pointer"
            >
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-semibold capitalize tracking-wide">
                  Task {index + 1}
                </p>
                <a
                  href={items.href}
                  className="flex justify-center items-center w-fit sm:px-3 px-2 py-1 border border-primaryStroke bg-secondaryFill rounded-md gap-1 hover:bg-quaternaryFill duration-300 transition-colors ease-out"
                >
                  <p className="text-[12px]">View</p>
                  <GoArrowUpRight size={15} className="mt-[1px]" />
                </a>
              </div>
              <div className="flex justify-start items-center w-full bg-secondaryFill rounded-md">
                <Accordion type="single" collapsible className="w-full px-4">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-sm font-semibold capitalize tracking-wider">
                      {items.title}
                    </AccordionTrigger>
                    <AccordionContent className="w-full text-start font-light tracking-wide">
                      {items.description}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
