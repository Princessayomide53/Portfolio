import React from 'react'
import '../App.css'
import { AiOutlineMenu } from "react-icons/ai";

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
      <AiOutlineMenu />
    </div>
  );
}

export default Nav


// import React from "react";
// import Vector from "../Img/Vector 1.png";
// import { AiOutlineMenu } from "react-icons/ai";
// import { useState } from "react";
// import Button from "./Button";
// import Modal from "./Modal";
// import { Link } from "react-router-dom";

// function Nav() {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   const [openModal, setOpenModal] = useState(false);

//   return (
//     <div className="overflow-hidden relative">
//       <div className="lg:space-y-0 lg:flex fixed w-full bg-white">
//         <div className="lg:flex lg:gap-24 xl:gap-32 2xl:gap-32 lg:pl-10 lg:mt-1">
//           <div className="flex justify-between ">
//             <div className="flex lg:pl-0 pl-5  mt-3 lg:-mt-1 2xl:-mt-1 xl:-mt-1 ">
//               <img src={Vector} alt="" className="w-10 h-10 lg:mt-3 -mt-1" />
//               <h1 className="font-bold lg:text-4xl text-3xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#DC3E88] to-[#843FE8] lg:mt-2 xl:mt-2 2xl:mt-2">
//                 Metabnb
//               </h1>
//             </div>

//             <div
//               className="pt-4  lg:hidden xl:hidden 2xl:hidden p-2 absolute top-2 right-5 z-10"
//               onClick={handleNav}
//             >
//               {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineMenu size={20} />}
//             </div>
//           </div>

//           <div className="hidden lg:block xl:block 2xl:block">
//             <ul className=" lg:space-y-0 lg:space-x-16 xl:space-x-28 2xl:space-x-28 text-[#434343] font-normal text-xl leading-6 pt-3 lg:flex">
//               <Link to="/">
//                 <li className="hover:underline decoration-inherit">Home</li>
//               </Link>

//               <Link to="/place">
//                 <li className="hover:underline decoration-inherit">
//                   Place to stay
//                 </li>
//               </Link>
//               <li className="hover:underline decoration-inherit">NFTs</li>
//               <li className="hover:underline decoration-inherit">Comunity</li>
//               <Button />
//             </ul>
//           </div>

//           <div
//             className={
//               !nav
//                 ? " flex-col top-0 -mt-5 space-y-10 top-[100%] h-screen w-[100%] lg:hidden xl:hidden 2xl:hidden  fixed bg-white ease-in-out duration-500 p-5"
//                 : " left-0 "
//             }
//           >
//             <div className="flex pt-1">
//             </div>
//             <ul className="text-[#434343] md:text-center md:-mt-2 font-normal  p-5 text-xl  leading-6">
//               <Link to="/">
//                 <li
//                   onClick={() => setNav(false)}
//                   className="hover:underline decoration-inherit pb-8"
//                 >
//                   Home
//                 </li>
//               </Link>

//               <li
//                 onClick={() => setNav(!nav)}
//                 className="hover:underline decoration-inherit pb-8"
//               >
//                 <a href={`/place`}>Place to stay</a>
//               </li>
              
//               <li className="hover:underline decoration-inherit pb-8">NFTs</li>
//               <li className="hover:underline decoration-inherit pb-8">
//                 Comunity
//               </li>
//               <li className="pb-3">
//                 <button
//                   onClick={() => setOpenModal(true)}
//                   className="px-5 py-2 hover:underline decoration-white rounded-lg bg-[#A02279] text-base leading-5 font-normal text-white"
//                 >
//                   Connect wallet
//                 </button>
//                 <Modal open={openModal} onClose={() => setOpenModal(false)} />
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Nav;
