import React from "react";
import img1 from '../assets/imag2/img1.svg';
import img2 from '../assets/imag2/img2.svg';
import img3 from '../assets/imag2/img3.svg';

const Subpart = () => {
  return <div>
    <div className=" mb-14 justify-center flex flex-wrap gap-5 p-6 px-8 mx-12">
        <div className="w-full sm:w-1/2 lg:w-1/4">
         <img src={img1} className="w-1/3 m-auto" alt="" />
         <h1 className=" font-medium text-2xl">Best Selection</h1>
         <p>With 900+ products and top quality brands, you can choose the best products for your business.</p>
        </div>
        <div className=" w-full sm:w-1/2 lg:w-1/4 ">
         <img src={img3}  className=" w-1/3 m-auto" alt="" />
         <h1 className=" font-medium text-2xl">Robust Scaling</h1>
         <p>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4">
         <img src={img2} className="w-1/3 m-auto" alt="" />
         <h1 className=" font-medium text-2xl">Higher Profits</h1>
         <p>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
        </div>
    </div>
  </div>;
};

export default Subpart;
