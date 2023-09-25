import React from "react";
import "react-circular-progressbar/dist/styles.css";
import me from "../../images/me.png"

function About() {
  return (
    <div id="about" className=" main h-[100vh]  ">
      <div className=" bg mt-2 h-full lg:px-[50px] lg:py-[30px] p-2 ">
        <div className="  flex flex-wrap h-full lg:p-[50px] p-[30px] -z-[2] ">
          <div className=" object-cover lg:w-[40%] relative ">
            <img
              src={me}
              alt="me"
              className=" lg:h-[400px] h-[280px] rounded-2xl transition-all hover:-rotate-12 ml-3 mt-4 shadow-2xl "
            />
          </div>
          <div className=" lg:w-[55%] bg-white lg:p-5 p-2 rounded-tl-lg rounded-br-lg rounded-tr-[100px] rounded-bl-[100px] ">
            <h1 className=" lg:text-xl font-bold py-4 " >About Me</h1>
            <h4 className=" pl-4 font-semibold lg:text-lg text-sm ">
              I'm Zaw Win Naung, a passionate junior frontend developer with a
              knack for crafting engaging and user-friendly web experiences. I
              thrive on turning creative ideas into interactive realities
              through a blend of HTML, CSS, and JavaScript. My journey in the
              world of web development began with a curious mind and a
              determination to bring innovative solutions to the digital
              landscape. I'm constantly learning and honing my skills to stay at
              the forefront of this ever-evolving field. When I'm not coding,
              you can find me exploring new design trends, collaborating with
              fellow developers, and seeking inspiration from the world around
              me. I'm excited to contribute my skills to the tech community and
              create captivating online experiences that leave a lasting
              impression. Let's build the web together!
            </h4>
            <div className=" mt-5 text-right font-semibold ">
              Let's Create Together.... <br/> Zaw Win Naung
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
