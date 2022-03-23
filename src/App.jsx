import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Home from "./Pages/Home/Home";
import Game from "./Pages/Game/Game";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/play/:category" element={<Game />} />
        <Route exact path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
