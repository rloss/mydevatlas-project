import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";
import SubMap from "./pages/SubMap";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/map/:category" element={<SubMap />} />
      </Routes>
    </BrowserRouter>
  );
}
