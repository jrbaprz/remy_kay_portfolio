import React from "react";
import Image from "next/image";

const WorkCard = () => {
  return (
    <>
      <div className="w-64 flex flex-col space-y-4">
        <span className="w-full h-[200px] bg-neutral-300 rounded-lg" />
        <h1 className="text-black text-lg font-bold">Title of Project</h1>
        <h2 className="text-black">
          Dummy text goes here Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit, sed Lorem ipsum dolor sit amet, consectetuer
          adipiscing sit amet dolor.
        </h2>
        <button className="flex justify-center items-center py-1 px-3 font-light text-white rounded bg-black mx-auto">
          See Work
        </button>
      </div>
    </>
  );
};

export default WorkCard;
