import React from "react";
import { GrFormNextLink } from "react-icons/gr";

function Onboard() {
  return (
    <div className="w-full my-10 bg-customForeground-light dark:bg-customForeground-dark dark:text-customText-dark min-h-[400px] mb-0 grid grid-cols-2 gap-4 pb-4">
      <div className="grid place-items-center">
        <img src="/reading.svg" alt="a woman reading" />
      </div>
      <div className=" p-4">
        <h1 className="font-bold text-[25px]">
          simple <span className="text-customMaincolors-primary">steps</span> to
          start your habit today!
        </h1>
        <p className="mt-10 font-bold italic">
          <blockquote>"Drop by drop is the water pot filled."</blockquote>{" "}
          <span className="text-customMaincolors-primary text-sm italic">
            -Buddha
          </span>
        </p>
        <div>
          <ul className="my-10 text-sm leading-8 w-[70%]">
            <li className="my-4  -gray-400 rounded-md p-2">
              <h1 className="font-extrabold text-customMaincolors-primary">
                1. create a free account
              </h1>
              <p>
                to become a habit reader start by creating a free account(no
                credit card required)
              </p>
              <button className=" p-2 animate-bounce flex items-center justify-center h-[40px] rounded-[40px] mt-4 hover:text-white bg-customMaincolors-primary">
                <span>create account </span> &nbsp;
                <GrFormNextLink />
              </button>
            </li>
            <li className="my-4  -gray-400 rounded-md p-2">
              <h1 className="font-extrabold text-customMaincolors-primary">
                2. start your Journey
              </h1>
              <p>
                Add a new book to your reading timeline and thats it.start
                growing your reading habit
              </p>
            </li>
            <li className="my-4  -gray-400 rounded-md p-2">
              <h1 className="font-extrabold text-customMaincolors-primary">
                3. Explore
              </h1>
              <p>
                now that you have accounts,find out what others are
                reading.connect with people.Invite friends and build your habits
                together.
              </p>
            </li>
          </ul>
          <button className=" w-[70%] flex items-center justify-center h-[40px] rounded-[40px] mt-4 hover:text-white bg-customMaincolors-primary">
                <span>get started now </span> &nbsp;
                <GrFormNextLink />
              </button>
        </div>
      </div>
    </div>
  );
}

export default Onboard;
