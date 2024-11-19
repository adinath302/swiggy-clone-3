import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";

const Header = () => {
  const [toggle, settoggle] = useState(false);

  const showsidemenu = () => {
    settoggle(true);
  };

  const hidesidemenu = () => {
    settoggle(false);
  };
  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hidesidemenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[500px] bg-white h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="p-[15px] shadow-xl text-[#686b78]">
        <div className="max-w-[1200px] mx-auto border border-red-500 flex items-center">
          <div className="w-[30px] mr-5 ml-5">
            <img src="images/logo.svg" className="w-full" alt="" />
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-[black]">
              Ratanada{" "}
            </span>
            Jodhpur, Rajasthan, India{" "}
            <RxCaretDown
              fontSize={25}
              className="inline font-bold text-[#fc8019] cursor-pointer"
              onClick={showsidemenu}
            />
          </div>
          <nav>
            <li>Search</li>
            <li>ffers</li>
            <li>Help</li>
            <li></li>
            <li></li>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
