"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { RiFlowerFill } from "react-icons/ri";
import Link from "next/link";
import { BiLogInCircle, BiMessage } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    router.push("/home"); // redirect to home page
  };

  return (
    <div>
      <div className="flex flex-row pl-64">
        <div className="pr-16">
          <div className="flex flex-col ">
            <div className=" flex flex-row pt-16 pb-4 gap-x-64 ">
              <div className="flex flex-row gap-x-2 text-xs font-bold text-red">
                <div>Pro-Fasion</div>
                <RiFlowerFill size={15} />
              </div>
              <div>
                <BiLogInCircle
                  size={20}
                  color={isChecked ? "green" : "red"} // conditional styling
                />
              </div>
            </div>
            <hr className="border-gray-400 h-6" />
            <div>
              <div className="pb-6">
                <div className="text-[25px] font-bold">
                  Sign in to ProFasion
                </div>
                <div className="flex flex-row justify-between pt-1">
                  <div className="text-xs pt-2">
                    Don&apos;t have an account?
                  </div>
                  <div>
                    <Link
                      href="/signup"
                      className="text-xs text-red font-bold hover:text-black "
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="border-gray-400 h-6" />
            </div>
          </div>
          <div className="mx-auto mt-4 ml-2 mr-2 pb-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-bold text-black block"
                ></label>
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-gray-600 block"
                ></label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    maxLength: 30,
                  })}
                  type="text"
                  id="email"
                  placeholder="Enter Email Address"
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                />
                {errors.email && (
                  <div className="text-xs text-red">
                    {errors.email.type === "required"
                      ? "Email is required"
                      : "Enter a valid email address"}
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-bold text-gray-600 block"
                ></label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                />
              </div>
              <div>
                <button className="w-full p-2 border border-gray-300 rounded-lg mt-1 bg-red text-white">
                  Continue
                </button>
              </div>
              <hr className="border-gray-400" />
              <div className="pl-36 text-grey text-sm">--OR--</div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="w-[250px] p-2 gap-x-2 rounded-lg mt-1 text-xs font-bold text-black flex flex-row pl-14 bg-skin">
                    <Image
                      src="/googlelogo.png"
                      width={15}
                      height={15}
                      alt="Google Logo"
                    />
                    <div>Sign in with Google</div>
                  </div>
                </div>
                <div className="flex flex-row gap-x-4 ">
                  <div className="rounded-lg mt-1 bg-skin p-2">
                    <BsInstagram size={15} />
                  </div>
                  <div className="rounded-lg mt-1 bg-skin p-2">
                    <BiMessage size={15} />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Image
          className="ml-12 pr-18 m-3 rounded-lg  "
          src="/Images/loginbackground.webp"
          alt=""
          width={560}
          height={300}
        />
      </div>
    </div>
  );
};

export default Login; // changed the name from login to Login
