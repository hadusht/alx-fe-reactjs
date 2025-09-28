import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import UserProfile from "./components/UserProfile";
import "./index.css";

//import UserProfile from "./components/UserProfile.jsx ";

function App() {
  return (
    <div>
      <UserProfile /> {/* 👈 render the profile card */}
    </div>
  );
}

export default App;
