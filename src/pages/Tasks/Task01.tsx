import { LuPlus } from "react-icons/lu";

const Task01 = () => {
  const accordionData = [
    {
      title: "Lorem",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis eveniet ullam ea magnam omnis ratione!",
      classname: "bg-secondaryFill rounded-t-md",
    },
    {
      title: "Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis eveniet ullam ea magnam omnis ratione!",
      classname: "bg-[#2C3742]",
    },
    {
      title: "Dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis eveniet ullam ea magnam omnis ratione!",
      classname: "bg-[#4A5568]",
    },
    {
      title: "Imuts",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis eveniet ullam ea magnam omnis ratione!",
      classname: "bg-[#2C3E50] rounded-b-md",
    },
  ];

  return (
    <div
      id="task-one"
      className="w-full flex flex-col justify-center items-center h-screen"
    >
      <div
        className="w-full flex flex-col items-center gap-5 sm:max-w-[540px] sm:mx-auto sm:h-[667px] h-screen p-5 relative overflow-hidden overflow-y-auto bg-primaryFill rounded-sm"
        style={{
          overflow: "auto",
          scrollbarWidth: "none",
        }}
      >
        <p className="capitalize text-2xl font-semibold z-10 py-3">
          Toggle Elements
        </p>

        {/* 1st Toggle */}
        <div className="flex flex-col items-start w-full bg-primaryFill rounded-md border border-primaryStroke p-4 gap-3 cursor-pointer">
          <div className="w-full flex items-center gap-2">
            <div className="p-1 bg-red-300 rounded-full"></div>
            <p className="text-sm font-semibold capitalize tracking-wide">
              See More/Less Toggle
            </p>
          </div>
          <div className="w-full flex flex-col p-4 gap-4 text-start bg-secondaryFill rounded-md">
            <p className="font-bold text-xl tracking-wide">Lorem ipsum dolor</p>
            <p className="text-sm tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium officiis culpa libero ipsum amet consectetur obcaecati
              illo animi? Animi ipsam aperiam provident, fugit veniam nulla
              voluptas temporibus aliquam aliquid illo.
            </p>

            <button className="w-[80px] py-1 border rounded-sm">
              <p className="text-[12px]">See More</p>
            </button>
          </div>
        </div>

        {/* 2nd OToggle */}
        <div className="flex flex-col items-start w-full bg-primaryFill rounded-md border border-primaryStroke p-4 gap-3 cursor-pointer">
          <div className="w-full flex items-center gap-2">
            <div className="p-1 bg-red-300 rounded-full"></div>
            <p className="text-sm font-semibold capitalize tracking-wide">
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
                  <div className="w-full flex justify-between items-center">
                    <p className="text-semibold text-2xl">{items.title}</p>
                    <button>
                      <LuPlus size={27} />
                    </button>
                  </div>

                  <p className="text-start text-sm">{items.description}</p>
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
