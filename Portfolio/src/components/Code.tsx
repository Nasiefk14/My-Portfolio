import Todo from "../assets/Todo.jpeg";
import box from "../assets/box.jpg";
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
        <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4">
          <div
            style={{ backgroundImage: `url(${Todo})` }}
            className="shadow-lg shadow-[#5CDB95] group container rounded-md 
                flex justify-center text-center items-center mx-auto blur-bg"
          >
            <div className="opacity-0 group-hover:opacity-100 hover:backdrop-blur-xl">
              <span className="text-3xl font-bold text-[#05386B] tracking-wider texting">
                Todo App
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
            className="shadow-lg shadow-[#5CDB95] container rounded-md 
                flex justify-center text-center items-center mx-auto opacity-5% blur-bg hover:bg-opacity-50"
          >
            <div
              className="containerNow w-full h-full bg-[url('https://cdn.shopify.com/s/files/1/0562/4725/5202/products/STUARCHSTRAPBACKCAP_2_84091b45-9217-4103-b48d-b18bb982f673.jpg?v=1678975096')] "
            >
              {" "}
              TODO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
