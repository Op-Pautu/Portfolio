import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-react";

const Navbar = () => {
  return (
    <div className="h-[100px]">
      <div className="w-[1366px] mx-auto flex items-center justify-between h-[100%]">
        <span className="font-bold text-3xl">Op Pautu</span>
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
