import React from "react";
import { BiBriefcase, BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsChatSquareText,BsLaptop } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-6 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black h-[60px] backdrop-blur-2xl rounded-full max-w-[420px] mx-auto px-4 flex justify-between items-center text-base text-white/50">
          <Link to="home" activeClass="active" smooth={true} spy={true} offset={-200} className="cursor-pointer w-[45px] h-[45px] flex items-center justify-center">
            <BiHomeAlt />
          </Link>
          <Link to="about" activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[45px] h-[45px] flex items-center justify-center">
            <BiUser />
          </Link>
          <Link to="skills" activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[45px] h-[45px] flex items-center justify-center">
            <BsLaptop />
          </Link>
          <Link to="services" activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[45px] h-[45px] flex items-center justify-center">
            <BsClipboardData />
          </Link>
          <Link to="work" activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[45px] h-[45px] flex items-center justify-center">
            <BiBriefcase />
          </Link>
          <Link to="contact" activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[45px] h-[45px] flex items-center justify-center">
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
