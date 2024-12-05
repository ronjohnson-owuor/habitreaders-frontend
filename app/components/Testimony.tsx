import React from "react";

function Testimony() {
  return (
    <div className="w-full p-4 min-h-[400px] my-[100px] dark:text-customText-dark">
      <div className="grid grid-cols-2 place-items-center">
        <div className="flex items-center justify-center">
          <img
            className="w-[400px] border-4 rounded-md border-r-[20px] border-customMaincolors-primary"
            src="/caroline.jpeg"
            alt="caroline's pictures"
          />
        </div>
        <p className="w-[70%] text-sm italic leading-8">
          <blockquote>
            &quot;Reading books used to be a struggle for me. But ever since I
            started using HabitReader, everything changed. Not only am I finally
            finishing books, but I’m also retaining the valuable lessons I’ve
            learned, all thanks to their brilliant spaced learning notification
            system. I’ve even discovered and connected with friends who share my
            love for the same genres. Keeping up with my reading streak has
            become second nature, and my HabitReader medal cabinet is now packed
            with achievements I'm proud of. Another huge plus? There’s no
            monthly subscription! Unlike other apps, I don’t have to worry about
            recurring payments. HabitReader has made reading fun, rewarding, and
            completely hassle-free!&quot;
          </blockquote>
          <span className="font-bold text-customMaincolors-primary">
            ~caroline
          </span>
        </p>
      </div>
    </div>
  );
}

export default Testimony;
