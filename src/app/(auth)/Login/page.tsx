"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { RiFlowerFill } from "react-icons/ri";

interface FormData {
  email: string;
  password: string;
  remember: boolean;
}

const Login = () => {
  // changed the name from login to Login also changed the folder name from from Login to login
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const onError = (errors: any) => {
    console.log(errors);
  };

  return (
    <div>
      <div className="flex flex-row">
        <div className="p-10 mt-16">
          <div className="flex flex-row pl-32 ">
            <RiFlowerFill size={100} />
            <div className="pl-2 mt-5 font-bold text-6xl ">PRO-FASHION</div>
          </div>
          <div className="pl-16 font-bold">
            WELCOME TO PRO-FASION. REGISTER NOW AND SHOP WITHOUT ANY EFFORTS...
          </div>
          <div className="h-[380px] bg-gray-50 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
              <div className="text-3xl font-bold text-gray-900 mt-2 text-center">
                LOGIN HERE
              </div>
            </div>
            <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
              <form
                onSubmit={handleSubmit(onSubmit)} // Add onError callback
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="email" // added
                    className="text-sm font-bold text-gray-600 block"
                  >
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                    })}
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password" // added
                    className="text-sm font-bold text-gray-600 block"
                  >
                    Password
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      {...register("remember")}
                      type="checkbox"
                      className="h-4 w-4 text-blue-300 rounded"
                    />
                    <label htmlFor="" className="ml-2 text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <div>
                    <a href="" className="font-medium text-sm text-blue-500">
                      Forgot Password?
                    </a>
                  </div>
                  <div>
                    <button
                      onClick={() => router.push("/home")}
                      className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Image
          className="pl-12 pr-18 mt-3 "
          src="/Images/loginbackground.webp"
          alt=""
          width={580}
          height={500}
        />
      </div>
    </div>
  );
};

export default Login; // changed the name from login to Login
