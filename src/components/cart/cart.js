import React, { useEffect, useRef } from "react";
import "./cart.css"
const Cart=(props)=>{
    // const[likeing,setliking]=useEffect("true")
   const increment=useRef("")
   console.log()
   const handle=()=>{
    let x=parseInt(increment.current.innerText)
    x=x+1
    increment.current.innerText= x + " likes"
    // setliking("false")
   }
    return(
        <div id="main">
           <div id="top"> 
           <div id="aa"><span id="author"> {props.post.author}</span> <br/> <span id="location"> {props.post.location}</span> </div>
           <div id="dott"> <img id="dots" src="./images/dott.jpg" alt="dots"/> </div>
           </div>
           <div id="img-div">  <img id="img" src= {`https://clone-lfgq.onrender.com/images/${props.post.image_file}`} alt="place"/> </div>

           <div id="mid">
            <div> <img id="like" src="./images/likeNo.jpg" alt="lik" onClick={handle}/> 
                  <img id="comment" src="./images/comment.jpg" alt="lik"/> 
                  <img id="share" src="./images/share.jpg" alt="lik"/></div>
            <div id="date">  {props.post.time} </div>
           </div>

           <div id="likes" ref={increment}>{props.post.likes} likes</div>
           <div id="des">{props.post.description}</div> 
        </div>
         
    )
}
export default Cart ;