import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Hero from "../../images/Man_programs_on_laptop_while_sitting_in_an_armchair_Illustration-removebg-preview.png";
import { Link as LinkScroll } from "react-scroll";

const Home = () => {
  return (
    <div id="home" className=" main lg:h-[100vh] h-fit ">
      <div className=" mt-2 bg flex flex-wrap lg:flex-nowrap h-full w-full ">
        <div className=" lg:w-1/2 ">
          <div className=" lg:pl-[30px] pl-[10px] lg:pt-[150px] pt-20px w-full ">
            <div className=" tx lg:text-[2.8rem] text-[1.8rem] font-bold mb-2 lg:mt-0 mt-5 ">
              <h1 className=" mb-2 ">Hello!</h1>
              <h1>I'm <span className=" se-tx ">Zaw Win Naung</span></h1>
            </div>
            <div>
              <h1 className=" tx m-auto font-bold lg:text-[2.8rem] text-[1.8rem] ">
                I'm a{" "}
                <span style={{ fontWeight: "bold" }} className=" pr-tx ">
                  <Typewriter
                    words={[
                      "Web Developer.",
                      "Web Designer.",
                      "React Developer.",
                      "Frontend Developer.",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={60}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
            </div>
            <div className=" mt-4 mb-5 ">
              <h3 className=" tx text-base ">
                Hello and welcome to my portfolio! I'm thrilled to share my
                journey as an aspiring Frontend Web Developer, eager to
                contribute my skills and creativity to the world of web
                development.
              </h3>
            </div>
            <div className=" tx ">
              <LinkScroll
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className=" lg:text-base text-sm py-3 px-4 pr rounded-md mr-3 cursor-pointer hover:bg-blue-700 "
              >
                See About
              </LinkScroll>
              <LinkScroll
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className=" lg:text-base text-sm py-3 px-4 pr rounded-md cursor-pointer hover:bg-blue-700 "
              >
                Contact Now
              </LinkScroll>
            </div>
          </div>
        </div>
        <div className=" lg:w-1/2 lg:pl-10 ">
          <div className=" flex lg:items-center justify-center w-full h-full ">
            <div className=" w-[95%] ">
              <img src={Hero} alt="hero" className=" object-cover " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
