import React from "react";
import star from "../assets/imag4/star.svg";
import nikki from "../assets/imag4/nikki.png";
import aprilshowers from "../assets/imag4/aprilshowers.jpeg";
import quintenbarney from "../assets/imag4/quintenbarney.png";
import robertvoltaire from "../assets/imag4/robertvoltaire.png";
import spencerbrett from "../assets/imag4/spencerbrett.png";

const Trusted = () => {
  return (
    <div>
      <div className="bg-gray-200  mt-14 pb-14">
        <div className="top-20 bottom-20  relative flex text-left p-14 align-middle items-center  gap-5 mb-14">
          <h1 className=" text-6xl tracking-tighter md:w-[40%]">
            Trusted by over 8M sellers around the world{" "}
          </h1>
          <p className=" relative w-[25%] ">
            Whether you are just getting started or run an enterprise-level
            e-commerce business, we do everything we can to ensure a positive
            merchant experience.
          </p>
        </div>

{/*                          0000000000                                                      */}

<div className="p-5 pb-8 overflow-x-auto mx-36 mb-5">
  <div className="flex space-x-6"> {/* Flex container for horizontal alignment */}
    <div className="mt-24 p-5 h-auto bg-white shadow-lg w-[300px] rounded-lg flex-shrink-0">
      <div className="flex gap-4 m-2 mb-4">
        <img src={quintenbarney} className="w-16 h-auto rounded-md" alt="" />
        <div>
          <h1 className=" text-xl font-bold">Quinten Barney</h1>
          <h2 className=" text-green-600">Etsy Merchant</h2>
          <div className="flex">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>
      </div>
      <p className="p-2 text-gray-500 text-left">
        Printify has been an incredible service for us musicians unable to keep large
        amounts of inventory - now we can create designs previously too expensive to
        print without having to have 1,000 shirts in our jam space. Thanks Printify!
      </p>
    </div>

    {/* Repeat for the remaining cards */}
    <div className="mt-24 p-5 h-auto bg-white shadow-lg w-[300px] rounded-lg flex-shrink-0">
      <div className="flex gap-4 m-2 mb-4">
        <img src={nikki} className="rounded-md w-16 h-auto" alt="" />
        <div>
          <h1 className=" text-xl font-bold">Nikki</h1>
          <h2 className=" text-green-600">Store link</h2>
          <div className="flex">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>
      </div>
      <p className="p-2 text-gray-500 text-left">
        Printify has been an incredible service for us musicians unable to keep large
        amounts of inventory - now we can create designs previously too expensive to
        print without having to have 1,000 shirts in our jam space. Thanks Printify!
      </p>
    </div>

    {/* Add more cards as needed */}

    <div className="mt-24 p-5 h-auto bg-white shadow-lg w-[300px] rounded-lg flex-shrink-0">
      <div className="flex gap-4 m-2 mb-4">
        <img src={aprilshowers} className="rounded-md w-16 h-auto" alt="" />
        <div>
          <h1 className=" text-xl font-bold">April Showers</h1>
          <h2 className=" text-green-600">Etsy Merchant</h2>
          <div className="flex">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>
      </div>
      <p className="p-2 text-gray-500 text-left">
        Printify has been an incredible service for us musicians unable to keep large
        amounts of inventory - now we can create designs previously too expensive to
        print without having to have 1,000 shirts in our jam space. Thanks Printify!
      </p>
    </div>

    <div className="mt-24 p-5 h-auto bg-white shadow-lg w-[300px] rounded-lg flex-shrink-0">
      <div className="flex gap-4 m-2 mb-4">
        <img src={robertvoltaire} className="rounded-md w-16 h-auto" alt="" />
        <div>
          <h1 className=" text-xl font-bold">Rober Voltaire</h1>
          <h2 className=" text-green-600">Etsy Merchant</h2>
          <div className="flex">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>
      </div>
      <p className="p-2 text-gray-500 text-left">
        Printify has been an incredible service for us musicians unable to keep large
        amounts of inventory - now we can create designs previously too expensive to
        print without having to have 1,000 shirts in our jam space. Thanks Printify!
      </p>
    </div>

    <div className="mt-24 p-5 h-auto bg-white shadow-lg w-[300px] rounded-lg flex-shrink-0">
      <div className="flex gap-4 m-2 mb-4">
        <img src={spencerbrett} className="rounded-md w-16 h-auto" alt="" />
        <div>
          <h1 className=" text-xl font-bold">Spencer Bratt</h1>
          <h2 className=" text-green-600">Etsy Merchant</h2>
          <div className="flex">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>
      </div>
      <p className="p-2 text-gray-500 text-left">
        Printify has been an incredible service for us musicians unable to keep large
        amounts of inventory - now we can create designs previously too expensive to
        print without having to have 1,000 shirts in our jam space. Thanks Printify!
      </p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Trusted;
