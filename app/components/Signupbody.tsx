import React, { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";

function Signupbody() {
    const [steps,setSteps] = useState(1);
    const increaseSteps = () => {
        setSteps(prev => prev+=1);
    }

  return (
    <div className="w-full min-h-screen p-2 grid place-items-center text-customText-light dark:text-customText-dark">
      <div className="w-[60%] min-h-[400px] bg-customForeground-light dark:bg-customForeground-dark rounded-md">
        {/* step 1*/}
        <div id="step1">
          <center>
            <img
              src="/signup.svg"
              className="w-[300px] my-2"
              alt="welcome image"
            />
          </center>
          <div className="flex flex-col items-center my-4 justify-center">
          <h1 className="text-xl font-bold text-customMaincolors-primary my-2">A step closer to becoming a readhabiter</h1>
          <p className="text-center w-[60%] text-sm">Every great change begins with a bold decision, and today, you’ve made yours. We’re honored to be part of your journey, and we can’t wait to see where it takes you. Let’s make this moment the start of something remarkable.Build your best reading habit now 🚀</p>
          <button onClick={()=>increaseSteps()} className="flex my-2 w-[180px] h-[40px] bg-customMaincolors-primary rounded-md items-center justify-center mt-8">start (step {steps} of 5) <GrFormNextLink /></button>
          </div>
        </div>
        {/* step 2 */}
      </div>
    </div>
  );
}

export default Signupbody;
