import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center text-gray-800">
      <h1>Vite + React</h1>

      <p className="text-2xl text-blue-600">
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default App;
