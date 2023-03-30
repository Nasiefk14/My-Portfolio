import Typed from "react-typed";

const Landing = () => {
  return (
    <div className="w-full h-screen bg-[#05386B]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-l">
        <p className="text-[#379683] text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#5CDB95] strangeFont">
          Nasief Khan
        </h1>
        <Typed
          className="text-4xl sm:text-7xl font-bold text-[#edf5e1]"
          strings={["I am a Software Developer!"]}
          typeSpeed={80}
          backSpeed={100}
          showCursor={false}
          loop
          loopCount={3}
        />
        <p className="text-[#edf5e1] py-4 max-w-[700px]">
          I am Javascript Developer With A Focus On The Front &
          Backend(Fullstack XD) Tech Stack. If Your Thinking This Website Looks
          Familar Then Maybe Your Right😅 But Come On In & Have A Look Because
          Talk Is Cheap, Let Me Rather Show You The Code ...
        </p>
        <div>
          <button className="text-[#edf5e1] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5CDB95] border-[#5CDB95] hover:text-[#05386b] hover:font-bold">
           &lt;button value="Click Me!" /&gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
