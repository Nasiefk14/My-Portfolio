import Todo from "../assets/Todo.jpeg";
import Chat from "../assets/Chat.jpeg";
import Portfolio from "../assets/Portfolio.jpeg";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Code = () => {
  return (
    <div className="code w-full h-screen text-[#edf5e1] bg-[#05386B] pt-50">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 text-[#edf5e1] border-[#5CDB95]">
            Code
          </p>
          <p className="py-6">
            Have a look at some of some of my work highlights
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div
            style={{ backgroundImage: `url(${Todo})` }}
            className="shadow-lg shadow-[#5CDB95] group container rounded-md 
                flex justify-center text-center items-center mx-auto main-nav sm:h-[250px] h-[200px]"
          >
            <div className="opacity-0 group-hover:opacity-100 overlay">
              <span className="text-3xl sm:text-5xl font-bold text-white tracking-wider ">
                Todo App
              </span>
              <div className="-mt-8 sm:mt-0 text-center ">
              <a href="https://github.com/Nasiefk14/React-Firebase-Todo" target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                            text-[#5CDB95] font-bold sm:text-7xl text-3xl"
                  >
                    <FiGithub />
                  </button>
                </a>
                <a href="https://react-todo-7dce0.web.app" target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                        text-[#5CDB95] font-bold sm:text-7xl text-3xl"
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
                flex justify-center text-center items-center mx-auto main-nav sm:h-[250px] h-[200px]"
          >
            <div className="opacity-0 group-hover:opacity-100 overlay">
              <span className="text-3xl sm:text-5xl font-bold text-white tracking-wider ">
                Chat App
              </span>
              <div className="-mt-8 sm:mt-0 text-center ">
                <a href="https://github.com/Nasiefk14/ReactChatApp" target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                            text-[#5CDB95] font-bold sm:text-7xl text-3xl"
                  >
                    <FiGithub />
                  </button>
                </a>
                <a href="https://chatapp-d3259.web.app/" target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                        text-[#5CDB95] font-bold sm:text-7xl text-3xl"
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
                flex justify-center text-center items-center mx-auto main-nav  sm:h-[350px] h-[200px] col-span-2"
          >
            <div className="opacity-0 group-hover:opacity-100 overlay">
              <span className="text-3xl sm:text-5xl font-bold text-white tracking-wider">
                Portfolio
              </span>
              <div className="-mt-8 sm:mt-0 text-center ">
                <a href="https://github.com/Nasiefk14/My-Portfolio" target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                            text-[#5CDB95] font-bold sm:text-7xl text-3xl"
                  >
                    <FiGithub />
                  </button>
                </a>
                <a href="https://nasief-khan.vercel.app/" target="_blank">
                  <button
                    className="code text-center rounded-lg px-4 py-3 m-2
                        text-[#5CDB95] font-bold sm:text-7xl text-3xl"
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
