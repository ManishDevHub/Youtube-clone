import React from "react";
import Avatar from 'react-avatar';
import { MdMenu } from "react-icons/md";
import logo from "../../public/logo.jpg";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
import profile from "../../public/profile-img.png"
export default function Navbar() {

  return (
    <div className="flex justify-between fixed t-0  w-[100%] bg-white px-6 py-2 ">
      <div className=" flex  items-center space-x-2 ">
        <MdMenu className="text-xl cursor-pointer mr-4" size={"25px"} />
        <img src={logo} alt="" className="w-[85px] cursor-pointer" />
        
      </div>
      <div className=" flex w-[50%] items-center ">
        <div className="w-[100%] px-4 py-2  border rounded-l-full">
             <input type="text" placeholder="Search" className="outline-none " />
        </div>
       <button className="px-3 py-2 border bg-gray-100 rounded-r-full">
          <CiSearch size={"24px"}/>
       </button>
      
        <IoMdMic size={"45px"} className="ml-4 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200" />
      </div>
      <div className=" flex space-x-5 items-center">
        <RiVideoAddLine size={"25px"}/>
        <CiBellOn size={"29px"} />
        <Avatar src={profile} size="32" round={true} />
      </div>
    </div>
    
  );
}
