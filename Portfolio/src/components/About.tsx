const About = () => {
  return (
    <div className="about w-full h-screen bg-[#05386B] text-[#edf5e1]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-5xl font-bold inline border-b-4 border-[#5CDB95]">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi Again! Please Have a Look Around & Try To Break Something I
              Dare You XD
            </p>
          </div>
          <div>
            <p>
              {/* Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS! Fast-forward to today, and I’ve had the privilege of
              working at an advertising agency, a start-up, a huge corporation, 
              and a student-led design studio. My main focus these days is
              building accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients. I also recently launched a
              course that covers everything you need to build a web app with the
              Spotify API using Node & React. Here are a few technologies I’ve
              been working with recently: JavaScript (ES6+) TypeScript */}
              Hello ! <br />
              This is wher you will find some content about me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
