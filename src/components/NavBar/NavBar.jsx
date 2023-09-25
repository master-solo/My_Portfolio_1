import React, { useState } from "react";
import "./NavBar.css";
import { Link as LinkScroll } from "react-scroll";

const tabs = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "About me",
    path: "about",
  },
  {
    name: "skills",
    path: "skills",
  },
  {
    name: "Projects",
    path: "project",
  },
  {
    name: "Contact me",
    path: "contact",
  },
];

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  window.onscroll = () => {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <section>
      <div className=" main bg ">
        <div className=" flex items-center justify-between ">
          <div className=" lg:w-2/5 w-1/2 ">
            <div className=" tx ">
              <h1 className=" font lg:text-2xl text-base font-black py-6 px-4 uppercase ">
                zaw win naung
              </h1>
            </div>
          </div>
          <div className=" lg:block hidden ">
            <div className=" flex cursor-pointer ">
              {tabs.map((tab) => {
                return (
                  <LinkScroll
                    to={tab.path}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    key={Math.random}
                  >
                    <div>
                      <span className=" py-3 px-4 tx uppercase hover:underline ">
                        {tab.name}
                      </span>
                    </div>
                  </LinkScroll>
                );
              })}
            </div>
          </div>
          <div className=" lg:hidden mr-5 " onClick={() => setActive(!active)}>
            <div className={active ? "activeBar" : "bar"}></div>
          </div>
        </div>
      </div>
      <div className={active ? "activeSidebar" : "sidebar"}>
        <div>
          {tabs.map((tab) => {
            return (
              <LinkScroll
                to={tab.path}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                key={Math.random}
              >
                <div className=" px-5 py-3 " onClick={() => setActive(!active)}>
                  <span className=" tx uppercase font-bold hover:underline ">
                    {tab.name}
                  </span>
                </div>
              </LinkScroll>
            );
          })}
        </div>
      </div>
      <div className={scroll? 'up' : 'upclose'} onClick={() => topFunction()}>
        <i class="fa-solid fa-angle-up fa-bounce"></i>
      </div>
    </section>
  );
};

export default NavBar;
