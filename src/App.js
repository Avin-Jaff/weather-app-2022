import "./App.css";
import Home from "./commponent/Home";

import { Routes, Route } from "react-router-dom";
import Cities from "./commponent/Cities";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Cities />} />
      </Routes>
    </div>
  );
}

export default App;
