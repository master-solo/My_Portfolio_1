import React from "react";
import "./Contact.css";
import { contact_hero } from "../../constant/Api/api";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v8tu6ud",
        "template_1tskuij",
        form.current,
        "Tha79CTsq0YZA_SAN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className=" main h-[100vh] ">
      <div className=" p-3 bg h-full mt-2 ">
        <div className=" cm h-full grid place-items-center p-3 ">
          <div className=" mc lg:h-[90%] w-full h-full ">
            <div className=" h-full flex flex-wrap ">
              <div className=" lg:w-2/5 lg:h-full h-fit w-full flex justify-center items-center p-3 ">
                <div className=" lg:w-full lg:h-[90%] relative ">
                  <div className=" w-full h-full ">
                    <img
                      src={contact_hero}
                      alt=""
                      className=" w-full h-full rounded-lg object-cover "
                    />
                  </div>
                  <div className=" absolute left-2 bottom-3 ">
                    <div className=" mb-4 px-3 py-4 bg-gray-300 rounded-lg shadow-md ">
                      <i class="fa-solid fa-envelope mr-2"></i>
                      <a class="text-indigo-500" href=".">
                        zawwinnaung414@email.com
                      </a>
                    </div>
                    <div className=" px-3 py-4 bg-gray-300 rounded-lg shadow-md mb-4 ">
                      <i class="fa-solid fa-phone"></i>
                      <p class="leading-normal my-5 inline ml-2 ">
                        09-764157671
                      </p>
                    </div>
                    <div className=" px-3 py-4 bg-gray-300 rounded-lg shadow-md ">
                      <i class="fa-solid fa-location-dot"></i>
                      <p class="leading-normal my-5 inline ml-2 ">
                        65B, 130x131,
                        <br />
                        Pyigyitagon, Mandalay, Myanmar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" lg:w-3/5 w-full lg:h-full h-fit flex justify-center items-center p-3 ">
                <div className=" lg:w-[80%] lg:h-[90%] bg-gray-200 rounded-lg p-5 lg:ml-5 ">
                  <div className="flex flex-col text-center w-full lg:mb-5">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">
                      Contact Me
                    </h1>
                  </div>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="flex flex-wrap -m-2">
                      <div className="p-2 lg:w-1/2 w-full">
                        <div className="relative">
                          <label
                            for="name"
                            className="leading-7 text-sm text-gray-900"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="user_name"
                            className="w-full bg-gray-300 bg-opacity-80 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 lg:w-1/2 w-full">
                        <div className="relative">
                          <label
                            for="email"
                            className="leading-7 text-sm text-gray-900"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="user_email"
                            className="w-full bg-gray-300 bg-opacity-80 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            for="message"
                            className="leading-7 text-sm text-gray-900"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-300 bg-opacity-80 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 lg:h-[100px] h-50px text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                          ></textarea>
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <button
                          type="submit"
                          className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        >
                          Send Message
                        </button>
                      </div>
                      <div className=" flex justify-center items-center w-full gap-4 mt-3 text-3xl text-gray-800 ">
                        <div>
                          <a href="https://www.facebook.com/k.n.925/" >
                            <i class="fa-brands fa-square-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a href="https://github.com/master-solo">
                            <i class="fa-brands fa-square-github"></i>
                          </a>
                        </div>
                        <div>
                          <a href=".">
                            <i class="fa-brands fa-square-x-twitter"></i>
                          </a>
                        </div>
                        <div>
                          <a href=".">
                          <i class="fa-brands fa-square-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
