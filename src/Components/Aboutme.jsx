import React from 'react'
import '../App.css'

function Aboutme() {
  return (
    <div className="bg-black text-white  pt-20 Aboutus">
      <div className="flex justify-center ">
        <h2 className=" text-2xl font-bold border-4 border-bold py-[15px] px-10 border-black leading-7 tracking-widest mb-10">
          SKILLS 
        </h2>
      </div>

      <div className="flex justify-center mb-8">
        <p>
          I'm a Software Engineer with Proficiency in frontend web development.
                  <br />I have extensive knowledge of HTML, CSS, Javascript, and React.<br />
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, quas!<br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, debitis?
                  
        </p>
      </div>

      <div className="  flex justify-center">
        <h2 className="border-x-4 border-black px-5 font-semibold">TECHNOLOGIES</h2>
      </div>
    </div>
  );
}

export default Aboutme