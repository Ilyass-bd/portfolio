import React from "react";
import { FaCode } from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="flex gap-x-2 justify-center items-center">
            <FaCode className="text-[#20c5e6] text-2xl" />
            <h1 className="h1 text-gradient text-base">
              Ilyass Badreddine
            </h1>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ilyass4work@example.com&su=Let's%20work%20together!&body=Hi%20Ilyass,"
            className="btn lg:btn-xs text-xs p-2 cursor-pointer"
            target="_blank"
          >
            Work with me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
