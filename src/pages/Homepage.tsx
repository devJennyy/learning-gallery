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
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Homepage = () => {
  const socialLinks = [
    {
      icon: <FaGithub size={17} />,
      label: "GitHub",
      link: "https://github.com/devJennyy",
    },
    {
      icon: <FaLinkedinIn size={18} />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/jennypieloor/",
    },
    {
      icon: <MdEmail size={18} className="mt-[1px]" />,
      label: "Email",
      link: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=devjenny.official@gmail.com",
    },
  ];
  return (
    <div className="w-full max-w-[1440px] mx-auto xl:px-20 px-5 py-10">
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <h1 className="text-2xl font-semibold">Learning Gallery</h1>
        <div className="flex justify-center items-center sm:gap-2 gap-4">
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tertiaryFill rounded-full p-[6px] flex items-center justify-center"
          >
            <img
              src={reactLogo}
              className="logo react spin-logo w-[18px] h-[18px]"
              alt="React logo"
            />
          </a>

          <p className="capitalize text-sm text-secondary sm:w-full w-56 text-start">
            A journey to mastering React frontend development.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col justify-start items-start gap-4 mt-10">
        <div className="w-full h-12 flex justify-between items-center sm:gap-3 gap-2 text-[15px] font-medium mb-5">
          <div className="w-full h-full flex justify-center items-center px-3 bg-primaryFill border border-primaryStroke rounded-md">
            <LuSearch size={18} className="opacity-70" />
            <input
              placeholder="Search task title or keyword..."
              className="text-sm bg-transparent outline-none text-left w-full h-full pl-3"
            />
          </div>
          <Select>
            <SelectTrigger className="hidden w-48 sm:flex justify-between items-center gap-2 pl-4 h-full bg-primaryFill border border-primaryStroke rounded-md whitespace-nowrap no-scrollbar">
              <SelectValue placeholder="Sort by oldest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Sort by oldest</SelectItem>
              <SelectItem value="dark">Sort by newest</SelectItem>
            </SelectContent>
          </Select>

          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=devjenny.official@gmail.com&su=Suggestion%20for%20a%20New%20Topic"
            target="_blank"
            className="hidden w-44 sm:flex justify-center items-center px-5 h-full bg-secondaryFill border border-primaryStroke rounded-md whitespace-nowrap hover:bg-quaternaryFill duration-300 transition-colors ease-out"
          >
            Suggest Topic
          </a>

          <Select>
            <SelectTrigger className="sm:hidden w-12 h-full bg-secondaryFill"></SelectTrigger>
            <SelectContent className="p-1 mr-2 mt-1">
              <SelectItem value="light">Sort by oldest</SelectItem>
              <SelectItem value="dark">Sort by newest</SelectItem>
              <div className="mt-2 border-t border-primaryStroke">
                <SelectItem
                  className="w-44 mt-3 px-5 h-full flex justify-center items-center bg-secondaryFill border border-primaryStroke rounded-md whitespace-nowrap hover:bg-quaternaryFill duration-300 transition-colors ease-out"
                  value="dark"
                >
                  <a
                    href="mailto:devjenny.official@gmail.com?subject=Suggestion%20for%20a%20New%20Topic"
                    target="_blank"
                    className="sm:hidden "
                  >
                    Suggest Topic
                  </a>
                </SelectItem>
              </div>
            </SelectContent>
          </Select>
        </div>
        <h1 className="text-xl font-semibold">Task Lists</h1>
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

      <div className="w-full flex flex-col items-center border-t border-primaryStroke mt-24 text-sm text-secondary">
        <p className="sm:hidden mt-5 w-[12rem]">
          Designed and Developed by Jenny Pieloor
        </p>
        <div className="w-full flex justify-between sm:mt-5 mt-7">
          <a
            href="https://github.com/devJennyy"
            target="_blank"
            className="flex justify-center items-center gap-1 hover:text-primary duration-300 transition-colors ease-out"
          >
            <p>Visit my GitHub</p>
            <GoArrowUpRight size={16} className="mt-[2px]" />
          </a>
          <p className="hidden sm:block">
            Designed and Developed by Jenny Pieloor
          </p>
          <div className="flex justify-center items-center gap-3">
            {socialLinks?.map((link, index) => (
              <a
                href={link.link}
                target="_blank"
                key={index}
                className="hover:text-primary duration-300 transition-colors ease-out"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
