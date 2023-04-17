import me from '../assets/me.jpeg'

const About = () => {
  return (
    <div className="about w-full h-full bg-[#05386B] text-[#edf5e1] pt-28">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="sm:text-5xl text-3xl font-bold inline border-b-4 border-[#5CDB95]">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl">
            <p className='text-base'>
            Hello, I'm Nasief Khan, a skilled Javascript developer with a passion for web development. With over 4 years of experience in software development, I have a solid foundation in C# and have since shifted my focus to Javascript and Typescript. I have honed my skills through building a variety of web applications and projects, and I am constantly seeking to learn and master new, in-demand technologies.
<br /><br />
On this website, you'll find a small preview of my abilities and projects that I have built. My main focus is currently on Fullstack Development, where I aim to strengthen my skills and work with the latest technologies. I am committed to creating high-quality, functional, and visually appealing web applications.
<br /><br />
Thank you for visiting my website, and please feel free to reach out to me with any questions or inquiries
            </p>
          </div>
          <div>
           <img src={me} alt="" className="w-full "/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
