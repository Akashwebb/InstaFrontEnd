import React from "react";
import Postview from "./Post/postView";
import Home from "./front/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Form from "./form/form";
const App =()=>{
   
    return(
        <div>
          <BrowserRouter>
              <Routes>
                     <Route path="/" element={<Home/> } />
                     <Route path="/insta" element={<Postview/>} />
                     <Route path="/upload" element={<Form/>} />

              </Routes>
          </BrowserRouter>

          {/* <Postview/> */}
        </div>
    )
}
export default App;