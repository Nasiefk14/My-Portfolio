import Typed from "react-typed";

const Landing = () => {
  return (
    <div className="landing w-full h-screen bg-[#05386B]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-l">
        <p className="text-[#379683] text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#5CDB95] strangeFont">
          Nasief Khan
        </h1>
        <Typed
          className="text-4xl sm:text-7xl font-bold text-[#edf5e1]"
          strings={["I am a Software Developer!"]}
          typeSpeed={80}
          showCursor={false}
        />
        <p className="text-[#edf5e1] py-4 max-w-[700px]">
          I am Javascript Developer With A Focus On The Front &
          Backend(Fullstack XD) Tech Stack. If Your Thinking This Website Looks
          Familar Then Maybe Your Right😅 But Come On In & Have A Look Because
          Talk Is Cheap, Let Me Rather Show You The Code ...
        </p>
      </div>
    </div>
  );
};

export default Landing;
