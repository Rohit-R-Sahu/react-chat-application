import Navbar from "./Navbar";
import AllChats from "./AllChats";
import Search from "./Search";
import { useState } from "react";

const Sidebar = () => {

  return (
    <div className="flex flex-col ">
      <Navbar />
      <Search />
      <AllChats />
    </div>
  );
};

export default Sidebar;
