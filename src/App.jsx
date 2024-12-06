import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Service from "./components/Service";
import About from "./components/About";

const App = () => {

  return(
    <Router>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/service" element={ <Service/> } />
      </Routes>
    </Router>
  )
}

export default App;