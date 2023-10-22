/* eslint-disable react/prop-types */
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "NextJs E-Commerce",
    img: "https://images.pexels.com/photos/6214473/pexels-photo-6214473.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus suscipit facilis aliquid aperiam sunt ut fugit, doloribus facere. Atque iusto incidunt debitis laborum odio nam vitae quo! Non, quo omnis?",
  },
  {
    id: 2,
    title: "Threads Clone",
    img: "https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus suscipit facilis aliquid aperiam sunt ut fugit, doloribus facere. Atque iusto incidunt debitis laborum odio nam vitae quo! Non, quo omnis?",
  },
  {
    id: 3,
    title: "Airbnb Clone",
    img: "https://images.pexels.com/photos/5077053/pexels-photo-5077053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus suscipit facilis aliquid aperiam sunt ut fugit, doloribus facere. Atque iusto incidunt debitis laborum odio nam vitae quo! Non, quo omnis?",
  },
  {
    id: 4,
    title: "NextJs Blog",
    img: "https://images.pexels.com/photos/4533596/pexels-photo-4533596.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus suscipit facilis aliquid aperiam sunt ut fugit, doloribus facere. Atque iusto incidunt debitis laborum odio nam vitae quo! Non, quo omnis?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div
        className="flex items-center justify-center w-[100%] h-[100%] overflow-hidden"
        id="container"
      >
        <div
          id="wrapper"
          className="max-w-[1366px] h-[100%] m-auto flex gap-[50px] items-center justify-center"
        >
          <div className="flex-1 h-[50%]" id="imageContainer" ref={ref}>
            <img
              src={item.img}
              alt="image"
              className="h-[100%] w-[100%] object-cover"
            />
          </div>
          <motion.div
            id="textContainer"
            style={{ y }}
            className="flex-1 flex flex-col gap-[30px]"
          >
            <h2 className="text-[72px]">{item.title}</h2>
            <p className="text-gray-400 text-[20px]">{item.desc}</p>
            <button className="bg-[#ffa500] border-none rounded-[10px] p-[10px] w-[200px] text-black cursor-pointer">
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div id="portfolio" ref={ref} className="relative">
      <div
        id="progress"
        className="sticky top-0 left-0 pt-[50px] text-center text-[66px] text-[#ffa500]"
      >
        <h1 className="">Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          id="progressBar"
          className="h-[5px] opacity-50 bg-white mt-2"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
