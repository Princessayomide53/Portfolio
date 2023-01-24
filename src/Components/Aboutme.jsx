import React from 'react'
import '../App.css'
import Css from './Img/Css.png'
import HTML5 from './Img/HTML5.png'
import Jquery from './Img/Jquery.png'
import Tailwind from "./Img/Tailwind-css.png";
import JS from "./Img/JS Logo.png";
import React1 from "./Img/React1.png";
// import { HashLink } from 'react-router-hash-link'



function Aboutme() {
  return (
    <div
      className="bg-black text-white  Aboutus"
      id="hash-link-technologies"
    >
      <div className="lg:pt-28 pt-52 md:pt-14 flex justify-center">
        <h2 className="border-4 border-[#80d0c7] lg:mb-8 mb-5 px-5 font-semibold hover:text-[#ff4b1f] py-3">
          TECHNOLOGIES
        </h2>
      </div>
      {/* <div className="flex justify-center ">
        <h2 className=" text-2xl font-bold border-4 border-bold py-[15px] px-10 border-black leading-7 tracking-widest mb-10">
          Technologies I Use
        </h2>
      </div> */}

      <div className="lg:flex pl-10 md:pl-20 lg:pl-0 lg:justify-around grid grid-cols-3 md:gap-36 gap-8 p-5 lg:p-0 mt-10">
        <img src={HTML5} alt="" className="w-18 h-12" />
        <img src={Css} alt="" className="w-18 h-12" />
        <img src={Tailwind} alt="" className="w-20 h-12" />
        <img src={JS} alt="" className="w-18 h-14" />
        <img src={Jquery} alt="" className="w-20 h-12" />
        <img src={React1} alt="React" className="w-18 h-12" />
      </div>
    </div>
  );
}

export default Aboutme