import React from "react";

export default function Skill({ item, animationContainer }) {
  return (
    <div>
      <p className="text-white text-left">{item?.type}</p>
      <div className="w-full bg-[#152033] rounded-full h-2.5">
        <div style={{ width: item?.progress + "%" }} className="bg-emerald-600 h-2.5 rounded-full"></div>
      </div>
      <div className="md:w-1/2 z-auto pt-2 md:mt-0">
        <div className="container" ref={animationContainer}></div>
      </div>
    </div>
  );
}