import React from 'react'
import '../App.css';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      class="modal"
      className="flex flex-col -mt-5 justify-center z-10 items-center ml-0 fixed bg-[#2e2b2b] bg-opacity-60 inset-0 w-full h-screen"
    >
      <div className="bg-black lg:w-[70%] md:w-[80%] w-full h-screen  rounded-md">
        <div className="flex justify-end mt-5 pr-5 text-3xl z-10">
          <button className='text-white' onClick={onClose}>X</button>
        </div>
        <div className="flex justify-center Form">
          <div className="bg-black rounded-md w-[70%] flex flex-col justify-center items-center">
            <div className="lg:w-[70%] w-[90%] mt-10">
              <input
                type="text"
                placeholder="Enter Your Name*"
                className=" border-[#80d0c7] focus:outline-[#80d0c7] border-2 w-full h-16 rounded-md bg-black"
              />
            </div>

            <div className="lg:w-[70%] w-[90%] mt-10">
              <input
                type="text"
                placeholder="Enter Your Email*"
                className=" border-[#80d0c7] focus:outline-[#80d0c7] border-2 w-full h-16 rounded-md bg-black"
              />
            </div>

            <div className="lg:w-[70%] w-[90%] mt-10">
              <input
                type="text"
                placeholder="Phone Number*"
                className=" border-[#80d0c7] focus:outline-[#80d0c7] border-2 w-full h-16 rounded-md bg-black"
              />
            </div>

            <div className="lg:w-[70%] w-[90%] mt-10">
              <textarea
                placeholder="Your Message*"
                className=" border-[#80d0c7] focus:outline-[#80d0c7] border-2 w-full h-36 rounded-md  bg-black
          "
              ></textarea>
            </div>

            <div className="mt-10">
              <button className="text-xl bg-[#ff4b1f] rounded-tr-md text-white px-8 py-2 hover:bg-[#80d0c7]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal