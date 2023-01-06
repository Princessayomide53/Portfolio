import React from 'react';
import { useEffect } from 'react';
import '../App.css';
import Nav from './Nav';
// import Bg from './Img/Bg.png'
// import Vector from './Img/Vector.png'
// import Vector1 from './Img/Vector1.png'
// import Vector2 from './Img/Vector2.png'
import Woman from './Img/Woman.png'
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "react-typed";
import { AiOutlineArrowRight } from "react-icons/ai";


function Header() {

   useEffect(() => {
     AOS.init();
   }, []);
  
  return (
    <div className="bg-black h-screen Header">
      <Nav />
      <div className="flex justify-between">
        <div className="text-white pt-36 pl-12 space-y-10">
          <div
          // data-aos="fade-right"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          >
            <h3 className="font-bold text-lg leading-8 font-serif">Hey, I'm</h3>

            <h1 className=" text-5xl font-bold leading-8 font-serif mt-10 pb-8 z-10 text-transparent bg-clip-text bg-gradient-to-br from-[#0093e9] to-[#80d0c7] ">
              Princess Ayomide Ogunnaike
            </h1>
          </div>
          <Typed
            strings={["Software Engineer | Front-end Developer"]}
            className="text-gray-300 text-lg leading-7 pt-10 font-semibold"
            typeSpeed={120}
            backSpeed={120}
            loop
          />

          <p className="text-justify text-base mt-2 leading-9 space-y-3">
            I'm Princess, a Frontend Developer based in Lagos, Nigeria. I have
            substantial <br />
            knowledge of HTML, CSS, JavaScript and React. I am open to learning
            <br /> new technologies, opportunies and interesting projects. I
            love to be challenged
          </p>
          <button className="px-10 text-base flex gap-3 py-1 border-2 border-white text-white hover:bg-gradient-to-br from-[#0093e9] to-[#80d0c7]">
            Say Hi <AiOutlineArrowRight className="pt-[5px] w-5 h-5" />
          </button>

          {/* <p className="text-gray-600 text-lg leading-7 pt-5 font-semibold">
            
          </p> */}
          {/* <div className="grid grid-cols-3 w-32 gap-5 pt-5 ">
            <a href="https://github.com/Princessayomide53?tab=repositories">
              <img
                src={Vector}
                alt=""
                className="hover:animate-bounce fill-white"
              />
            </a>
            <a href="https://mail.com/Payomide53@gmail.com">
              <img
                src={Vector1}
                alt=""
                className="hover:animate-bounce bg-white"
              />
            </a>

            <a href="https://www.linkedin.com/in/princess-ayomide-ogunnaike-235b25211">
              <img
                src={Vector2}
                alt=""
                className="hover:animate-bounce bg-white"
              />
            </a>
          </div> */}
        </div>
        <div>
          <img src={Woman} alt="" className="pt-20 w-[90%] " />
        </div>
      </div>
    </div>
  );
}

export default Header