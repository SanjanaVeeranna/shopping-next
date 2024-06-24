"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBoxOpen, FaShoppingBag } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { MdCollections } from "react-icons/md";
import HeaderTop from "@/components/HeaderTop";
type active = "content" | "product" | "collection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

const Home = () => {
  // changed The name from homeMain to Home also changing the folder name name from Home to home
  const [selected, setSelected] = useState<active>("content");
  const images = [
    "https://dhunkifashion.com/wp-content/uploads/2020/05/history-of-indian-ethnic-wear-1.jpg",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz_pkzv7m1QyXcfCRbsYFUCquDtNSjBMaTGx4YVBb-G2XmVOog-U3b9M0D_IG1iuN36Os&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDXteWgHwTBFgQtpC0hFul6S_QD34JDZe_JA_P-Vk1f08Ablz6xOeG5ezfeFFTXFKDwM&usqp=CAU",
  ];
  return (
    <div>
      <HeaderTop />
      <div className="flex flex-row  p-10">
        <div className=" flex justify-center items-center">
          <div className="flex h-96 w-[600px]  ">
            <Swiper
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              onSlideChange={(swiper) => {
                console.log(swiper.activeIndex);
              }}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper !z-[0] mx-5 mb-2 flex items-center justify-center overflow-x-scroll rounded-2xl shadow-[3px_3px_0px_0px_#000000]"
            >
              {images.map((img: string, index: number) => {
                return (
                  <SwiperSlide
                    className="!z-[0] rounded-2xl shadow-[3px_3px_0px_0px_#000000]"
                    key={index}
                  >
                    <Image
                      width={335}
                      height={425}
                      alt="creator-image"
                      src={img}
                      className="flex aspect-[4/4] h-full w-full"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div>
          <div className="mt-10">
            <div className="ml-16 font-bold text-6xl ">
              BEST IN STYLE COLLECTION FOR YOU...
            </div>
            <div className="ml-16 mt-4 font-bold">
              Exclusive Offers Available, Order soon and get Unbeateble Products
              in cheaper Prize
            </div>
            <button className="ml-56 mt-8 bg-black text-white hover:bg-gray-700 font-bold py-2 px-4 rounded">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between pl-16 pr-16 font-bold space-x-8">
          <Link
            className="navbar_link relative hover:bg-gray-100 hover:shadow-md transition duration-300 ease-in-out"
            href="/men-wear"
          >
            <div className="border-4 border-solid border-black rounded-lg p-2">
              <h2 className="text-2xl font-bold mb-4 text-center">
                MEN&apos;S FASHION{" "}
                {/* using &apos; this for single quote (') */}
              </h2>
              <Image
                className="rounded-xl "
                src="/Images/Wears/turbun.webp"
                alt=""
                width={300}
                height={150}
                layout="responsive"
              />
            </div>
          </Link>
          <Link
            className="navbar_link relative hover:bg-gray-100 hover:shadow-md transition duration-300 ease-in-out"
            href="/men-wear"
          >
            <div className="border-4 border-solid border-black rounded-lg p-2">
              <h2 className="text-2xl font-bold mb-4 text-center">
                KID&apos;S FASHION{" "}
                {/* using &apos; this for single quote (') */}
              </h2>
              <Image
                className="rounded-xl "
                src="/Images/Wears/turbun.webp"
                alt=""
                width={300}
                height={150}
                layout="responsive"
              />
            </div>
          </Link>
          <Link
            className="navbar_link relative hover:bg-gray-100 hover:shadow-md transition duration-300 ease-in-out"
            href="/men-wear"
          >
            <div className="border-4 border-solid border-black rounded-lg p-2">
              <h2 className="text-2xl font-bold mb-4 text-center">
                WOMEN&apos;S FASHION{" "}
                {/* using &apos; this for single quote (') */}
              </h2>
              <Image
                className="rounded-xl "
                src="/Images/Wears/turbun.webp"
                alt=""
                width={300}
                height={150}
                layout="responsive"
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="mx-8 my-10 flex flex-row">
        <div className="text-3xl font-semibold flex flex-row">
          <div>TRENDING THIS WEEK</div>
        </div>
        <div className="absolute right-10 flex flex-row space-x-4 mt-2 font-bold">
          <div className="text-gray-600 hover:text-[#ff8f9c] hover:underline hover:underline-offset-8 hover:decoration-[#ff8f9c] hover:decoration-thickness-[4px]">
            ETHENIC
          </div>
          <div className="text-gray-600 hover:text-[#ff8f9c] hover:underline hover:underline-offset-8 hover:decoration-[#ff8f9c] hover:decoration-thickness-[4px]">
            CUSTOMIZE
          </div>
          <div className="text-gray-600 hover:text-[#ff8f9c] hover:underline hover:underline-offset-8 hover:decoration-[#ff8f9c] hover:decoration-thickness-[4px]">
            MODERN
          </div>
          <div className="text-gray-600 hover:text-[#ff8f9c] hover:underline hover:underline-offset-8 hover:decoration-[#ff8f9c] hover:decoration-thickness-[4px]">
            DISCOVER
          </div>
        </div>
      </div>

      <div
        className="flex flex-row  h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(/Images/Background/background2.png)`,
        }}
      >
        <div className="ml-16 mt-36 w-full max-w-2xl">
          <div className="mt-10 text-white">
            <div className="font-bold text-6xl ">
              LAUNCH AN ENCHANTING ONLINE SHOP
            </div>
            <div className="ml-4 mt-4 font-bold">
              Pro-Fashion has absolutely everything you will ever need to create
              a beutiful and attention grabbing outfits and show case all your
              products in a simple awe-inspiring manner with ease.
            </div>
            <button className="ml-4 mt-8 bg-white text-black hover:bg-gray-700 font-bold py-2 px-4 rounded">
              Discover More
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-5 justify-center items-center cursor-pointer border-transparent hover:border-darkBlue transition-colors duration-200 text-2xl font-semibold">
        <div className="flex w-full justify-around ">
          <div
            onClick={() => {
              setSelected("content");
            }}
            className={`flex flex-col items-center gap-y-1 justify-center w-32 ${
              selected === "content" ? "border-b-2 border-darkBlue" : ""
            }`}
          >
            <div className="flex flex-row gap-x-1 items-center justify-center">
              <MdCollections
                color={selected === "content" ? "#ff8f9c" : "#8C8C8C"}
                size={25}
              />
              <span
                className={`${
                  selected === "content" ? "text-darkBlue" : "text-gray-600"
                }`}
              >
                Content
              </span>
            </div>
          </div>
          <div
            onClick={() => {
              setSelected("collection");
            }}
            className={`flex flex-col items-center gap-y-1 justify-center w-32 ${
              selected === "collection" ? "border-b-2 border-darkBlue" : ""
            }`}
          >
            <div className="flex flex-row gap-x-1 items-center justify-center">
              <FaShoppingBag
                color={selected === "collection" ? "#ff8f9c" : "#8C8C8C"}
                size={25}
              />
              <span
                className={`${
                  selected === "collection" ? "text-darkBlue" : "text-gray-600"
                }`}
              >
                Collection
              </span>
            </div>
          </div>
          <div
            onClick={() => {
              setSelected("product");
            }}
            className={`flex flex-col items-center gap-y-1 justify-center w-32 ${
              selected === "product" ? "border-b-2 border-darkBlue" : ""
            }`}
          >
            <div className="flex flex-row gap-x-1 items-center justify-center">
              <AiFillProduct
                color={selected === "product" ? "#ff8f9c" : "#8C8C8C"}
                size={25}
              />
              <span
                className={`${
                  selected === "product" ? "text-darkBlue" : "text-gray-600"
                }`}
              >
                Products
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-black flex-col justify-center items-center flex">
        {selected === "content" && (
          <div className="grid grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                src={"/Images/Wears/kurti1.png"}
                alt="img"
                key={index}
                layout="responsive"
                width={300}
                height={200}
                className="px-2 rounded-xl py-2"
              />
            ))}
          </div>
        )}
        {selected === "collection" && (
          <div className="grid grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                src={"/Images/Wears/kurti2.jpeg"}
                alt="img"
                key={index}
                layout="responsive"
                width={300}
                height={200}
                className="px-2 rounded-xl py-2"
              />
            ))}
          </div>
        )}
        {selected === "product" && (
          <div className="grid grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                src={"/Images/Wears/kurti4.webp"}
                alt="img"
                key={index}
                layout="responsive"
                width={300}
                height={200}
                className="px-2 rounded-xl py-2"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
