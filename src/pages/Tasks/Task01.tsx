import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const Task01 = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number>(0);
  const accordionData = [
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis eveniet ullam ea magnam omnis ratione!",
      classname: "bg-secondaryFill rounded-t-md",
    },
    {
      title: "Dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis eveniet ullam ea magnam omnis ratione!",
      classname: "bg-[#2C3742]",
    },
    {
      title: "Sit Amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis eveniet ullam ea magnam omnis ratione!",
      classname: "bg-[#4A5568]",
    },
    {
      title: "Consectetur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis eveniet ullam ea magnam omnis ratione!",
      classname: "bg-[#2C3E50] rounded-b-md",
    },
  ];

  const toggleAccordion = (index: number) => {
    if (activeAccordion === index) {
      const nextIndex =
        index === accordionData.length - 1 ? index - 1 : index + 1;
      setActiveAccordion(nextIndex);
    } else {
      setActiveAccordion(index);
    }
  };

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <div
      id="task-one"
      className="w-full flex flex-col justify-start items-center h-screen bg-primaryFill"
    >
      {loading && <LoadingSpinner />}
      <div
        className="w-full flex flex-col items-center gap-5 sm:max-w-[740px] sm:mx-auto h-fit sm:px-20 px-5 lg:py-20 py-7 relative overflow-hidden overflow-y-auto"
        style={{
          overflow: "auto",
          scrollbarWidth: "none",
        }}
      >
        <p className="capitalize sm:text-3xl text-2xl font-semibold z-10 py-3 leading-none mb-1">
          Toggle Components
        </p>

        {/* See More/Less Toggle */}
        <div className="flex flex-col items-start w-full bg-quinaryFill rounded-md border sm:border-quinaryFill border-primaryStroke sm:hover:border-primaryStroke p-4 gap-4 cursor-pointer duration-300 transition-colors ease-out">
          <div className="w-full flex items-center gap-2">
            <div className="p-1 bg-red-300 rounded-full"></div>
            <p className="text-sm font-semibold capitalize tracking-wider">
              See More/Less Toggle
            </p>
          </div>
          <div className="w-full flex flex-col p-4 gap-4 text-start bg-secondaryFill rounded-md">
            <div
              className={`overflow-hidden transition-all duration-300 ease-out`}
              style={{
                paddingBottom: isExpanded ? "10px" : "0",
              }}
            >
              <p className="text-sm tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium officiis culpa libero ipsum amet consectetur
                obcaecati illo{" "}
                {isExpanded ? (
                  <span>
                    animi? Animi ipsam aperiam provident, fugit veniam nulla
                    voluptas temporibus aliquam aliquid illo.
                  </span>
                ) : (
                  <span>animi...</span>
                )}
              </p>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-[80px] py-1 border rounded-sm"
              aria-expanded={isExpanded}
              aria-controls="toggle-text"
            >
              <p className="text-[12px]">
                {isExpanded ? "See Less" : "See More"}
              </p>
            </button>
          </div>
        </div>

        {/* Accordion with toggle behavior */}
        <div className="flex flex-col items-start w-full bg-quinaryFill rounded-md border sm:border-quinaryFill border-primaryStroke sm:hover:border-primaryStroke p-4 gap-4 cursor-pointer duration-300 transition-colors ease-out">
          <div className="w-full flex items-center gap-2">
            <div className="p-1 bg-red-300 rounded-full"></div>
            <p className="text-sm font-semibold capitalize tracking-wider">
              Accordion with toggle behavior
            </p>
          </div>
          <div className="w-full">
            {accordionData?.map((items, index) => {
              return (
                <div
                  key={index}
                  className={`w-full flex flex-col gap-1 p-4 ${items.classname}`}
                >
                  <div className="w-full flex justify-between items-center ">
                    <p className="text-semibold text-2xl">{items.title}</p>
                    <button onClick={() => toggleAccordion(index)}>
                      {activeAccordion === index ? (
                        <LuMinus size={24} />
                      ) : (
                        <LuPlus size={24} />
                      )}
                    </button>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out`}
                    style={{
                      opacity: activeAccordion === index ? 1 : 0,
                      paddingTop: activeAccordion === index ? "10px" : "0",
                      paddingBottom: activeAccordion === index ? "10px" : "0",
                    }}
                  >
                    {activeAccordion === index && (
                      <p className="text-start text-sm">{items.description}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task01;
