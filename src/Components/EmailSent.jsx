import React from 'react';
import Icon from './Img/Icon.jpg'
  // import { ToastContainer, toast } from "react-toastify";
  // import "react-toastify/dist/ReactToastify.css";

function EmailSent({ open, onClose }) {
  if (!open) return null;

//  const notify = () => toast("Wow so easy!");
  return (
    <div className="flex flex-col mt-0 justify-center z-10 items-center ml-0 fixed bg-[#2e2b2b] bg-opacity-60 inset-0 w-full h-screen">
      <div className=" flex flex-col items-center lg:w-[50%] md:w-[80%] h-[60%] w-[80%] rounded-md bg-black">
        <img
          src={Icon}
          alt="Icon"
          className="lg:w-[40%] w-[70%] h-[55%]  pt-10 rounded-lg "
        />

        <div className="">
          <h2 className="mt-[17px] mb-5 text-2xl">
            Thank you for Contacting me...
          </h2>

          <h2 className="mt-[15px] mb-5 text-base">
            I will get in touch with you shortly.
          </h2>
          <button
            onClick={() => {
              onClose();
            }}
            className="text-white"
          >
            Ok
          </button>
        </div>
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
}

export default EmailSent