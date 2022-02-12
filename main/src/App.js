import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login.js";
import NavigationBar from "./NavigationBar.js";
import axios from "axios";
import Landing from './Landing.js';
function App() {
  return (
    <BrowserRouter>
      <div className = 'App'>
      </div>
      <Routes>
        <Route path="/" exact element={<Login/>}/>
        <Route path='/home' exact element = {<Landing/>} />
      
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
