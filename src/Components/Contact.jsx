import React, { useState } from 'react';
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import Modal from "./Modal";
// import HashLink from 'react-router-hash-link'




 function Contact() {
     const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-black">
      <div className="text-white hover:text-[#ff4b1f] text-2xl  flex justify-center pt-5 uppercase pb-10">
        Contact
      </div>
      <div
        className="lg:flex space-x-0 space-y-5 lg:space-y-0 lg:pl-12 lg:justify-around pt-5 pb-20 text-center  items-center"
        id="hash-link-calls"
      >
        <button
          onClick={() => setOpenModal(true)}
          className="py-[7px] px-7 lg:px-[30.5px] border-2 border-[#80d0c7]"
        >
          <span className="flex mt-1 gap-3">
            <AiOutlineMail
              className="text-white hover:text-[#ff4b1f]"
              size={30}
            />
            <p className="text-white hover:text-[#ff4b1f] text-lg">
              Collaborate
            </p>
          </span>
        </button>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
        <br />

        <button className="py-[7px] px-[34px] lg:px-[50px]  border-2 border-[#80d0c7]">
          <a
            href="https://github.com/Princessayomide53"
            target="_blank"
            rel="noopener noreferrer"
            className="flex mt-1 gap-3 mr-7 lg:mr-0"
          >
            <AiOutlineGithub
              className="text-white hover:text-[#ff4b1f]"
              size={30}
            />
            <p className="text-white hover:text-[#ff4b1f] text-lg">Github</p>
          </a>
        </button>
        <br />

        <button className="py-[7px] px-[37px] lg:px-11  border-2 border-[#80d0c7]">
          <a
            href="https://www.linkedin.com/in/princess-ayomide-ogunnaike-235b25211"
            target="_blank"
            rel="noopener noreferrer"
            className="flex mt-1 gap-3  mr-2 lg:mr-0"
          >
            <AiOutlineLinkedin
              className="text-white hover:text-[#ff4b1f]"
              size={30}
            />
            <p className="text-white hover:text-[#ff4b1f] text-lg">LinkedIn</p>
          </a>
        </button>
        <br />

        <button className="py-[7px] text-center px-[39px] lg:px-[51.5px] border-2 border-[#80d0c7]">
          <a href="tel: 08076824974" className="flex mt-1 gap-3 mr-5 lg:mr-0">
            <AiOutlinePhone
              className="text-white hover:text-[#ff4b1f]"
              size={30}
            />
            <p className="text-white hover:text-[#ff4b1f] text-lg">Phone</p>
          </a>
        </button>
        <br />
      </div>
    </div>
  );
}
export default Contact;
