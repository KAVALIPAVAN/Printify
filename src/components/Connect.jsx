import React from "react";
import backgroundImage from '../assets/imag3/storesbackground.svg';
import esty from '../assets/imag3/etsy.svg';
import bigcommerce from '../assets/imag3/bigcommerce.svg';
import moreintegration from '../assets/imag3/moreintegration.svg';
import presta from '../assets/imag3/presta.svg';
// import logo from '../assets/logo1.svg'
import printify from '../assets/imag3/printify.svg';
import shopify from '../assets/imag3/shopify.svg';
import spencerb from '../assets/imag3/spencerb.png';
import squarespace from '../assets/imag3/squarespace.svg';
import wix from '../assets/imag3/wix.svg'; 
import woo from '../assets/imag3/woo.svg';
import sales from '../assets/talktosales.svg'


const Connect = () => {
  return <div className=" w-full">
    <div className="w-full items-center flex flex-col mt-10">
        <h1 className="font-medium text-4xl">Connect your store</h1>
        <p className="mt-4 text-gray-500">Printify easily integrates with major e-commerce platforms and marketplaces</p>
        <div className=" relative p-4 ">
        <img src={backgroundImage} alt="" >
        </img>
        <div className="absolute z-10 shadow-lg w-[60px]  left-[31.9994%] top-[10%]  h-[60px] justify-center  bg-white items-center flex  px-1  rounded-xl ">
         <img src={esty} alt="" className="w-[90%] " />
        </div>
        <div className="absolute z-10 shadow-lg w-[60px]  left-[ 48.9995%] top-[10.0051%]  h-[60px] justify-center  bg-white items-center flex  px-1  rounded-xl ">
         <img src={moreintegration} alt="" className="w-[90%] " />
        </div>
        <div className="absolute z-10 shadow-lg w-[60px]  left-[71.4983%] top-[21.5084%;]  h-[60px] justify-center  bg-white items-center flex  px-1  rounded-xl ">
         <img src={esty} alt="" className="w-[90%] " />
        </div>
        <div className="absolute z-10 shadow-lg w-[60px]  left-[90.9997%] top-[45.0229%]  h-[60px] justify-center  bg-white items-center flex  px-1  rounded-xl ">
         <img src={presta} alt="" className="w-[90%] " />
        </div>
        <div className="absolute z-10 shadow-lg w-[60px]  left-[9.9989%] top-[69.0324%]  h-[60px] justify-center  bg-white items-center flex  px-1  rounded-xl ">
         <img src={shopify} alt="" className="w-[90%] " />
        </div>
        <div className="absolute z-10 shadow-lg w-[60px]  left-[37.9983%] top-[70.0355%]  h-[60px] justify-center  bg-white items-center flex  px-1  rounded-xl ">
         <img src={spencerb} alt="" className="w-[90%] " />
        </div>

        <div className="absolute z-10 shadow-lg w-[60px]  left-[60.9993%] top-[80.0405%]  h-[60px] justify-center  bg-white items-center flex  px-1  rounded-xl ">
         <img src={squarespace} alt="" className="w-[90%] " />
        </div>

        <div className="absolute z-10 shadow-lg w-[60px]  left-[89.9992%] top-[84.0402%]  h-[60px] justify-center  bg-white items-center flex  px-1  rounded-xl ">
         <img src={wix} alt="" className="w-[90%] " />
        </div>

        <div className="absolute z-10 shadow-lg w-[60px]  left-[48.9995%] top-[10.0051%]  h-[60px] justify-center  bg-white items-center flex  px-1  rounded-xl ">
         <img src={woo} alt="" className="w-[90%] " />
        </div>
        <div className="absolute z-10 shadow-lg w-[80px]  left-[50%] top-[33%]  h-[80px] justify-center  bg-white items-center flex  px-1  rounded-xl ">
         <img src={printify} alt="" className="w-[50%] " />
        </div>
        <div className="absolute z-10 shadow-lg w-[80px]  left-[20%] top-[44%]  h-[80px] justify-center  bg-white items-center flex  px-1  rounded-xl ">
         <img src={bigcommerce} alt="" className="w-[50%] " />
        </div>
        </div>
        
    </div>
<div className=" flex mt-12 p-4">
    <div className=" relative w-[80%] h-[110px] flex bg-[#e2f7e3] m-auto justify-between rounded-md">
        <h1 className=" text-xs sm:text-xl font-medium text-green-800 pl-5 flex items-center">Are you a large business looking for custom solutions?</h1>
        <button className=" px-4 py-2 absolute bg-white  rounded-md right-10 top-9">Talk to sales</button>
        <img src={sales} className=" float-right h-[110px]  rounded-2xl" alt="" />
    </div>
    </div>
  </div>;
};

export default Connect;
