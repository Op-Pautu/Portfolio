import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      id="cursor"
      animate={{ x: position.x + 10, y: position.y + 10 }}
      className="hidden md:block w-[50px] h-[50px] rounded-[50%] border border-solid border-white fixed z-[999]"
    ></motion.div>
  );
};

export default Cursor;
