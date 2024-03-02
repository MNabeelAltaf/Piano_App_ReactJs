

import Major_scales from "./Components/Major_scales";
import Major_Pentatonic from './Components/Major_Pentatonic';
import Major_Blues from './Components/Major_Blues';
import Minor_scales from "./Components/Minor_scales";
import Minor_Pentatonic from "./Components/Minor_Pentatonic";
import Minor_Blues from "./Components/Minor_Blues";


//react navigation
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import './App.css';
import { useState } from "react";

function App() {

  const [selectedComponent, setSelectedComponent] = useState(null);


  return (

    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Major_scales />} />
          <Route path="/major-pentatonic" element={<Major_Pentatonic />} />
          <Route path="/major-blues" element={<Major_Blues />} />
          <Route path="/minor-scales" element={<Minor_scales />} />
          <Route path="/minor-pentatonic" element={<Minor_Pentatonic />} />
          <Route path="/minor-blues" element={<Minor_Blues />} />
        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;
