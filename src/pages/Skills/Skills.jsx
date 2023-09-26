import React from "react";
import "./Skills.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const skills = [
  {
    name: "html",
    value: "90",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E44D26",
  },
  {
    name: "css",
    value: "90",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#1572B6",
  },
  {
    name: "js",
    value: "80",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F0DB4F",
  },
  {
    name: "tailwind",
    value: "85",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    color: "#38B2AC",
  },
  {
    name: "react",
    value: "80",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    name: "git",
    value: "80",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F34F29",
  },
  {
    name: "github",
    value: "75",
    img: "https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png",
    color: "#181616",
  },
  {
    name: "python",
    value: "65",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#4381B3",
  },
  {
    name: "node",
    value: "70",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#83CD29",
  },
];

const Skills = () => {
  return (
    <div id="skills" className=" main lg:h-[100vh] h-fit ">
      <div className=" bg mt-2 h-full p-3 ">
        <div className=" h-full bg-[#252222] flex flex-wrap lg:items-center ">
          <div className=" lg:w-[35%] lg:h-[95%] lg:mt-0 mt-3 w-[90%] h-[50%] sp p-5 ml-5 ">
            <div className=" text-center mb-5 text-xl font-bold text-white ">
              <h1>Technical Skills</h1>
            </div>
            <div className=" h-[90%] flex flex-wrap justify-center items-center gap-6 ">
              {skills.map((s) => {
                return (
                  <div className=" lg:w-1/4 md:2/5 w-1/5 flex flex-col items-center gap-2 ">
                    <CircularProgressbar
                      value={s.value}
                      text={`${s.value}%`}
                      styles={buildStyles({
                        trailColor: "white",
                        pathColor: s.color,
                        textColor: s.color,
                        strokeLinecap: "butt",
                      })}
                    />
                    <img src={s.img} alt={s.name} className=" lg:h-[30px] h-5 " />
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" lg:ml-[15%] mt-5 lg:mt-0 ml-[8%] lg:w-2/5 w-full h-2/3 ">
            <div className=" mb-5 lg:mb-0 ">
              <div className=" mb-10 text-xl font-bold text-white ">
                <h1>Professional Skills</h1>
              </div>
              <div className=" flex lg:gap-[80px] gap-2 ">
                <div className=" ps1 lg:px-10 lg:py-8 px-9 py-4 ">
                  <div className=" mb-[50px] flex flex-col items-center ">
                    <div className=" lg:w-[100px] w-[65px] mb-2">
                      <CircularProgressbar
                        value={90}
                        text="90%"
                        styles={buildStyles({
                          trailColor: "#000",
                          pathColor: "#fff",
                          textColor: "#fff",
                          strokeLinecap: "butt",
                        })}
                      />
                    </div>
                    <div className=" text-white text-sm lg:font-bold ">
                      <h1>Creativity</h1>
                    </div>
                  </div>
                  <div className=" flex flex-col items-center ">
                    <div className=" lg:w-[100px] w-[65px] mb-2 ">
                      <CircularProgressbar
                        value={80}
                        text="80%"
                        styles={buildStyles({
                          trailColor: "#000",
                          pathColor: "#fff",
                          textColor: "#fff",
                          strokeLinecap: "butt",
                        })}
                      />
                    </div>
                    <div className=" text-white text-sm lg:font-bold ">
                      <h1>Team Work</h1>
                    </div>
                  </div>
                </div>
                <div className=" ps lg:px-5 lg:py-8 py-4 px-2 ">
                  <div className=" mb-[50px] flex flex-col items-center ">
                    <div className=" lg:w-[100px] w-[65px] mb-2 ">
                      <CircularProgressbar
                        value={55}
                        text="55%"
                        styles={buildStyles({
                          trailColor: "#000",
                          pathColor: "#fff",
                          textColor: "#fff",
                          strokeLinecap: "butt",
                        })}
                      />
                    </div>
                    <div className=" text-white text-sm lg:font-bold ">
                      <h1>Communication</h1>
                    </div>
                  </div>
                  <div className=" flex flex-col items-center ">
                    <div className=" lg:w-[100px] w-[65px] mb-2 ">
                      <CircularProgressbar
                        value={60}
                        text="60%"
                        styles={buildStyles({
                          trailColor: "#000",
                          pathColor: "#fff",
                          textColor: "#fff",
                          strokeLinecap: "butt",
                        })}
                      />
                    </div>
                    <div className=" text-white text-sm lg:font-bold ">
                      <h1>Project Management</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
