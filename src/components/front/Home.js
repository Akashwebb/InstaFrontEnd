import React from "react";
import { Link } from "react-router-dom";
import "./home.css"
const Home=()=>{
    return(
        <div id="home-main">
            <div>
            <img src="./images/lens.png" alt="a" id="home-img" />
            </div>
                
               <div id="enter">
                <h2 id="home-h2">Welcome To InstaClone  </h2>
                
               <button id="home-button"> <Link to="/insta"  id="link" > Enter </Link></button> 
                </div> 
              
             <p id="name">By -Akash Kumar Singh</p>   
        </div>
    )
}
export default Home;