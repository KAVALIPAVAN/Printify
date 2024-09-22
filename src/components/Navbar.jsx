import React from "react";
import logo1 from '../assets/logo1.svg'
import { IoMenuOutline } from "react-icons/io5";
// import Dropdown from "./Dropdown";
import printify from '../assets/imag3/printify.svg';

const Navbar = () => {
  return <div>
    <div className=" w-full z-50 shadow-md flex align-middle justify-center bg-white fixed ">
    <div className=" w-[85%] p-2 flex items-center justify-between">

        <div className=" flex items-center gap-2 mr-2">
            
        <IoMenuOutline className="md:hidden text-[#319e50] text-[40px]" />

         <img src={printify} className="text-[#319e50] w-[25px] sm:hidden pb-2" alt="" />
            
            <img className=" hidden sm:block w-[120px]" src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg" alt="logo" title="Logo" />
            </div>

        <div className=" hidden gap-5 md:flex mr-2">
            <h4>Catolog</h4>
            <h4>How it works</h4>
            <h4>Pricing</h4>
            <h4>Blog</h4>
            <h4>Services</h4>
            <h4>Use-cases</h4>
            <h4>Need Help?</h4>

        </div>
        <div className=" flex gap-4 flex-wrap">
            <button className="border-[#d1d1d1] hover:text-[#319e50] font-medium  border-2 rounded-md px-3 py-1">Log in</button>
            <button className=" bg-[#55cf77] hover:bg-[#37ab58] font-normal text-white rounded-md px-3 py-1">Sign up</button>
        </div>
    </div>
    </div>
  </div>;
};

export default Navbar;
