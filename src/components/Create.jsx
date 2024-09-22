import React from "react";
import img1 from '../assets/imag2/customproducts.png';
import img2 from '../assets/imag2/yourproducts.png';
import img3 from '../assets/imag2/fullfillment.png';

const Create = () => {
  return <div>
    <div className=" bg-gray-100 p-4">
        <div className="flex flex-wrap gap-4 justify-center mx-8">
<div className="  p-6 w-full sm:w-1/2 lg:w-1/4  rounded-md ">
    <img src={img1} className="w-1/2 relative m-auto" alt="" />
    <h1 className=" text-green-400 font-medium text-xl">CREATE</h1>
    <h1 className=" font-medium text-xl">custom product</h1>
    <p >Easily add your designs to a wide range of products using our free tools</p>
</div>
<div className=" p-6 w-full sm:w-1/2 lg:w-1/4 rounded-md ">
    <img src={img2} className="w-1/2 relative m-auto" alt="" />
    <h1 className=" text-green-400 font-medium text-xl">SELL</h1>
    <h1 className=" font-medium text-xl">on your terms</h1>
    <p >You choose the products,sales price,and where to sell</p>
</div>
<div className=" p-6 w-full sm:w-1/2 lg:w-1/4 rounded-md ">
    <img src={img3} className="w-1/2 relative m-auto" alt="" />
    <h1 className=" text-green-400 font-medium text-xl">WE HANDLE</h1>
    <h1 className=" font-medium text-xl">fulfillment</h1>
    <p >Once an order is placed, we automatically handle all the printing and delivery logistics</p>
</div>
</div>
    </div>
  </div>;
};

export default Create;
