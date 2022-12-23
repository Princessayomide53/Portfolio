import React from 'react'
import '../App.css';
import Nav from './Nav';
import Bg from './Img/Bg.png'
import Vector from './Img/Vector.png'
import Vector1 from './Img/Vector1.png'
import Vector2 from './Img/Vector2.png'

function header() {
  return (
    <div className="relative Header">
      <div>
        <Nav />
        <img src={Bg} alt="" className="" />
        <div className="text-black">
          <h3 className="font-bold text-4xl leading-8 absolute top-64 left-[29%]  font-serif">
            Hi, I am
          </h3>
          <div className="ease-in duration-300 transition">
            <h1 className="font--bold text-4xl leading-8 absolute top-80 left-[28.8%] font-serif z-10 ">
              Princess Ayo<span className="text-white">mide Ogunnaike</span>
            </h1>
          </div>
          <p className="text-[#909090] text-lg leading-7 absolute top-[53%] left-[29%] font-semibold">
            Front-end Developer
          </p>
          <div className="absolute top-[70%] left-[29%] grid grid-cols-3 gap-2">
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
      </div>
    </div>
  );
}

export default header