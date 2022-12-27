import React from 'react'
import '../App.css'

function Nav() {
  return (
    <div className=" z-10 Nav"> 
      <div className="flex justify-between p-3 z-10 ">
        <div className="lg:pl-10 z-10">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-tr from-purple-500 to-red-300 text-4xl font-bold z-10 ">PA.</h2>
        </div>

        <div className=" text-white text-base z-10 ">
          <ul className="flex space-x-16 lg:pr-10 font-bold">
            <li className="hover:text-black hover:bg-white hover:text-base hover:rounded-xl px-2 py-[5px]">
              Resume
            </li>
            {/* <li className="hover:text-black hover:bg-white hover:text-base hover:rounded-xl px-2 py-[5px]">
              Skills
            </li> */}

            <li className="hover:text-black hover:bg-white hover:text-base hover:rounded-xl px-2 py-[5px]">
              Projects
            </li>
            <li className="hover:text-black hover:bg-white hover:text-base hover:rounded-xl px-3 py-[5px]">
              Contact Me
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav