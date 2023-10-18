import { motion } from "framer-motion";

const customFontStyle = {
  fontFamily: "Inter",
};

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="h-[calc(100vh-100px)] bg-[linear-gradient(180deg,_#0c0c1d,_#111132)] overflow-hidden relative">
      <div className="max-w-[1366px] h-[100%] m-auto" id="wrapper">
        <motion.div
          className="h-[100%] flex flex-col justify-center gap-10 w-[50%]"
          id="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-[#663399] text-[45px] tracking-[10px]"
            style={customFontStyle}
            variants={textVariants}
          >
            OP PAUTU
          </motion.h2>
          <motion.h1
            className="text-[88px] tracking-normal leading-[112px]"
            variants={textVariants}
          >
            Self-Taught Web Developer
          </motion.h1>
          <motion.div
            className="space-x-4"
            id="buttons"
            variants={textVariants}
          >
            <motion.button
              className="p-[20px] border border-white rounded-[10px] bg-transparent cursor-pointer"
              variants={textVariants}
            >
              See my Latest works
            </motion.button>
            <motion.button
              className="p-[20px] border border-white rounded-[10px] bg-transparent cursor-pointer"
              variants={textVariants}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            className="w-[50px]"
            src="/scroll.png"
            alt="scroll icon"
          />
        </motion.div>
        <motion.div
          className="absolute text-[50vh] bottom-[-120px] whitespace-nowrap text-[#ffffff09] w-[50%] font-bold"
          id="slideTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Writer Content Creator Influencer
        </motion.div>
        <div className="h-[100%] absolute top-0 right-0">
          <img src="/hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
