import {
  Routes,
  Route,
} from "react-router-dom";
import MarvelScreen from "../marvel/MarvelScreen";
import DcScreen from "../dc/DcScreen";
import SearchScreen from "../search/SearchScreen";
import { Navbar } from "../ui/Navbar";
import HeroScreen from "../hero/HeroScreen";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DcScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="hero/:heroId" element={<HeroScreen />} />
        <Route path="/" element={<MarvelScreen />} />
      </Routes>
      </div>
    </>
  );
};

export default DashboardRoutes;
