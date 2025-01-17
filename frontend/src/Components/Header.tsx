import  { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { GoBellFill } from "react-icons/go";
import { TbMessageCircleFilled } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
const Header = () => {
  const [active, setActive] = useState("home");
  return (
    <div className="flex items-center justify-between w-full p-4 sticky top-0 bg-[#000] z-40">
      <div className="py-4 px-2 transition-all duration-300  rounded-full">
        <Link
          to={"/"}
          className="logo  py-2 px-4 rounded-full text-4xl font-extrabold  text-[#C1FF00]"
        >
          B
        </Link>
      </div>
      <div className="flex items-center justify-center gap-3 mx-2">
        <Link
          onClick={() => setActive("home")}
          className={`py-2 px-3 rounded-full text-base font-normal hover:border hover:border-[#C1FF00] hover:text-[#C1FF00]  ${
            active === "home"
              ? "text-[#C1FF00] border border-[#C1FF00]"
              : "text-white border-none"
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={() => setActive("today")}
          className={`py-2 px-3 rounded-full text-base font-normal hover:border hover:border-[#C1FF00] hover:text-[#C1FF00] ${
            active === "today"
              ? "text-[#C1FF00] border border-[#C1FF00]"
              : "text-white border-none"
          }`}
          to="/today"
        >
          Explore
        </Link>
        <Link
          onClick={() => setActive("create")}
          className={`py-2 px-3 rounded-full text-base font-normal hover:border hover:border-[#C1FF00] hover:text-[#C1FF00] ${
            active === "create"
              ? "text-[#C1FF00] border border-[#C1FF00]"
              : "text-white border-none"
          }`}
          to="/create"
        >
          Create
        </Link>
      </div>
      <div className="search w-full rounded-full bg-transparent px-2 border  border-[#222222] flex items-center gap-2 max-w-6xl">
        <span className="text-[#C1FF00] text-xl px-4">
          <IoSearch />
        </span>
        <input
          type="text"
          placeholder="Search"
          className="h-full w-full bg-transparent py-4 focus-within:outline-none text-white"
        />
      </div>

      <div className="flex items-center gap-2 mx-4">
        <div className="p-2 transition-all duration-300 text-[#C1FF00] ">
          <GoBellFill className="text-[#C1FF00] text-2xl group-hover:scale-[0.95]" />
        </div>
        <div className="p-2 transition-all duration-300 ">
          <TbMessageCircleFilled className="text-[#C1FF00] text-2xl group-hover:scale-[0.95]" />
        </div>
        <div className="flex gap-1 items-center">
          <div className="h-12 w-12 p-2  transition-all duration-300  overflow-hidden">
            <img
              src="https://i.pinimg.com/30x30_RS/e7/72/5a/e7725a9940eb2b022520805ef8eaaf79.jpg"
              alt="profile-img"
              className="h-full w-full object-cover rounded-full group-hover:scale-[0.95]"
            />
          </div>
          <div className="rounded-full p-2 transition-all duration-300 flex items-center justify-center text-[#C1FF00] ">
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
