import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";
import background1 from '../assets/background1.svg'

const Hero = () => {
  return <div className="">
    <div className="flex flex-wrap mt-20 ml-10 px-10 py-6 items-center justify-between ">
      <div className=" grid gap-10">
        <h1 className=" text-6xl font-medium">Create and sell<span className="block">custom products</span></h1>
        <div className="grid gap-2 font-medium">
        <h3 className=" flex gap-2"><span className=" text-green-500 flex items-center"><FaCheck /></span>100% Free to use</h3>
        <h3 className=" flex item-center gap-2" ><span className="flex items-center text-green-500"><FaCheck /></span>900+ High-Quality Products</h3>
        <h3 className=" flex item-center gap-2"><span className=" text-green-500 flex items-center"><FaCheck /></span>Largest global print network</h3>
        </div>
        <div className=" grid gap-3">
        <div className=" flex gap-4 flex-wrap">
            <button className=" bg-[#57cb78] hover:bg-[#5ab173] font-normal text-white rounded-md px-4 py-2">Start for free</button>
            <button className="border-[#d1d1d1] hover:text-[#319e50] font-medium  border-2 rounded-md px-4 py-2 flex items-center gap-2"><FaRegCirclePlay /> How it works?</button>
        </div>
        <h3 className=" text-green-500 font-medium">Trused by over 8M sellers around the world</h3>
        </div>
      </div>
     <div className=" w-[60%] mr-8 ">
      <img src={background1} className=" text-gray-800 " alt="" />
     </div>
    </div>
  </div>;
};

export default Hero;
