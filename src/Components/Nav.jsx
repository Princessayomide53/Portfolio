import React, { useState } from 'react'
import '../App.css'
// import {  AiOutlineMenu } from "react-icons/ai";
// import { AiOutlineClose  } from "react-icons/ai";
import { motion } from "framer-motion"
// import { HashLink } from "react-router-hash-link";
import {  Squash as Hamburger } from 'hamburger-react';


function Nav() {

  const [nav, setNav] = useState(false);

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden1")
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    }
    else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden1")
    }
    setIsMenuClicked(!isMenuClicked)
  }
  
  const animateFrom = {opacity: 0, x: -40}
  const animateTo = { opacity: 1, x: 0 };
  return (
    <div className="relative Nav">
      <div className="lg:flex justify-between  hidden bg-black lg:fixed w-full">
        <div className="flex justify-between p-3  pl-2">
          <h2 className="text1 text-4xl font-bold ml-6">PA.</h2>
        </div>

        <div className=" text-white text-base z-10 lg:block hidden pt-5">
          <ul className="flex space-x-16 lg:pr-10 font-bold">
            <li className="hover:text-base hover:text-[#ff4b1f]">
              <a smooth href="#hash-link-about">
                About me
              </a>
            </li>
            <li className="hover:text-base hover:text-[#ff4b1f]">
              <a smooth href="#hash-link-technologies">
                Technologies
              </a>
            </li>

            <li className="hover:text-base hover:text-[#ff4b1f]">
              <a smooth href="#hash-link-projects">
                Projects
              </a>
            </li>

            <li className="hover:text-base hover:text-[#ff4b1f]">
              <a smooth href="#hash-link-calls">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='lg:hidden block'>
      <div className="flex justify-between bg-black pt-2 pb-2 fixed w-full z-10">
        <div className=" pl-7 pt-2">
          <h2 className="text1 text-4xl font-bold ">PA.</h2>
        </div>
        <Hamburger
          direction="squash"
          size={30}
          color="white"
          className="burger-menu"
          onToggle={updateMenu}
        />
      </div>
      <div className={menu_class}>
        <div className="text-white">
          <ul className="space-y-8 p-5 -mt-28 absolute top-72 left-20">
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.1 }}
              className="border-b-2 pb-1 border-gray-500 w-56 hover:text-[#ff4b1f]"
            >
              {/* <a smooth href="#hash-link-aboutme"> */}
              About Me
              {/* </a> */}
            </motion.li>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.15 }}
              className="border-b-2 pb-1 border-gray-500 w-56 hover:text-[#ff4b1f]"
            >
              {/* <a smooth href="#hash-link-aboutme"> */}
              Technologies
              {/* </a> */}
            </motion.li>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.2 }}
              className="border-b-2 pb-1 border-gray-500 w-56 hover:text-[#ff4b1f]"
            >
              {/* <a smooth href="#hash-link-projects"> */}
              Projects
              {/* </a> */}
            </motion.li>
          </ul>
        </div>
      </div>
      </div>
      
      {/* <div className="wrap lg:hidden md:block  block">
        <div className="nav1 flex justify-between mt-20">
          <div className=" pl-7 pt-2">
            <h2 className="text1 text-4xl font-bold ">PA.</h2>
          </div>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </div>

        <div className="w-full h-full">
          <div className={menu_class}>
            <div className="text-white">
              
                
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default Nav;
