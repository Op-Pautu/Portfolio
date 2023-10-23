import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="h-[100px]" id="navbar">
      <Sidebar />
      <div
        id="wrapper"
        className="md:w-[1366px] mx-auto flex items-center justify-end p-[20px] md:p-0 md:justify-between h-[100%]"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-3xl hidden md:block"
        >
          Op Pautu
        </motion.span>
        <div className="flex gap-[20px]">
          <a href="#">
            <FacebookIcon size={22} />
          </a>
          <a href="#">
            <GithubIcon size={22} />
          </a>
          <a href="#">
            <TwitterIcon size={22} />
          </a>
          <a href="#">
            <InstagramIcon size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
