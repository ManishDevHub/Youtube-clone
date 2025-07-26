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
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { CiFlag1 } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
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

   const sidebarItems4 = [
    {
      id: 1,
      name: "YouTube Premium",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      name: "YouTube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      id: 3,
      name: "YouTube Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "YouTube kids",
      icon: <SiYoutubekids />,
    },
  ];

   const sidebarItems5 = [
    {
      id: 1,
      name: "Settings",
      icon:<IoSettingsOutline />,
    },
    {
      id: 2,
      name: "Report history",
      icon: <CiFlag1 />,
    },
    {
      id: 3,
      name: "Help",
      icon: <IoIosHelpCircleOutline />,
    },
    {
      id: 4,
      name: "Send feedback",
      icon: <MdOutlineFeedback />,
    },
  ];



  return (
    <div className="px-7 w-[20%] h-[calc(100vh-0.20rem)] overflow-y-scroll overflow-x-hidden pt-20  ">
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

       <div className=" mt-4 space-y-3 items-center">
        <div className=" items-center space-x-2">
          <h1 >More from YouTube</h1>
         
        </div>
        {sidebarItems4.map((item) => {
          return (
            <div className=" flex items-center space-x-6 hover:bg-gray-200  duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer text-red-600">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />

       <div className=" mt-4 space-y-3 items-center">
       
        {sidebarItems5.map((item) => {
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
      <br />
<span className="text-[14px] font-semibold text-gray-600">About Press Copyright<br />
Contact usCreators<br />Advertise Developers<br />
<br />
<p>Terms Privacy Policy & Safety <br /> How YouTube works <br /> Test new feature</p></span>
<br />
<p className="text-xs text-gray-800 mt-1">© 2025 Learn Coding</p>

 



    </div>
  );
}
