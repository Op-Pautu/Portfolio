const customFontStyle = {
  fontFamily: "Inter",
};

const Hero = () => {
  return (
    <div className="h-[calc(100vh-100px)] bg-[linear-gradient(180deg,_#0c0c1d,_#111132)] overflow-hidden relative">
      <div className="max-w-[1366px] h-[100%] m-auto" id="wrapper">
        <div
          className="h-[100%] flex flex-col justify-center gap-10 w-[50%]"
          id="textContainer"
        >
          <h2
            className="text-[#663399] text-[45px] tracking-[10px]"
            style={customFontStyle}
          >
            OP PAUTU
          </h2>
          <h1 className="text-[88px] tracking-normal leading-[112px]">
            Self-Taught Web Developer
          </h1>
          <div className="space-x-4" id="buttons">
            <button className="p-[20px] border border-white rounded-[10px] bg-transparent cursor-pointer">
              See my Latest works
            </button>
            <button className="p-[20px] border border-white rounded-[10px] bg-transparent cursor-pointer">
              Contact Me
            </button>
          </div>
          <img className="w-[50px]" src="/scroll.png" alt="scroll icon" />
        </div>
        <div className="h-[100%] absolute top-0 right-0">
          <img src="/hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
