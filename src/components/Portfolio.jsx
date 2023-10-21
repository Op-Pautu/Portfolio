import { motion, useScroll, useSpring } from "framer-motion";
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
  return <section>{item.title}</section>;
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
        className="sticky top-0 left-0 pt-[50px] text-center text-[#ffa500] text-[36px]"
      >
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          id="progressBar"
          className="h-[10px] bg-white"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
