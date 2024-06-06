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
      <div className="flex items-center border-b border-grey-200 h-16 w-screen justify-between px-5">
        <div className="flex gap-x-6">
          <FaFacebook size={20} />
          <FaLinkedin size={20} />
          <FaTwitter size={20} />
          <FaInstagram size={20} />
        </div>
        <div className="font-bold">
          FREE SHIPPING - THIS WEEK ORDER OVER 2000/-
        </div>
        <div>USD$ ENGLISH</div>
      </div>

      <div className="flex flex-row   justify-between px-5">
        <div className="h-16 w-screen">
          <RiFlowerFill size={100} />
        </div>
        {/* <div className="flex flex-row border-2 border-solid border-black h-8 w-screen">
          <input type="text" placeholder="Enter any Product Name" />
          <FaSearch />
        </div> */}
        <div className="flex flex-row gap-x-8">
          <IoPerson size={30} />
          <FaRegHeart size={30} />
          <FaShoppingBag size={30} />
        </div>
      </div>

      <div className="container hidden lg:block">
        <div className="flex flex-row justify-between text-xl font-bold pl-48 pr-48 ">
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
