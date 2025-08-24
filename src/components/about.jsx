import React from "react";
import { TbWorldWww, TbDeviceDesktopCode } from "react-icons/tb";
import dp from "../image/dp.png";

function About({ aboutId }) {
  window.addEventListener("scroll", function () {
    const content = document.querySelector("#prov");
    const contentPosition = content.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2.3;

    if (contentPosition < screenPosition) {
      content.style.transition = "2s";
      content.style.right = "0%";
    } else {
      content.style.right = "-80%";
    }
  });
  return (
    <>
      <div className=" relative w-full h-screen bg-[#161a30]" id={aboutId}>
        <div className=" pt-20 h-full">
          <div className="flex items-center pl-5">
            <h1 className="text-3xl text-white font-bold ml-10 mr-2 flex items-center">
              About Me
            </h1>
            <div className="border-1 w-[50%] border-white"></div>
          </div>
          <div className="w-full h-[100%] px-20 py-2 overflow-auto">
            <div className="w-full h-[60%] flex py-5 relative">
              <div className="w-[25%] border-2 rounded-2xl bg-[#0aa19593]">
                <img src={dp} alt="" className="w-full h-full object-cover" />
              </div>
              {/* about me */}
              <div
                className="absolute w-[70%] h-[89%] bg-white rounded-lg right-[-80%]"
                id="prov"
              >
                <div className="w-full h-1/6 flex items-center justify-center">
                  <h1 className="text-3xl font-bold text-[#161a30]">
                    What am I capable of provide?
                  </h1>
                </div>
                <div className="w-full h-5/6 flex ">
                  <div className="w-[50%] h-full flex flex-col items-center">
                    <div className="w-full h-1/6 flex justify-center items-center text-5xl text-[#3674B5]">
                      <TbWorldWww />
                    </div>
                    <h1 className="font-bold text-[14pt] mt-1.5 mb-1.5 text-[#3674B5]">
                      Full Stack Development
                    </h1>
                    <p className=" w-[50%] flex text-center">
                      I can design a front-end for a website utilizing HTML,
                      CSS, TailwindCSS, and the JavaScript framework,
                      particularly React.JS.
                    </p>
                  </div>
                  <div className="w-[50%] h-full flex flex-col items-center">
                    <div className="w-full h-1/6 flex justify-center items-center text-5xl text-[#3674B5]">
                      <TbDeviceDesktopCode />
                    </div>
                    <h1 className="font-bold text-[14pt] mt-1.5 mb-1.5 text-[#3674B5]">
                      Web & Responsive Design
                    </h1>
                    <p className="w-[50%] flex text-center">
                      I can create a responsive design for a website that can be
                      viewed on any device.
                    </p>
                  </div>
                </div>
              </div>
              {/* <p className="text-white text-[18pt] px-20 w-[70%] text-justify">
                Hello! I am a Front-End and Back-End Developer with a passion
                for creating clean, responsive, and user-friendly web
                applications. My aim is to blend functionality and creativity to
                deliver interactive digital experiences. I am looking forward to
                continually learning and evolving according to new technologies
                in the dynamic web development landscape. I love solving
                problems that challenge me to develop and enhance my skills.
                Above all, I aim to be a part of projects that make a positive
                difference to users and businesses alike.
              </p> */}
            </div>
            <div className="w-full h-[30%] flex mt-2 bg-amber-50 py-2 px-20 gap-x-20 gap-y-2 flex-wrap">
              <div className="bg-amber-300 w-[550px] h-[40px]">
                <p>Name: Ryan Jake Daz</p>
              </div>
              <div className="bg-amber-600 w-[550px] h-[40px]"></div>
              <div className="bg-amber-800 w-[550px] h-[40px]"></div>
              <div className="bg-amber-800 w-[550px] h-[40px]"></div>
              <div className="bg-amber-800 w-[550px] h-[40px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
