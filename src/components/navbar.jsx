import { useState } from 'react';
import React from 'react';
import Logo from '../image/gotlogo.png'
import gitlogo from '../image/rounded.png'
import { Link } from 'react-scroll';

function Header() {
  const [active, setActive] = useState("Home");
  const [bgColor, setBgColor] = useState("bg-[#3674B5]");
  
  return (
    <>
      <header className='container flex justify-between items-center h-20 pt-5 font-mono fixed bg-[#161a30]'>
          <div className='text-white h-full w-[6%] flex items-center'>
            <img src={Logo} alt="" className='w-full h-[70%] ml-10 '/>
          </div>
          <h2 className='text-white w-[30%]'>Ryan Jake Daz</h2>  
          <nav className="mr-20 w-[40%]">
            <ul className="flex justify-around">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={700}
                    className="text-white relative group cursor-pointer"
                    onClick={() => setActive(item)}
                  >
                    {item}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-[#3674B5] transition-all duration-300 group-hover:w-full group-hover:bottom-[-2px] ${
                        active === item ? "w-full bottom-[-2px]" : "w-0"
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className='w-[10%] h-full flex items-center'>
            <button className='border w-[70%] py-1 bg-[#3674B5] rounded-md flex justify-center flex-row hover:bg-transparent hover:border-white '
                    onMouseEnter={() => setBgColor("bg-transparent")}
                    onMouseLeave={() => setBgColor("bg-[#3674B5]")}>
              <a href="https://github.com/rjdaz" target='blank' className='flex'>
                <p className='text-white'>Github</p>
                {bgColor === "bg-[#3674B5]" ? <img src={gitlogo} alt=""  className='w-5 h-5 ml-1 cursor-pointer'/> : null}
              </a>
            </button>
          </div>
      </header>
    </>
  );
}

export default Header;