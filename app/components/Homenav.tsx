import { Link } from "@remix-run/react";
import React from "react";
import { LuMoon } from "react-icons/lu";

function Homenav() {
  return (
    <div className="text-customText-light w-full h-[60px] shadow-sm flex items-center justify-between p-4">
      <div className="flex items-center justify-center gap-2">
        <img className=" scale-x-[-1] " src="/small-logo.png" alt="my logo" />
        <h3 className="font-extrabold">
          habit<span className="text-customMaincolors-primary">readers</span> 
        </h3>
      </div>
      {/* links */}
      <div className="flex items-center justify-end gap-2 text-sm ">
        <Link className="hover:text-customMaincolors-primary" to='/'>about us</Link>
        <Link className="hover:text-customMaincolors-primary" to='/'>contact us</Link>
        <button className="border flex items-center h-[30px] px-2 rounded-2xl hover:text-customMaincolors-primary ml-4 justify-center"><LuMoon />&nbsp;dark</button>
        <button className=" h-[30px] text-white text-[11px]  px-4 rounded-2xl bg-customMaincolors-primary hover:text-customText-light hover:border hover:bg-transparent transition-all duration-300 ml-10 ">get started </button>
      </div>
    </div>
  );
}

export default Homenav;
