import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className="text-blue-500">hello react</p>
      <h1>hi reactLogo</h1>
      <p className="text-blue-500">Hello React</p>
      <h1 className="bg-yellow-200 text-xl">Tailwind Test</h1>
      <h1 className="text-red-500 text-3xl">Tailwind Test</h1>
    </div>
  );
}

export default App;
