import React, { useState } from 'react'
import Movies from "./Img/Movies.png"
import Tesla1 from "./Img/Tesla1.png"
import Kabab from "./Img/Kabab restro1.png"
import '../App.css'
import Metabnbb from "./Img/Metabnbb 1.png";
import Repute from './Img/Repute.png'
import { TiAttachmentOutline } from "react-icons/ti";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import Modal from './Modal';
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'


// import HashLink from 'react-router-hash-link'


function Projects() {
  useEffect(() => {
     AOS.init();
  }, []);
  
  const style = { color: "white", width: "40px", height: "30px" }
   const [openModal, setOpenModal] = useState(false);
  
  return (
    <section>
      <div className="bg-black Projects">
        <div
          className="flex flex-col items-center pt-24 gap-14 lg:mb-5"
          id="hash-link-projects"
        >
          <p className="text-white border-4 mb-8 lg:mb-0 px-10 border-[#80d0c7] font-medium text-lg hover:text-[#ff4b1f] py-2">
            Projects
          </p>

          <div className="lg:grid lg:grid-cols-2 gap-14 p-10 sm:grid-cols-1 md:grid-cols-2 space-y-14 -mt-12 lg:space-y-0 md:ml-12 md:mr-12">
            <div>
              <div
                data-aos="zoom-in"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="border-2 border-white "
              >
                <a
                  href="https://themovieshome.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Movies} alt="" className="md:w-full" />
                </a>
              </div>
              <div className="flex justify-between mt-[5px]">
                <h1 className="text-white text-xl">Movies Home</h1>
                <a
                  href="https://themovieshome.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiAttachmentOutline style={style} />
                </a>
              </div>
              <p className="text-white mt-[10px]">
                A platform that contains collections of movies, you can get any
                movies of your choice. <br />
                <span className="text-[#0093e9] mt-[6px]">HTML & CSS</span>
              </p>
            </div>

            <div>
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="border-2 border-white "
              >
                <a
                  href="https://teslalandingpage.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Tesla1} alt="" className="md:w-full" />
                </a>
              </div>
              <div className="flex justify-between">
                <h1 className="text-white text-xl">Tesla</h1>
                <a
                  href="https://teslalandingpage.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiAttachmentOutline style={style} />
                </a>
              </div>

              <p className="text-white mt-[10px]">
                A Tesla landing page, containing all peeks of cars produced by
                Tesla. <br />
                <span className="text-[#0093e9] mt-[6px]">
                  HTML & CSS - TailwindCSS
                </span>
              </p>
            </div>

            <div>
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="border-2 border-white "
              >
                <a
                  href="http://kababrestro.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Kabab} alt="" className="md:w-full" />
                </a>
              </div>
              <div className="flex justify-between">
                <h1 className="text-white text-xl">Kabab Restro</h1>
                <a
                  href="http://kababrestro.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiAttachmentOutline style={style} />
                </a>
              </div>

              <p className="text-white mt-[10px]">
                A Restaurant Website that contains all kinds of Cuisines, both
                Italian Cuisine, Chinese Cuisine and American Cuisine. <br />
                <span className="text-[#0093e9] mt-[6px]">
                  HTML & CSS - TailwindCSS
                </span>
              </p>
            </div>

            <div>
              <div
                data-aos="flip-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="border-2 border-white "
              >
                <a
                  href="metabnb1.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Metabnbb} alt="" className="md:w-full" />
                </a>
              </div>
              <div className="flex justify-between">
                <h1 className="text-white text-xl">Metabnb</h1>
                <a
                  href="metabnb1.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiAttachmentOutline style={style} />
                </a>
              </div>
              <p className="text-white mt-[10px]">
                I built a Luxury and accessible houses in the metaverse, you can
                get a chance to turn your fantasy into illusion. <br />
                <span className="text-[#0093e9] mt-[6px]">
                  React - TailwindCSS
                </span>
              </p>
            </div>

            <div>
              <div
                data-aos="zoom-in-down"
                data-aos-offset="300"
                // data-aos-easing="ease-in-sine"
                className="border-2 border-white "
              >
                <a
                  href="metabnb1.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Repute} alt="" className="md:w-full" />
                </a>
              </div>
              <div className="flex justify-between">
                <h1 className="text-white text-xl">Repute</h1>
                <a
                  href="https://www.repute.legal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiAttachmentOutline style={style} />
                </a>
              </div>
              <p className="text-white mt-[10px]">
                Repute is a reputation management company. Founded by Mark
                Essien, CEO Hotels.ng. This is a project i worked during my
                Intership in Hngi9 <br />
                <span className="text-[#0093e9] mt-[6px]">
                  React - Styled Component - TailwindCSS
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="pb-10 bg-black flex justify-center">
          <hr style={{ width: "90%", color: "white", height: "8px" }} />
        </div>

        <div className="text-white hover:text-[#ff4b1f] text-2xl  flex justify-center pt-5 pb-10">
          Contact
        </div>
        <div
          className="lg:flex space-x-0 space-y-5 lg:space-y-0 lg:pl-12 lg:justify-around pt-5 pb-20 text-center  items-center"
          id="#hash-link-contactme"
        >
          <button
            onClick={() => setOpenModal(true)}
            className="py-[7px] px-7 border-2 border-[#80d0c7]"
          >
            <span className="flex mt-1 gap-3">
              <AiOutlineMail className="text-white" size={30} />
              <p className="text-white hover:text-[#ff4b1f] text-lg">
                Send a Mail
              </p>
            </span>
          </button>
          <Modal open={openModal} onClose={() => setOpenModal(false)} />
          <br />

          <button className="py-[7px] px-12 border-2 border-[#80d0c7]">
            <a
              href="https://github.com/Princessayomide53?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex mt-1 gap-3"
            >
              <AiOutlineGithub className="text-white" size={30} />
              <p className="text-white hover:text-[#ff4b1f] text-lg">Github</p>
            </a>
          </button>
          <br />

          <button className="py-[7px] px-10 border-2 border-[#80d0c7]">
            <a
              href="https://www.linkedin.com/in/princess-ayomide-ogunnaike-235b25211"
              target="_blank"
              rel="noopener noreferrer"
              className="flex mt-1 gap-3"
            >
              <AiOutlineLinkedin className="text-white" size={30} />
              <p className="text-white hover:text-[#ff4b1f] text-lg">
                LinkedIn
              </p>
            </a>
          </button>
          <br />

          <button className="py-[7px] text-center px-12 border-2 border-[#80d0c7]">
            <a href="tel: 08076824974" className="flex mt-1 gap-3">
              <AiOutlinePhone className="text-white" size={30} />
              <p className="text-white hover:text-[#ff4b1f] text-lg">Phone</p>
            </a>
          </button>
          <br />
        </div>
      </div>
    </section>
  );
}

export default Projects