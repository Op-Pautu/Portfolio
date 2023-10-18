import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Parallax = ({ type }) => {
  return (
    <div
      id="parallax"
      className="h-[100%] w-[100%] relative flex items-center justify-center"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132,##0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 className="text-[100px]">
        {type === "services" ? "What I Do?" : "What I've Done?"}
      </motion.h1>
      <motion.div
        className="bg-[url('/mountains.png')] bg-cover bg-bottom w-[100%] h-[100%] absolute"
        id="mountains"
      ></motion.div>
      <motion.div
        className="bg-[url('/planets.png')] bg-cover bg-bottom w-[100%] h-[100%] absolute"
        id="planets"
      ></motion.div>
      <motion.div
        className="bg-[url('/stars.png')] bg-cover bg-bottom w-[100%] h-[100%] absolute"
        id="stars"
      ></motion.div>
    </div>
  );
};

export default Parallax;
