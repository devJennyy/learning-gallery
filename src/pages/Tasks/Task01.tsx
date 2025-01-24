import { LuPlus } from "react-icons/lu";

const Task01 = () => {
  const accordionData = [
    {
      title: "Lorem",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis eveniet ullam ea magnam omnis ratione! Quasi qui dignissimos.",
      classname: "bg-secondaryFill rounded-t-sm",
    },
    {
      title: "Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis eveniet ullam ea magnam omnis ratione! Quasi qui dignissimos.",
      classname: "bg-[#2C3742]",
    },
    {
      title: "Dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis eveniet ullam ea magnam omnis ratione! Quasi qui dignissimos.",
      classname: "bg-[#4A5568]",
    },
    {
      title: "Imuts",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis eveniet ullam ea magnam omnis ratione! Quasi qui dignissimos.",
      classname: "bg-[#2C3E50] rounded-b-sm",
    },
  ];

  return (
    <div
      id="task-one"
      className="w-full flex flex-col justify-center items-center h-screen"
    >
      <div
        className="w-full flex flex-col items-center gap-10 sm:max-w-[540px] sm:mx-auto sm:h-[667px] h-screen p-5 relative overflow-hidden bg-quinaryFill overflow-y-auto"
        style={{
          overflow: "auto",
          scrollbarWidth: "none",
        }}
      >
        <p className="capitalize text-2xl font-semibold z-10">
          Toggle Elements
        </p>
        {/* 1st Option */}
        <div className="text-start">
          <h2>See More/Less Toggle</h2>
          <div className="w-full bg-primaryFill p-4 border border-primaryStroke rounded-sm mt-3">
            <div className="w-full flex flex-col justify-start items-start gap-4 text-start bg-secondaryFill p-5 rounded-sm">
              <p className="font-bold text-2xl">Lorem ipsum dolor</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium officiis culpa libero ipsum amet consectetur
                obcaecati illo animi? Animi ipsam aperiam provident, fugit
                veniam nulla voluptas temporibus aliquam aliquid illo.
              </p>

              <button className="w-[100px] py-[6px] border rounded-sm">
                <p className="text-sm">See More</p>
              </button>
            </div>
          </div>
        </div>

        {/* 2nd Option */}
        <div className="w-full text-start">
          <h2>Accordion Module</h2>
          <div className="w-full p-4 bg-primaryFill mt-3 border border-primaryStroke rounded-sm">
            {accordionData?.map((items, index) => {
              return (
                <div
                  key={index}
                  className={`w-full flex flex-col gap-2 p-4 ${items.classname}`}
                >
                  <div className="w-full flex justify-between items-center">
                    <p className="text-semibold text-3xl">{items.title}</p>
                    <button>
                      <LuPlus size={27} />
                    </button>
                  </div>

                  <p className="text-start">{items.description}</p>
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
