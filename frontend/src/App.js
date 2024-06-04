import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./routes/Router"; 
import "./index.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
    <Navbar/>
      <Routers />
    </Router>
  );
}

export default App;
