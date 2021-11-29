import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Main from "./Component/Main/index";
import Weather from "./Component/Weather/index";
function App() {
  return (
 <>
 <BrowserRouter>
 <Routes>
   <Route path="/" element={<Main />}>
     
   </Route>
   <Route path="/weather/:country" element={<Weather />}></Route>
 </Routes>
 </BrowserRouter>
 </>
  );
}

export default App;
