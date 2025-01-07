import { GoArrowUpRight } from "react-icons/go";
import reactLogo from "../assets/react.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Homepage = () => {
  const learningGalleryItems = [
    {
      href: "/task-one",
      title: "Create a toggleable Profile Card.",
      description:
        "Display the picture, first name, last name, age, and work info, followed by a 'See More' button, which, when clicked, reveals the email, address, and date of birth. When 'See More' was clicked, it should now be 'See Less' and hides the respective info again.",
    },
  ];
  return (
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
          This is my journey to mastering frontend development.
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
              <a href="/task-one" className="flex justify-center items-center w-fit px-2 py-1 border border-primaryStroke bg-secondaryFill rounded-md gap-1 hover:bg-quaternaryFill duration-300 transition-colors ease-out">
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
  );
};

export default Homepage;
