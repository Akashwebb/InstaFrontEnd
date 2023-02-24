import React from "react";
import "./header.css"
//import Form from "../form/form";
import { Link } from "react-router-dom";
const Header=()=>{
   
    return (
        <div id="head">
            <img id="one" src="./images/instaa.jpg" alt="header" /><span id="one-text">InstaClone</span>
            <Link to="/upload"> <img id="two" src="./images/aa.jpg" alt="header" /></Link>
           
            
            
        </div>
    )
}
export default Header;