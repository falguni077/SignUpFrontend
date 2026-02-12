import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import UserDetails from "./components/UserDetails";
import MagicBento from "./components/MagicBento";
import "./App.css";

function App() {
  return (
    <>
      {/* Background */}
      <div className="gradient-bg"></div>

      <div className="bento-layer">
        <MagicBento
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={350}
          particleCount={8}
          glowColor="132, 0, 255"
        />
      </div>

      {/* THIS wrapper keeps your UI same */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/topics" element={<UserDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;