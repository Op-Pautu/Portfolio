import { motion } from "framer-motion";
import ContactSvg from "./ContactSvg";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  return (
    <motion.div
      id="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="h-[100%] max-w-[1366px] m-auto flex items-center gap-[50px]"
    >
      <motion.div
        id="textContainer"
        variants={variants}
        className="flex-1 flex flex-col gap-[40px]"
      >
        <motion.h1 variants={variants} className="text-[100px] leading-[88px]">
          Let&apos;s Work Together
        </motion.h1>
        <motion.div id="item" variants={variants}>
          <h2 className="text-[30px] font-[700]">Email</h2>
          <span className="font-[300]">pautuop@gmail.com</span>
        </motion.div>
        <motion.div id="item" variants={variants}>
          <h2 className="text-[30px] font-[700]">Contact</h2>
          <span className="font-[300]">+91 7640877060</span>
        </motion.div>
      </motion.div>
      <div id="formContainer" className="flex-1 relative">
        <ContactSvg />
        <motion.form
          className="flex flex-col gap-[20px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input
            className="p-[20px] bg-transparent border border-solid border-white text-white rounded-[5px]"
            type="text"
            required
            placeholder="Name"
          />
          <input
            className="p-[20px] bg-transparent border border-solid border-white text-white rounded-[5px]"
            type="email"
            required
            placeholder="Email"
          />
          <textarea
            className="p-[20px] bg-transparent border border-solid border-white text-white rounded-[5px]"
            rows="8"
            placeholder="Message"
          />
          <button className="p-[20px] border-none bg-[#ffa500] cursor-pointer text-black font-[500]">
            Send
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
