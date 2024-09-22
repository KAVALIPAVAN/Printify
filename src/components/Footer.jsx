import React from 'react'
import logo1 from '../assets/logo1.svg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="mt-24 w-[80%] p-4 relative m-auto">
                <div className=" mb-32 flex items-center justify-between">
                    <img className="w-[130px]" src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg" alt="logo" title="Logo" />
                    <div className=" text-green-500 text-3xl flex gap-3">
                        <FaFacebook />
                        <FaInstagram />
                        <FaLinkedin />
                        <FaYoutube />
                        <FaXTwitter />
                        <FaTiktok />
                        <FaRedditAlien />
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="gap-4">
                        <h2 className='text-xl font-medium'>Integration</h2>
                        <ul className='gap-4 grid mt-4'>
                            <li>Shopify</li>
                            <li>Ety</li>
                            <li>eBay</li>
                            <li>Amazon</li>
                            <li>ikTok Shop</li>
                            <li>PrestaShop</li>
                            <li>BigCommerce</li>
                            <li>Wix</li>
                            <li>WooCommerce</li>
                            <li>Squarespace</li>
                        </ul>

                    </div>
                    <div className="">
                        <h2 className='text-xl font-medium'>Discover</h2>
                        <ul className='gap-4 grid mt-4'>
                            <li>Blog</li>
                            <li>Guides</li>
                            <li>Products</li>
                            <li>Etsy print-on-demand</li>
                            <li>Shopify print-on-demand</li>
                            <li>Woocommerce print-on-demand</li>
                            <li>Wix print-on-demand</li>
                            <li>Squarespace print-on-demand</li>
                            <li>Make Your Own Shirt</li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className='text-xl font-medium'>Start selling</h2>
                        <ul className='gap-4 grid mt-4'>
                            <li>Blog</li>
                            <li>Guides</li>
                            <li>Products</li>
                            <li>Etsy print-on-demand</li>
                            <li>Shopify print-on-demand</li>
                            <li>Woocommerce print-on-demand</li>
                            <li>Wix print-on-demand</li>
                            <li>Squarespace print-on-demand</li>
                            <li>Make Your Own Shirt</li>
                        </ul>
                    </div><div className="">
                        <h2 className='text-xl font-medium'>Printify</h2>
                        <ul className='gap-4 grid mt-4'>
                            <li>Blog</li>
                            <li>Guides</li>
                            <li>Products</li>
                            <li>Etsy print-on-demand</li>
                            <li>Shopify print-on-demand</li>
                            <li>Woocommerce print-on-demand</li>
                            <li>Wix print-on-demand</li>
                            <li>Squarespace print-on-demand</li>
                            <li>Make Your Own Shirt</li>
                        </ul>
                    </div>

                </div>

            </div>
            <div className="bg-gray-200 p-4">
                <div className="  flex flex-col items-center gap-4 m-auto">
                <div className=" flex gap-5 text-gray-600">
                    <a href="">Intellectual Property Policy</a>
                    <a href="">Term of Services </a>
                    <a href="">Privacy Policy</a>  
                    <a href="">Security</a>            
                     </div>
                     <h4>© 2024 Printify, Inc. All rights reserved.</h4>
                     </div>
            </div>
        </div>
    )
}

export default Footer