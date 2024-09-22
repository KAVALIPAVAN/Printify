import React from "react";
import arrowdown from '../assets/imag2/arrowdown.svg';
import clothesbottom from '../assets/imag2/clothesbottom.svg';
import clothesimg from '../assets/imag2/clothesimg.webp';
import { IoIosArrowRoundForward } from "react-icons/io";
// import arrow from '../assets/imag2/arrowdown.svg';

const Mid = () => {
  return <div>
<div className="">
    <img src={arrowdown} className="h-[12vh] bg-gray-200 w-full text-white" alt="" />

    <div className="bg-gray-200  flex flex-wrap justify-start items-center ">
    <div className=" p-2 ml-[10%] flex  flex-wrap">
       <img src={clothesimg} className=" w-[500px] bg-green-600 rounded-xl" alt="" />
       <div className="flex items-end">
    <div className=" bg-white p-10 h-[60vh]   rounded-xl w-[50vw] grid ">
       <h1 className=" text-4xl font-medium">Easily add your design to a wide range of products</h1>
       <p className=" text-left text-gray-400">With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
       <a href="#" className="text-green-500 flex items-center align-middle text-center gap-3 text-xl">All products <IoIosArrowRoundForward className=" text-green-500 mt-1 text-3xl"/></a>
       </div>
       </div>
    </div>
    {/* <img src={clothesbottom} className=" w-[25%] relative bottom-32 mt-1 hidden md:block left-60 " alt="" /> */}
</div>
</div>
  </div>;
};

export default Mid;
