const Contact = () => {
  return (
    <div
      id="contact"
      className="h-[100%] max-w-[1366px] m-auto flex items-center gap-[50px]"
    >
      <div id="textContainer" className="flex-1 flex flex-col gap-[40px]">
        <h1 className="text-[100px] leading-[88px]">
          Let&apos;s Work Together
        </h1>
        <div id="item">
          <h2 className="text-[30px] font-[700]">Email</h2>
          <span className="font-[300]">pautuop@gmail.com</span>
        </div>
        <div id="item">
          <h2 className="text-[30px] font-[700]">Contact</h2>
          <span className="font-[300]">+91 7640877060</span>
        </div>
      </div>
      <div id="formContainer" className="flex-1">
        <form className="flex flex-col gap-[20px]">
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
