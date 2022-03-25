import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Home from "./Pages/Home/Home";
import Game from "./Pages/Game/Game";
import Scores from "./Pages/Scores/Scores";
import Navbar from "./Components/NavBar/NavBar";
import Quizzes from "./Pages/Quizzes/Quizzes";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/play/:category" element={<Game />} />
        <Route exact path="/scores" element={<Scores />} />
        <Route exact path="/quizzes" element={<Quizzes />} />
        <Route exact path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
