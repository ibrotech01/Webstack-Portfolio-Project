import React from "react";

const Works = (props) => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto py-4 px-10 flex-col justify-between text-center md:flex-row">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-10">
            <div className="hover:border-2 border-zinc-400 duration-300  w-full bg-zinc-900 rounded-[50px] rounded-tr-none h-60 overflow-hidden "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;