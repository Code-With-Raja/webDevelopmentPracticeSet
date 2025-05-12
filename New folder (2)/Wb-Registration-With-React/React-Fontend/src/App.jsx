
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"; 
import FillReq from "./FillReq.jsx";
import OfficersLogin from "./OfficerLogin.jsx";
import Home from "./Home.jsx";
import NewRequition from "./NewRequition.jsx";
import Details from "./Details.jsx";

 
 

const Routers = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/loginpage" element={<OfficersLogin/>} />
        <Route path="/newReq" element={<NewRequition/>} />
        <Route path="/fillReq" element={<FillReq/>} />
        <Route path="/details" element={<Details/>} />
            
   

      </Routes>
    </Router>
  );
};

export default Routers;
