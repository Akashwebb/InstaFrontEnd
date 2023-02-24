import React, { useEffect, useState } from "react"
import Header from "../Header/header"
import Cart from "../cart/cart"
const Postview=()=>{
    const[data,setdata]=useState([])
    useEffect(()=>{
        fetch("https://clone-lfgq.onrender.com/api/data").then((res)=>{
        return res.json()
    }).then((final)=>{
        setdata(final.data)
    }).catch((err)=>{
        console.log("error")
    })
    },[])

    console.log(data)
    return(
       
        <div id="hh">
             <Header/>
             {data.map((value,key)=>{
                return (
                    <Cart post={value} key={key}/>
                )
              })}
        </div>
    )
}
export default Postview;
// https://clone-lfgq.onrender.com