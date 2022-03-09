import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Download from './pages/Download'
import Signup from './pages/Signup'
import Signin from './pages/sigin/Signin'
import FindWorkspace from './pages/sigin/FindWorkspace'
import Truesignup from './pages/sigin/Truesignup';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Download />} />
          <Route path="Signup" element={<Signup />}/>
          <Route path="Signup/Signin" element={<Signin />} />
          <Route path="Signup/Signin/FindWorkspace" element={<FindWorkspace />} />
          <Route path="Signup/Signin/Truesignup" element={<Truesignup />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

