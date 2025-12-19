import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Intro from "./pages/Intro";
import Destinations from "./pages/Destinations";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
  );
}
