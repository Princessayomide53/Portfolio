import React from 'react'
import Movies from "./Img/Movies.png"
import Tesla1 from "./Img/Tesla1.png"
import Kabab from "./Img/Kabab restro1.png"
import '../App.css'
import Metabnbb from "./Img/Metabnbb 1.png";

function Projects() {
  return (
    <div className=" bg-black Projects">
      <div className="flex flex-col items-center pt-20 gap-14">
        <p className="text-white border-x-4 border-white mb-8 px-8 font-medium text-lg">
          Projects
        </p>
        <div className="hover:border-4  hover:border-white">
          <a
            href="https://themovieshome.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Movies} alt="" />
          </a>
        </div>

        <div className="borde-4 border-white ">
          <a
            href="https://teslalandingpage.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Tesla1} alt="" />
          </a>
        </div>

        <a
          href="http://kababrestro.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Kabab} alt="" />
        </a>

        <a
          href="metabnb1.netlify.app"
        >
          <img src={Metabnbb} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Projects