import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { LuLink } from "react-icons/lu";
import { MdChevronRight } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { MdHistory } from "react-icons/md";
import { CgPlayList } from "react-icons/cg";
import { CiYoutube } from "react-icons/ci";
import { IoTrendingUpSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiMusicNote1 } from "react-icons/ci";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { IoGameControllerOutline } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { TfiCup } from "react-icons/tfi";
import { RiGraduationCapLine } from "react-icons/ri";
import { TbHanger2Filled } from "react-icons/tb";
import { MdOutlinePodcasts } from "react-icons/md";
export default function Sidebar() {
  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
  ];

  const sidebarItems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <GrChannel />,
    },
    {
      id: 2,
      name: "History",
      icon: <MdHistory />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <CgPlayList  size={"27px"}/>,
    },
    {
      id: 4,
      name: "Your Videos",
      icon: <CiYoutube />,
    },
    {
      id: 5,
      name: "Watch later",
      icon: <MdOutlineWatchLater />,
    },
    {
      id: 6,
      name: "Liked videos",
      icon: <LuLink />,
    },
  ];

 const sidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <IoTrendingUpSharp />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <MdOutlineShoppingCart />,
    },
    {
      id: 3,
      name: "Music",
      icon: <CiMusicNote1 />,
    },
    {
      id: 4,
      name: "Films",
      icon: <PiFilmSlateLight />,
    },
    {
      id: 5,
      name: "Live",
      icon: <CgMediaLive />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <IoGameControllerOutline />,
    },
     {
      id: 7,
      name: "News",
      icon: <ImNewspaper />,
    },
    {
      id: 8,
      name: "Sport",
      icon: <TfiCup />
    },
    {
      id: 9,
      name: "Courses",
      icon: <RiGraduationCapLine />,
    },
    {
      id: 10,
      name: "Fashion & beauty",
      icon: <TbHanger2Filled />,
    },
    {
      id: 11,
      name: "Podcasts",
      icon: <MdOutlinePodcasts />,
    },
  ];


  return (
    <div className="px-7 w-[18%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden pt-20 pb-0 ">
      <div className="space-y-3 items-center ">
        {sidebarItems.map((item) => {
          return (
            <div className=" flex items-center space-x-6 hover:bg-gray-200  duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer ">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      <div className=" mt-4 space-y-3 items-center">
        <div className="flex items-center space-x-2">
          <h1 >You</h1>
          <MdChevronRight  size={"22px"}/>
        </div>
        {sidebarItems2.map((item) => {
          return (
            <div className=" flex items-center space-x-6 hover:bg-gray-200  duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer ">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />

      <div className=" mt-4 space-y-3 items-center">
        <div className=" items-center space-x-2">
          <h1 >Explore</h1>
         
        </div>
        {sidebarItems3.map((item) => {
          return (
            <div className=" flex items-center space-x-6 hover:bg-gray-200  duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer ">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />


    </div>
  );
}
