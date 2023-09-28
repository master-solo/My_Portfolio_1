import React from "react";
import './Loading.css'

const Loading = () => {
  return (
    <div className=" h-[100vh] flex justify-center items-center main bg ">
      <div className="loader">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
      </div>
    </div>
  );
};

export default Loading;
