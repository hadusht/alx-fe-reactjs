import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  

  return (
    <>
      {/* Header Section */}
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile />
      <Counter />

      

    
    </>
  );
}

export default App;
