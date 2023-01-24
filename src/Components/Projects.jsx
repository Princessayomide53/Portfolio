import React from 'react'
import Movies from "./Img/Movies.png"
import Tesla1 from "./Img/Tesla1.png"
import Kabab from "./Img/Kabab restro1.png"
import '../App.css'
import Metabnbb from "./Img/Metabnbb 1.png";
import Repute from './Img/Repute.png'
import { TiAttachmentOutline } from "react-icons/ti";
 import Vector from './Img/Vector.png'
 import Vector1 from './Img/Vector1.png'
 import Vector2 from './Img/Vector2.png'
// import HashLink from 'react-router-hash-link'


function Projects() {
  const style = {color: "white", width: "40px", height: "30px"}
  return (
    <section>
      <div className="bg-black Projects" id="hash-link-projects">
        <div className="flex flex-col items-center pt-24 gap-14 ">
          <p className="text-white border-4 mb-5 lg:mb-0 px-10 border-[#80d0c7] font-medium text-lg hover:text-[#ff4b1f] py-2">
            Projects
          </p>

          <div className="lg:grid lg:grid-cols-2 gap-14 p-10 sm:grid-cols-1 md:grid-cols-2 space-y-14 -mt-12 lg:space-y-0">
            <div>
              <div className="border-2 border-white ">
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
              <div className="border-2 border-white ">
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
              <div className="border-2 border-white ">
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
              <div className="border-2 border-white ">
                <a href="metabnb1.netlify.app">
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
              <div className="border-2 border-white ">
                <a href="https://www.repute.legal/">
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
      </div>

      <div className="pb-10 bg-black flex justify-center">
        <hr style={{ width: "90%", color: "white", height: "8px" }} />
      </div>
      <div className="grid grid-cols-3 w-32 gap-5 pt-5 ">
        <a href="https://github.com/Princessayomide53?tab=repositories">
          <img
            src={Vector}
            alt=""
            className="hover:animate-bounce fill-white"
          />
        </a>
        <a href="https://mail.com/Payomide53@gmail.com">
          <img src={Vector1} alt="" className="hover:animate-bounce bg-white" />
        </a>

        <a href="https://www.linkedin.com/in/princess-ayomide-ogunnaike-235b25211">
          <img src={Vector2} alt="" className="hover:animate-bounce bg-white" />
        </a>
      </div>
    </section>
  );
}

export default Projects