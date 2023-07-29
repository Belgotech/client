import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div>
      <nav className="w-full flex md:justify-center justify-between items-center p-4 gradient-bg-welcome ">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <img src={logo} alt="logo" className=" cursor-pointer logo" />
        </div>
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          <li className="mx-4 cursor-pointer">
            <NavLink to="/" className="nav">Home</NavLink>
            <NavLink to="transactions" className="nav">Transactions</NavLink>
            <NavLink to="about" className="nav">About</NavLink>
            <NavLink to="contact" className="nav">Contact</NavLink></li>
          <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
            Login
          </li>
        </ul>
        <div className="flex relative">
          {!toggleMenu && (
            <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
              <li className="mx-4 cursor-pointer my-2 text-lg">
                <NavLink to="/" className="nav-m">Home</NavLink>
                <NavLink to="transactions" className="nav-m">Transactions</NavLink>
                <NavLink to="about" className="nav-m">About</NavLink>
                <NavLink to="contact" className="nav-m">Contact</NavLink>
                </li>
            </ul>
          )}
        </div>
      </nav>


      <main>
        <Outlet />
      </main>
    </div>

  );
};

export default Navbar;
