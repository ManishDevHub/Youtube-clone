import React from "react";
import { MdMenu } from "react-icons/md";
import logo from "../../public/logo.jpg";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
export default function Navbar() {
  return (
    <div className="flex justify-between px-6 py-2 ">
      <div className=" flex  items-center space-x-2 border border-black">
        <MdMenu className="text-xl cursor-pointer " />
        <img src={logo} alt="" className="w-12 cursor-pointer" />
      </div>
      <div className=" flex w-[50%] border border-black ">
        <div className="w-[100%] px-1 py-1  border rounded-l-full">
             <input type="text" placeholder="Search" className="outline-none w" />
        </div>
       <button className="px-4 py-2 border bg-gray-100 rounded-r-full">
          <CiSearch size={"24px"}/>
       </button>
      
        <IoMdMic size={"30px"} />
      </div>
      <div className="border border-black">3</div>
    </div>
  );
}
