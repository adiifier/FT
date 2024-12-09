import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Entry } from "./pages/Entry";
import { Livescores } from "./pages/Livescores";

import About from "./pages/About";
import Scoreca from "./pages/S";
import UpcomingMatches from "./pages/UpcomingMatches";
import NewsPage from "./pages/Newspage";
import CustomScoreCard from "./pages/CustomScorecard";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Entry></Entry>}></Route>
          <Route path="/Livescores" element={<Livescores></Livescores>}></Route>
          <Route path="/sc" element={<Scoreca></Scoreca>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route
            path="/upcoming"
            element={<UpcomingMatches></UpcomingMatches>}
          ></Route>
          <Route path="/news" element={<NewsPage></NewsPage>}></Route>
          <Route
            path="/customScore"
            element={<CustomScoreCard></CustomScoreCard>}
          ></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
