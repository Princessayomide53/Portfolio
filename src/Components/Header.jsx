import React, { useEffect } from 'react'
import '../App.css';
import Nav from './Nav';
// import Bg from './Img/Bg.png'
import Vector from './Img/Vector.png'
import Vector1 from './Img/Vector1.png'
import Vector2 from './Img/Vector2.png'
import Woman from './Img/Woman.png'
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {

   useEffect(() => {
     AOS.init();
   }, []);
  
  return (
    <div className="  Header">
      <Nav />
      <div className="bg-[#d7c0ae] h-screen flex justify-between">
        <div className="text-black pt-56 pl-12 space-y-10">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h3 className="font-bold text-4xl leading-8 font-serif">
              Hi, I am
            </h3>

            <h1 className=" text-5xl leading-8 pt-5 font-serif mt-10 z-10 ">
              Princess Ayomide Ogunnaike
            </h1>
          </div>
          <p className="text-gray-600 text-lg leading-7 pt-5 font-semibold">
            Front-end Developer
          </p>
          <div className="grid grid-cols-3 w-32 gap-2 pt-5">
            <a href="https://github.com/Princessayomide53?tab=repositories">
              <img src={Vector} alt="" className="hover:animate-bounce" />
            </a>
            <a href="https://mail.com/Payomide53@gmail.com">
              <img src={Vector1} alt="" className="hover:animate-bounce" />
            </a>

            <a href="https://www.linkedin.com/in/princess-ayomide-ogunnaike-235b25211">
              <img src={Vector2} alt="" className="hover:animate-bounce" />
            </a>
          </div>
        </div>
        <div>
          <img src={Woman} alt="" className="pt-32 w-[80%] " />
        </div>
      </div>
    </div>
  );
}

export default Header