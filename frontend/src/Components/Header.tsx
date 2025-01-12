import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { GoBellFill } from "react-icons/go";
import { TbMessageCircleFilled } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
const Header = () => {
  const [active, setActive] = useState("home");
  return (
    <div className="flex items-center justify-between w-full p-4 sticky top-0 bg-white z-40">
      <div className="py-4 px-2 transition-all duration-300 hover:bg-gray-100 rounded-full">
        <Link
          to={"/"}
          className="logo  py-2 px-4 rounded-full text-xl font-extrabold bg-red-600 text-white"
        >
          B
        </Link>
      </div>
      <div className="flex items-center justify-center gap-3 mx-2">
        <Link
          onClick={() => setActive("home")}
          className={`py-2 px-3 rounded-full text-base font-medium ${
            active === "home"
              ? "text-white bg-black"
              : "text-black bg-transparent"
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={() => setActive("today")}
          className={`py-2 px-3 rounded-full text-base font-medium ${
            active === "today"
              ? "text-white bg-black"
              : "text-black bg-transparent"
          }`}
          to="/today"
        >
          Explore
        </Link>
        <Link
          onClick={() => setActive("create")}
          className={`py-2 px-3 rounded-full text-base font-medium ${
            active === "create"
              ? "text-white bg-black"
              : "text-black bg-transparent"
          }`}
          to="/create"
        >
          Create
        </Link>
      </div>
      <div className="search w-full rounded-full bg-gray-100 px-2  flex items-center gap-2">
        <span className="text-black text-xl px-4">
          <IoSearch />
        </span>
        <input
          type="text"
          className="h-full w-full bg-transparent py-4 focus-within:outline-none text-black"
        />
      </div>

      <div className="flex items-center gap-2 mx-4">
        <div className="p-2 transition-all duration-300 hover:bg-gray-100 rounded-full">
          <GoBellFill className="text-gray-500 text-2xl" />
        </div>
        <div className="p-2 transition-all duration-300 hover:bg-gray-100 rounded-full">
          <TbMessageCircleFilled className="text-gray-500 text-2xl" />
        </div>
        <div className="flex gap-1 items-center">
          <div className="h-12 w-12 p-2  transition-all duration-300 hover:bg-gray-100 rounded-full overflow-hidden">
            <img
              src="https://i.pinimg.com/30x30_RS/e7/72/5a/e7725a9940eb2b022520805ef8eaaf79.jpg"
              alt="profile-img"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div className="rounded-full p-2 transition-all duration-300 flex items-center justify-center text-gray-500 hover:bg-gray-100">
            <span className="text-base">
              <FaChevronDown className="text-base" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
