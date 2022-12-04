import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import {CiLogin} from 'react-icons/ci'

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  var menu;
  var mask

  if(showMenu) {
    menu =
    <div>
      <ul className='bg-white fixed top-0 left-0 w-4/5 h-full z-50 flex flex-col gap-4 items-center justify-center text-2xl'>
        <Link to="/my-passwords" className="cursor-pointer">
          My Passwords
        </Link>
        <Link to="/log-in" className="cursor-pointer">
          Log In
        </Link>
      </ul>
    </div>

    mask = 
    <div className='bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full z-50' onClick={() => setShowMenu(false)}>

    </div>
  }

  return (
    <header className="flex flex-row justify-between px-5 py-6 sm:px-40 sm:py-6 items-center border border-b-2 text-lg w-full">
      <Link to="" className="flex flex-row font-bold sm:text-lg text-sm">
        <a href="" className="text-red-500 font-black">
          My
        </a>{" "}
        <p>Pass**** Saver</p>
      </Link>
      <span className="flex flex-row items-center gap-4 sm:gap-12">
        {/*<RxHamburgerMenu className="sm:hidden text-2xl" onClick={() => setShowMenu(!showMenu)} />
        {mask}
        {menu}
        */}
        <Link to="/my-passwords" className="cursor-pointer flex sm:text-lg text-sm">
          My Passwords
        </Link>
        <Link to="/log-in" className="cursor-pointer hidden sm:flex">
          Log In
        </Link>
        <Link to="/log-in" className="cursor-pointer sm:hidden flex">
          <CiLogin />
        </Link>
      </span>
    </header>
  );
}

export default Header;
