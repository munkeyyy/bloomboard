import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { SlOptions } from "react-icons/sl";

const Home = () => {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    axios
      .get("https://pixabay.com/api/?key=48016565-dfc53b755cca03b3d3ac468bb")
      .then((res) => setPics(res.data.hits))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-4   mx-auto">
      <div className="lg:columns-5 md:columns-4 sm:columns-3 columns-2 gap-4">
        {pics.map((pic: any) => (
          <div className="column mb-3 pb-10 relative" key={pic.id}>
            <div 
              className="rounded-xl group overflow-hidden  relative"
             
            >
              <div className={`hover-overlay absolute h-full w-full bg-[rgba(0,0,0,0.6)] hidden group-hover:flex justify-between flex-col py-4 px-6 `}>
                <div className="flex items-center justify-between ">
                  <p className="self-center text-white font-medium">Profile</p>
                  <button className="bg-red-600 text-white font-medium px-4 py-3 rounded-full">Save</button>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <button className="text-xl text-black font-bold p-2 bg-white rounded-full"><MdOutlineFileUpload /></button>
                  <button className="text-xl text-black font-bold p-2 bg-white rounded-full"><SlOptions /></button>
                </div>
              </div>
              <img
                src={pic?.webformatURL}
                className="h-full w-full"
                alt={pic?.tags}
              />
            </div>
            <div className="px-2 py-1 flex items-center gap-2 absolute bottom-0 z-10">
              <div className=" h-8 w-8 rounded-full overflow-hidden">
                <img
                  src={pic?.userImageURL}
                  className="h-full w-full object-cover"
                  alt={pic?.tags}
                />
              </div>
              <span className="text-black font-medium capitalize text-sm">{pic?.user}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
