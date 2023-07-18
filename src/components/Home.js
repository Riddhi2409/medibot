import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";

import { HiMenu } from "react-icons/hi";
import Feed from "./Feed";
import WelcomeCard from "./WelcomeCard";
import ChatBox from "./ChatBox";


function Home() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  console.log(toggleSidebar)

  return (
    <div className="flex md:flex-row-reverse flex-col  bg-[#EEF1F8] h-screen">
      <div className=" hidden md:flex h-screen">
        <Sidebar />
      </div>
      <div className="flex md:hidden flex-row">
        <div className="flex flex-row justify-between ml-8 w-screen p-6 text-xl font-semibold ">
          <div>
            <HiMenu
              fontSize={40}
              className="cursor-pointer"
              onClick={() => setToggleSidebar(true)}
            />
          </div>
        </div>
        {toggleSidebar && (
          <div className="fixed bg-white h-screen shadow-md z-10">
            <Sidebar setToggleSidebar={setToggleSidebar} />
          </div>
        )}
      </div>
      <div className=" flex h-full overflow-y-scroll items-center  flex-col justify-between ">
        <div>
        <Feed />
        </div>
          <div className="w-full bottom-0 mb-3">
            <ChatBox />
          </div>
      </div>

    </div>
  );
}

export default Home;
