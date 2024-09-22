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

    <div className="bg-gray-200  md:flex flex-wrap justify-start items-center ">
    <div className=" p-2 ml-[10%]">
       <img src={clothesimg} className=" w-[35%] bg-green-600 rounded-xl" alt="" />
    
    <div className=" bg-white absolute p-2 ml-[49%] w-[30%]">
       <h1>Easily add your design to a wide range of products</h1>
       <p className=" text-left">With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
       <a href="" className="text-green-500">All products <IoIosArrowRoundForward className=" text-green-500"/></a>
       </div>
    </div>
    <img src={clothesbottom} className=" w-[23%] absolute ml-[20vw] mt-[80vh] " alt="" />
</div>
</div>
  </div>;
};

export default Mid;
