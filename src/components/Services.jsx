import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      id="services"
      className="bg-[linear-gradient(180deg, _#0c0c1d, #111132)] h-[100%] flex flex-col justify-between"
    >
      <motion.div
        className="flex-1 self-end flex items-center gap-[20px]"
        id="textContainer"
      >
        <p className="font-[200px] text-[20px] text-gray-500 text-right">
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr className="w-[500px] border-t-[0.5px] border-solid border-gray-300" />
      </motion.div>
      <motion.div
        className="flex-[2_2_0%] flex flex-col items-center"
        id="titleContainer"
      >
        <div className="flex gap-[50px] items-center" id="title">
          <img
            src="/people.webp"
            alt=""
            className="w-[300px] h-[100px] rounded-[50px] object-cover"
          />
          <h1 className="text-[96px] font-[100px]">
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="flex gap-[50px] items-center" id="title">
          <h1 className="text-[96px] font-[100px]">
            <b>For Your</b> Business.
          </h1>
          <button className="text-black w-[300px] h-[100px] rounded-[50px] bg-[#ffa500] border-none text-[24px] cursor-pointer">
            WHAT I DO?
          </button>
        </div>
      </motion.div>
      <motion.div
        className="flex-[2_2_0%] flex"
        id="listContainer max-w-[1366px] m-auto"
      >
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="p-[50px] border-[0.5px] border-solid border-[#808080] flex flex-col justify-between"
          id="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            ad, odio eum veritatis dicta eius maxime voluptas fugiat, tenetur
            laboriosam quos beatae. Quam veritatis nihil nisi, ipsum quod
            obcaecati suscipit.
          </p>
          <button className="text-black p-[10px] bg-[#ffa500] border-none cursor-pointer">
            Go
          </button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="p-[50px] border-[0.5px] border-solid border-[#808080] flex flex-col justify-between"
          id="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            ad, odio eum veritatis dicta eius maxime voluptas fugiat, tenetur
            laboriosam quos beatae. Quam veritatis nihil nisi, ipsum quod
            obcaecati suscipit.
          </p>
          <button className="text-black p-[10px] bg-[#ffa500] border-none cursor-pointer">
            Go
          </button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="p-[50px] border-[0.5px] border-solid border-[#808080] flex flex-col justify-between"
          id="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            ad, odio eum veritatis dicta eius maxime voluptas fugiat, tenetur
            laboriosam quos beatae. Quam veritatis nihil nisi, ipsum quod
            obcaecati suscipit.
          </p>
          <button className="text-black p-[10px] bg-[#ffa500] border-none cursor-pointer">
            Go
          </button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="p-[50px] border-[0.5px] border-solid border-[#808080] flex flex-col justify-between"
          id="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            ad, odio eum veritatis dicta eius maxime voluptas fugiat, tenetur
            laboriosam quos beatae. Quam veritatis nihil nisi, ipsum quod
            obcaecati suscipit.
          </p>
          <button className="text-black p-[10px] bg-[#ffa500] border-none cursor-pointer">
            Go
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
