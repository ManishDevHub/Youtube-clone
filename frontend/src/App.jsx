import { useState } from "react";
import {Route , Routes} from 'react-router-dom'
import Home from '../src/components/Home.jsx'
import Search from "./components/Search.jsx";
import PlayingVideo from "./components/PlayingVideo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search/:searchQuery" element={<Search />} />
          <Route path="/video/:id" element={<PlayingVideo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
