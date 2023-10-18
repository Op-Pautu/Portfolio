const Hero = () => {
  return (
    <div className="h-[calc(100vh-100px)] bg-[linear-gradient(180deg,_#0c0c1d,_#111132)] overflow-hidden relative">
      <div className="h-[100%] absolute top-0 right-0">
        <img src="/hero.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
