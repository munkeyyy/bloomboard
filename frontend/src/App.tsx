import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Explore from "./Components/Explore";
import Create from "./Components/Create";
import Bloom from "./Components/Bloom";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <div className="bg-[#111111] h-full">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/create" element={<Create />} />
          <Route path="/bloom/:id" element={<Bloom />} />
          <Route path="/:userid" element={<Profile />} />
          <Route
            path="/*"
            element={
              <div className="flex items-center justify-center text-black font-bold h-screen">{`Not found :(`}</div>
            }
          />
        </Routes>
        <p></p>
      </div>
    </>
  );
}

export default App;
