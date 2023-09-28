import React from "react";
import { Tilt } from "react-next-tilt";
import movie from "../../images/movie.png";
import ecommerce from "../../images/ecommerce.png";
import recipes from "../../images/Recipes.png";
import weather from "../../images/Weather.png";
import todo from "../../images/todo.png";
import p1 from "../../images/p1.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const project = [
  {
    name: "Movies Review",
    description:
      "My favorite project. On this website you can read movie reviews.!",
    img: movie,
    link: "https://master-solo.github.io/movies-doctor/",
  },
  {
    name: "E-commerce",
    description:
      "My 2nd favorite project. On this website you can shopping everything you want.!",
    img: ecommerce,
    link: "https://master-solo.github.io/ecommerce-app/",
  },
  {
    name: "Recipes Finder",
    description:
      "My 3rd favorite project. On this website you can find how to cook many recipes.!",
    img: recipes,
    link: "https://master-solo.github.io/Recipes-finder/",
  },
  {
    name: "Weather app",
    description:
      "My 4th favorite project. On this website you can find every country's current weather.!",
    img: weather,
    link: "https://master-solo.github.io/Weather-app/",
  },
  {
    name: "Todo List",
    description:
      "My 5th favorite project. On This website you can set what will you do.!",
    img: todo,
    link: "https://master-solo.github.io/Todo-List/",
  },
  {
    name: "Tailwind project",
    description: "Mini Project for tailwind css.",
    img: p1,
    link: "https://master-solo.github.io/project-1/",
  },
];

const Projects = () => {
  return (
    <div id="project" className=" main lg:h-[100vh] h-fit ">
      <div className=" bg mt-2 h-full ">
        <div className=" text-white text-xl font-extrabold py-1 text-center ">
          <h1>Projects</h1>
        </div>
        <div className=" block lg:hidden mt-2 ">
          <div className=" w-[90%]">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper w-[65%] h-[340px] mb-5 "
            >
              {project.map((p) => {
                return (
                  <SwiperSlide className=" bg-[#252222] p-3 rounded-xl relative ">
                    <div className=" h-full text-white  p-2 rounded-xl flex flex-col gap-3 ">
                      <img src={p.img} alt={p.name} />
                      <h1 className=" text-center se-tx ">{p.name}</h1>
                      <p className=" border p-3 text-center h-full ">
                        {p.description}
                      </p>
                      <a href={p.link}>
                        <i className="fa-solid fa-arrow-up-right-from-square fa-shake absolute top-3 right-4 "></i>
                      </a>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className=" hidden lg:block ">
          <div className=" grid lg:grid-cols-3 grid-cols-2 grid-rows-3 gap-2 p-2 ">
            {project.map((p) => {
              return (
                <div className=" relative rounded-lg ">
                  <Tilt>
                    <div className=" lg:h-[320px] h-[280px] bg-[#252222] rounded-lg p-2  text-center text-[#fff] ">
                      <img
                        src={p.img}
                        alt={p.name}
                        className=" w-[80%] m-auto mb-3 rounded-lg "
                      />
                      <h1 className=" font-semibold mb-3 se-tx ">{p.name}</h1>
                      <p>{p.description}</p>
                    </div>
                  </Tilt>
                  <a href={p.link}>
                    <i className="fa-solid fa-arrow-up-right-from-square fa-shake absolute lg:top-4 lg:right-4 right-2 top-2 text-[#fff] "></i>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
