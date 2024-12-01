import React from "react";
import { GiSpellBook } from "react-icons/gi";
import { IoPeopleOutline } from "react-icons/io5";
import {
  MdOutlineLeaderboard,
  MdOutlineNotificationsActive,
} from "react-icons/md";

function Offer() {
  return (
    <div className="w-full mt-[100px] mb-10">
      <div className="w-full flex flex-col gap-2 items-center justify-center">
        <h1 className="font-bold text-2xl">
          We are the best online{" "}
          <span className="text-customMaincolors-primary">reading club</span>
          ,this is why!{" "}
        </h1>
        <p className="text-sm w-[40%] text-center leading-7">
          you will want to read as many books as you can get your hands on after
          you signup for our reading club here is why👇
        </p>
      </div>
      {/* core features */}
      <div className="my-20 grid grid-cols-4 gap-4 w-[80%] mx-[10%] b">
        <div className="w-full min-h-[250px] rounded-md shadow-md">
          <div className="w-full h-[60px]">
            <div
              className="w-[80px] rounded-md rounded-br-[20px] h-full bg-customForeground-light grid place-content-center"
              id="iconholder"
            >
              <MdOutlineNotificationsActive className="text-xl" />
            </div>
            <div className="p-2 my-4">
              <h1 className="font-extrabold my-2">Timed reminders</h1>
              <p className="text-[11px] text-gray-500">
                using the concept of spaced learning.our AI sends you timed
                reminders of highlights you had taken down while reading a
                book.This allows you not to forget the lessons you had learnt
                from the books read previously and help you cement your
                knowledge.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[250px] rounded-md shadow-md">
          <div className="w-full h-[60px]">
            <div
              className="w-[80px] rounded-md rounded-br-[20px] h-full bg-orange-300 grid place-content-center"
              id="iconholder"
            >
              <IoPeopleOutline className="text-xl" />
            </div>
          </div>
          <div className='p-2 my-4'>
                <h1 className='font-extrabold my-2'>the best  community</h1>  
                <p className='text-[11px] text-gray-500'>Share the highlights you have learnt from books,make friends from people who like the same genre as you,find suggestions of your next book.In short get connected with what people are reading in the book  world and whats happening around the space only from our club.</p>  
                </div>
        </div>
        <div className="w-full min-h-[250px] rounded-md shadow-md">
          <div className="w-full h-[60px]">
            <div
              className="w-[80px] rounded-md rounded-br-[20px] h-full bg-green-300 grid place-content-center"
              id="iconholder"
            >
              <GiSpellBook className="text-xl" />
            </div>
          </div>
          <div className='p-2 my-4'>
                <h1 className='font-extrabold my-2'>perfect your reading</h1>  
                <p className='text-[11px] text-gray-500'>With our tools you can summarize a book you are reading and save it for later,share it with friends or post it on our open social platform and gain xp.You can also keep summary of short articles and just not to forget they will be channeled to the spaced learning reminders helping you not to forget anything you ever learnt in your life</p>  
                </div>
        </div>
        <div className="w-full min-h-[250px] rounded-md shadow-md">
          <div className="w-full h-[60px]">
            <div
              className="w-[80px] rounded-md rounded-br-[20px] h-full bg-slate-300 grid place-content-center"
              id="iconholder"
            >
              <MdOutlineLeaderboard className="text-xl" />
            </div>
          </div>
          <div className='p-2 my-4'>
                <h1 className='font-extrabold my-2'>All gamified</h1>  
                <p className='text-[11px] text-gray-500'>Are you ready to become the best reader in the world.Most liked reader with the best taste of books.start winning badges and medal.compete with the words best readers.Helping you to cultivate your reading habit.Signup and start climbing the leaderboard and add some medals and trophies to your cabinet</p>  
                </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
