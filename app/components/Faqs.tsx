import React from "react";
import { GrFormNextLink } from "react-icons/gr";

function Faqs() {
  return (
    <div className=" w-full min-h-[400px] my-10 p-10 dark:text-customText-dark">
      <div
        className="w-full flex flex-col items-center
       justify-center"
      >
        <h1 className="text-[40px] font-bold">Frequently Asked Questions</h1>
        <p className="w-[40%] leading-8 text-center">
          Quick answers to all your questions about HabitReader. Clear up any
          doubts and get the clarification you need before starting your journey
          with us.
        </p>
        <button className="w-[200px] flex items-center justify-center h-[50px] rounded-[40px] mt-4 hover:text-white bg-customMaincolors-primary">
          <span>get started</span> &nbsp;
          <GrFormNextLink />
        </button>
      </div>
      {/* start of the accordion button */}
      <div className="w-[70%] mx-[15%] my-10 min-h-[400px]">
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Do I have to pay for habitreaders.com
            </div>
            <div className="collapse-content">
              <p>
                well,yes and no. Habit readers comes in two packages, free
                package,though limited to few features and a{" "}
                <span className="font-bold text-customMaincolors-primary">
                  one time payment
                </span>{" "}
                that allow you to access all the features,{" "}
                <span className="font-bold text-customMaincolors-primary">
                  no subscription
                </span>
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Will I find books to read in the website,will i read directly from
              the website
            </div>
            <div className="collapse-content">
              <p>
                No, HabitReader is not a replacement for reading—it's a tool
                designed to enhance your reading experience. We help you track
                the books you’ve read or are currently reading, discover new
                books that match your interests, and retain key lessons from the
                books or articles you summarize. Our goal is to add value to
                your reading journey and make it more enjoyable and efficient.
                Whether you prefer hardcopy or digital books, the choice is
                yours—we’re here to support you, not dictate how you read.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            What is HabitReader, and how does it work?
            </div>
            <div className="collapse-content">
              <p>HabitReader is a reading companion tool that helps you track the books you're reading, discover new ones, and retain key lessons through our spaced learning system. It’s designed to enhance your reading experience by making it more organized, engaging, and productive.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            What is HabitReader, and how does it work?
            </div>
            <div className="collapse-content">
              <p>HabitReader is a reading companion tool that helps you track the books you're reading, discover new ones, and retain key lessons through our spaced learning system. It’s designed to enhance your reading experience by making it more organized, engaging, and productive.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            Can I use HabitReader for both physical and digital books?
            </div>
            <div className="collapse-content">
              <p>Yes, you can! HabitReader supports tracking for both physical (hardcopy) and digital (softcopy) books. It’s designed to work seamlessly with whatever format you prefer.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            How does HabitReader help me remember what I’ve read?
            </div>
            <div className="collapse-content">
              <p>HabitReader uses a spaced repetition system that sends you reminders to review important lessons and summaries from your books. This method helps improve long-term retention and recall of key information.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            Can I connect with other readers on HabitReader?
            </div>
            <div className="collapse-content">
              <p>Absolutely! HabitReader allows you to connect with other users who share similar reading interests. You can exchange book recommendations, discuss your favorite genres, and grow your reading community.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            Is my data safe on HabitReader?
            </div>
            <div className="collapse-content">
              <p>Yes, we take data security seriously. Your reading data is stored securely and is only accessible by you. We do not share or sell your personal information to third parties.Your one time payment is just enough to run and maintain our website.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            Does HabitReader offer book recommendations?
            </div>
            <div className="collapse-content">
              <p>Yes! HabitReader provides personalized book recommendations based on your reading history and interests, helping you discover your next favorite read.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
