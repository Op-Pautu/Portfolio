const items = ["Home", "Services", "Portfolio", "Contact", "About"];

const Links = () => {
  return (
    <div className="absolute w-[100%] h-[100%] flex flex-col items-center justify-center gap-5">
      {items.map((item) => (
        <a href={`#${item}`} key={item} className="text-4xl">
          {item}
        </a>
      ))}
    </div>
  );
};

export default Links;
