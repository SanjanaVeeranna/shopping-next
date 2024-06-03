"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegHeart,
  FaTwitter,
} from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { RiFlowerFill } from "react-icons/ri";
import Link from "next/link";
import { FaSearch, FaShoppingBag } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div>
      <div className="border-b border-gray-200 hidden sm:block">
        <div className="container py-6 hidden lg:flex mb-4">
          <div className="absolute left-6 header_top_icon_wrapper flex flex-row gap-x-6">
            <FaFacebook size={20} />
            <FaLinkedin size={20} />
            <FaTwitter size={20} />
            <FaInstagram size={20} />
          </div>
          <div className="absolute left-1/3 ml-24 flex flex-row font-bold">
            FREE SHIPPING - THIS WEEK ORDER OVER 2000/-
          </div>
          <div className="absolute right-8 flex flex-row justify-between font-bold">
            <div className="mr-6">USD$</div>
            <div className="ml-4 mr-4">ENGLISH</div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row ml-8 container py-6 lg:flex mb-4">
          <div>
            <RiFlowerFill size={100} />
          </div>
          <div className="w-[900px]">
            <div className="flex flex-row border-2 border-solid border-black p-2 px-4 rounded-lg w-full text-center mt-8 ml-48 justify-between">
              <input type="text" placeholder="Enter any Product Name" />
              <FaSearch />
            </div>
          </div>
          <div className="flex flex-row absolute right-10 m-10 mr-1 gap-x-8">
            <IoPerson size={30} />
            <FaRegHeart size={30} />
            <FaShoppingBag size={30} />
          </div>
        </div>
      </div>
      <div className="container hidden lg:block">
        <div className="flex flex-row justify-between font-bold ml-48 mr-48">
          <Link className="navbar_link relative" href="#">
            HOME
          </Link>
          <Link className="navbar_link relative" href="#">
            CATEGORIES
          </Link>
          <Link className="navbar_link relative" href="#">
            BLOGS
          </Link>
          <Link className="navbar_link relative" href="#">
            MEN WEAR
          </Link>
          <Link className="navbar_link relative" href="#">
            WOMEN WEAR
          </Link>
          <Link className="navbar_link relative" href="#">
            JEWELLERY
          </Link>
          <Link className="navbar_link relative" href="#">
            SHOES
          </Link>
          <Link className="navbar_link relative" href="#">
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
