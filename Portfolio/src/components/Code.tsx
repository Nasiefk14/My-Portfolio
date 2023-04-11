import Todo from "../assets/Todo.jpeg";
import Chat from "../assets/Chat.jpeg";
import Portfolio from "../assets/Portfolio.jpeg";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Code = () => {
  return (
    <div className="work w-full md:h-screen text-[#edf5e1] bg-[#05386B]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 text-[#edf5e1] border-[#5CDB95]">
            Code
          </p>
          <p className="py-6">
            Have a look at some of some of my work highlights
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
          <div
            style={{ backgroundImage: `url(${Todo})` }}
            className="shadow-lg shadow-[#5CDB95] group container rounded-md 
                flex justify-center text-center items-center mx-auto main-nav"
          >
            <div className="opacity-0 group-hover:opacity-100 overlay">
              <span className="text-4xl font-bold text-white tracking-wider ">
                Todo App
              </span>
              <div className=" text-center ">
              <a href="https://react-todo-7dce0.web.app" target="_blank">
                  <button
                    className="text-center rounded-lg px-5 py-3 m-2
                            text-[#5CDB95] font-bold text-7xl"
                  >
                    <FiGithub />
                  </button>
                </a>
                <a href="">
                  <button
                    className="text-center rounded-lg px-5 py-3 m-2
                        text-[#5CDB95] font-bold text-7xl"
                  >
                    <FiExternalLink />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Chat})` }}
            className="shadow-lg shadow-[#5CDB95] group container rounded-md 
                flex justify-center text-center items-center mx-auto main-nav"
          >
            <div className="opacity-0 group-hover:opacity-100 overlay">
              <span className="text-4xl font-bold text-white tracking-wider ">
                Realtime Chat App
              </span>
              <div className=" text-center ">
                <a href="">
                  <button
                    className="text-center rounded-lg px-5 py-3 m-2
                            text-[#5CDB95] font-bold text-7xl"
                  >
                    <FiGithub />
                  </button>
                </a>
                <a href="https://chatapp-d3259.web.app/" target="_blank">
                  <button
                    className="text-center rounded-lg px-5 py-3 m-2
                        text-[#5CDB95] font-bold text-7xl"
                  >
                    <FiExternalLink />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Portfolio})` }}
            className="shadow-lg shadow-[#5CDB95] group container rounded-md 
                flex justify-center text-center items-center mx-auto main-nav col-span-2"
          >
            <div className="opacity-0 group-hover:opacity-100 overlay">
              <span className="text-4xl font-bold text-white tracking-wider ">
                Portfolio
              </span>
              <div className=" text-center ">
                <a href="">
                  <button
                    className="text-center rounded-lg px-5 py-3 m-2
                            text-[#5CDB95] font-bold text-7xl"
                  >
                    <FiGithub />
                  </button>
                </a>
                <a href="https://nasief-khan.vercel.app/" target="_blank">
                  <button
                    className="text-center rounded-lg px-5 py-3 m-2
                        text-[#5CDB95] font-bold text-7xl"
                  >
                    <FiExternalLink />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
