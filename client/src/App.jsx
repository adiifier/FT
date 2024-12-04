import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Entry } from "./pages/Entry";
import { Livescores } from "./pages/Livescores";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Entry></Entry>}></Route>
          <Route path="/Livescores" element={<Livescores></Livescores>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
