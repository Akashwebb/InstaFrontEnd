import React, { useState } from "react";
import "./form.css"
import {  useNavigate } from "react-router-dom";
import Header from "../Header/header";
const Form=()=>{
    const [author,setauthor]=useState("")
    const [location,setlocation]=useState("")
    const [description,setdescription]=useState("")
    const [image,setimage]=useState("")
    const navigate=useNavigate()
    const posting= ()=>{
        console.log("hh")
        const formdata=new FormData()
        formdata.append("author",author)
        formdata.append("location",location)
        formdata.append("description",description)
        formdata.append("image_file",image)

         fetch("https://clone-lfgq.onrender.com/data",{
            method:"POST",
            body: formdata
              })
        navigate("/insta")
         console.log(author,formdata) 
    }


    return (
        <div id="main-div" >
                <Header/>
               <form method="post" action="" id="formm">
               
               <input type="file" placeholder="No file chose" className="inn" name="file" onChange={(e)=>{setimage(e.target.files[0])}}  /> 
               <input type="text" placeholder="Author" className="in" name="author"  onChange={(e)=>{setauthor(e.target.value)}} value={author}/>
               <input type="text" placeholder="Location" className="in" name="location" onChange={(e)=>{setlocation(e.target.value)}} value={location} />  
               <input type="text" placeholder="Description" className="inn" name="description" onChange={(e)=>{setdescription(e.target.value)}} value={description} /><br/> <br/>
               <button id="but" onClick={posting} > <b>Post</b>  </button>
                        
           </form>
           
        </div>
    )
}
export default Form;