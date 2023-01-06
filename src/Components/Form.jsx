import React from 'react'
import '../App.css';

function Form() {
  return (
    <div className="bg-black flex justify-center Form">
      <div className="bg-white rounded-md w-[60%] flex flex-col justify-center items-center">
        <div className="w-[50%] mt-10">
          <input
            type="text"
            placeholder="Enter Your Name*"
            className=" border-black border-b-4 border-l-4 w-full h-16"
          />
        </div>

        <div className="w-[50%] mt-10">
          <input
            type="text"
            placeholder="Enter Your Email*"
            className=" border-black border-b-4 border-l-4 w-full h-16"
          />
        </div>

        <div className="w-[50%] mt-10">
          <input
            type="text"
            placeholder="Phone Number*"
            className=" border-black border-b-4 border-l-4 w-full h-16"
          />
        </div>

        <div className="w-[50%] mt-10">
          <textarea
            placeholder="Your Message*"
            className=" border-black border-b-4 border-l-4 w-full h-36
          "
          ></textarea>
          {/* <input type="text" /> */}
        </div>
      </div>
    </div>
  );
}

export default Form