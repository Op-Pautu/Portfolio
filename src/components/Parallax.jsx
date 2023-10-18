import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      id="parallax"
      ref={ref}
      className="h-[100%] w-[100%] relative flex items-center justify-center overflow-hidden"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132,##0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }} className="text-[100px]">
        {type === "services" ? "What I Do?" : "What I've Done?"}
      </motion.h1>
      <motion.div
        className="bg-[url('/mountains.png')] bg-cover bg-bottom w-[100%] h-[100%] absolute z-1"
        id="mountains"
      ></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
        className="bg-cover bg-bottom w-[100%] h-[100%] absolute z-2"
        id="planets"
      ></motion.div>
      <motion.div
        style={{ x: yBg }}
        className="bg-[url('/stars.png')] bg-cover bg-bottom w-[100%] h-[100%] absolute z-1"
        id="stars"
      ></motion.div>
    </div>
  );
};

export default Parallax;
