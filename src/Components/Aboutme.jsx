import React from 'react'
import '../App.css'
import Css from './Img/Css.png'
import HTML5 from './Img/HTML5.png'
import Jquery from './Img/Jquery.png'
import Tailwind from "./Img/Tailwind-css.png";
import JS from "./Img/JS Logo.png";
import React1 from "./Img/React1.png";



function Aboutme() {
  return (
    <div className="bg-black text-white  Aboutus">
      <div className="  flex justify-center">
        <h2 className="border-x-4 border-white mb-8 px-5 font-semibold">
          TECHNOLOGIES
        </h2>
      </div>
      {/* <div className="flex justify-center ">
        <h2 className=" text-2xl font-bold border-4 border-bold py-[15px] px-10 border-black leading-7 tracking-widest mb-10">
          Technologies I Use
        </h2>
      </div> */}

      <div className="flex justify-around mt-10">
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