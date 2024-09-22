import React from "react";
import proimg from '../assets/proimg.jpg';

const Card = () => {
  return <div>
    <div className="">
        <div className="bg-[#203741] relative rounded-2xl flex m-auto w-[70%] h-[80vh] p-8 text-white my-16 ">
            <div className=" grid ">
                <h1 className=" font-bold text-4xl">Make Money, <span className=" block">Risk-Free</span></h1>
                <h2>You pay for fulfillment only when you make a sale</h2>
                <div className=" p-3 gap-4 grid bg-[#17262b] rounded-lg my-6 ">
                    <h2 className=" font-medium">You sell a t-shirt <span className="ml-20">$30</span></h2>
                    <h2 className=" font-medium">You pay for its production <span className="ml-3">$12</span></h2>
                    <hr />
                    <h1 className=" font-semibold text-xl text-green-500">Your profit <span className="ml-24">$18</span></h1>
                </div>
                <button className=" bg-green-500 px-4 w-[150px] rounded-lg">Start selling</button>
                <p className=" mt-6">100% Free to use  · 900+ Products  · Largest print network</p>
            </div >
           <img className=" absolute rounded-lg -right-2 bottom-0 hidden md:block w-[30vw]" src={proimg} alt="" />
        </div>
    </div>
  </div>;
};

export default Card;