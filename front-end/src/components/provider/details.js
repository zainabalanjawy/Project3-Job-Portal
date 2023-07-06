import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import axios from 'axios';
import React,{ useState } from 'react';


export default function addDetalis() {
    const [newDetalis, setNewDetalis] = useState({});
   
   
    const changeHandler = (e) =>{
        const details = {...newDetalis}
        details['Provider']=props.id
        details[e.target.name]= e.target.value
        console.log(details)
        setNewDetalis(details)
    }
    const addPostHandler = (e) =>{
        props.addDetalis(newDetalis)
    }

  return (
    <>
    <link rel="stylesheet" href="./public/detalis.css"></link>
      <h1>Details</h1>
     <form enctype="multipart/form-data"> 
   <div> 
    <label>About</label>
    <input type='text' onChange={changeHandler} name="About" class="form-control"/>
      </div>
    <div>
    <label>Location</label>
    <input type="text" onChange={changeHandler} name="Location" class="form-control"/>
    </div>
    <input onClick={addPostHandler} class="Edit"/>
     </form>
      
    </>
  )
}