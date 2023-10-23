import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
    y: 100,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  // const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      id="services"
      variants={variants}
      initial="initial"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
      className="bg-[linear-gradient(180deg, _#0c0c1d, #111132)] h-[100%] flex flex-col justify-between"
    >
      <motion.div
        className="flex self-center text-center flex-col flex-1 md:flex-row md:self-end  items-center gap-[20px]"
        id="textContainer"
        variants={variants}
      >
        <p className="font-[200px] text-[20px] text-gray-500 text-right">
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr className="w-[300px] md:w-[500px] border-t-[0.5px] border-solid border-gray-300" />
      </motion.div>
      <motion.div
        className="flex-[2_2_0%] flex flex-col items-center w-full"
        id="titleContainer"
        variants={variants}
      >
        <div
          className="flex items-center flex-col text-center gap-[20px] md:gap-[50px]"
          id="title"
        >
          <img
            src="/people.webp"
            alt=""
            className="w-[200px] h-[50px] md:w-[300px] md:h-[100px] rounded-[50px] object-cover"
          />
          <h1 className="text-[36px] md:text-[96px] font-[100]">
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div
          className="flex items-center flex-col text-center gap-[20px] md:gap-[50px]"
          id="title"
        >
          <h1 className="text-[36px] md:text-[96px]font-[100]">
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button className="text-black md:w-[300px] md:h-[100px] rounded-[50px] bg-[#ffa500] border-none text-[16px] w-[150px] h-[50px] md:text-[24px] cursor-pointer">
            WHAT I DO?
          </button>
        </div>
      </motion.div>
      <motion.div
        className="flex-[2_2_0%] flex md:max-w-[1366px] m-auto flex-col md:flex-row w-full"
        variants={variants}
        id="listContainer"
      >
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="md:p-[50px] border-none md:border-[0.5px] md:border-solid md:border-[#808080] flex flex-col justify-between items-center md:items-start gap-[20px] p-[10px] md:gap-0"
          id="box"
        >
          <h2>Branding</h2>
          <p className="hidden md:block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            ad, odio eum veritatis dicta eius maxime voluptas fugiat, tenetur
            laboriosam quos beatae. Quam veritatis nihil nisi, ipsum quod
            obcaecati suscipit.
          </p>
          <button className="text-[#ffa500] w-[50%] md:w-full md:text-black p-[5px] md:p-[10px] md:bg-[#ffa500] md:border-none cursor-pointer bg-transparent border border-solid border-[#ffa500] rounded-[5px]">
            Go
          </button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="md:p-[50px] border-none md:border-[0.5px] md:border-solid md:border-[#808080] flex flex-col justify-between items-center md:items-start gap-[20px] p-[10px] md:gap-0"
          id="box"
        >
          <h2>Branding</h2>
          <p className="hidden md:block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            ad, odio eum veritatis dicta eius maxime voluptas fugiat, tenetur
            laboriosam quos beatae. Quam veritatis nihil nisi, ipsum quod
            obcaecati suscipit.
          </p>
          <button className="text-[#ffa500] w-[50%] md:w-full md:text-black p-[5px] md:p-[10px] md:bg-[#ffa500] md:border-none cursor-pointer bg-transparent border border-solid border-[#ffa500] rounded-[5px]">
            Go
          </button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="md:p-[50px] border-none md:border-[0.5px] md:border-solid md:border-[#808080] flex flex-col justify-between items-center md:items-start gap-[20px] p-[10px] md:gap-0"
          id="box"
        >
          <h2>Branding</h2>
          <p className="hidden md:block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            ad, odio eum veritatis dicta eius maxime voluptas fugiat, tenetur
            laboriosam quos beatae. Quam veritatis nihil nisi, ipsum quod
            obcaecati suscipit.
          </p>
          <button className="text-[#ffa500] w-[50%] md:w-full md:text-black p-[5px] md:p-[10px] md:bg-[#ffa500] md:border-none cursor-pointer bg-transparent border border-solid border-[#ffa500] rounded-[5px]">
            Go
          </button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="md:p-[50px] border-none md:border-[0.5px] md:border-solid md:border-[#808080] flex flex-col justify-between items-center md:items-start gap-[20px] p-[10px] md:gap-0"
          id="box"
        >
          <h2>Branding</h2>
          <p className="hidden md:block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            ad, odio eum veritatis dicta eius maxime voluptas fugiat, tenetur
            laboriosam quos beatae. Quam veritatis nihil nisi, ipsum quod
            obcaecati suscipit.
          </p>
          <button className="text-[#ffa500] w-[50%] md:w-full md:text-black p-[5px] md:p-[10px] md:bg-[#ffa500] md:border-none cursor-pointer bg-transparent border border-solid border-[#ffa500] rounded-[5px]">
            Go
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
