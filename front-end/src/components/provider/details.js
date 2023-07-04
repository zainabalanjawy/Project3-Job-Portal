import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import axios from 'axios';
import { useState } from 'react';
export default function App() {
  
  
  return (
    <>
    <link rel="stylesheet" href="./public/detalis.css"></link>
      <h1>Details</h1>
     <form enctype="multipart/form-data"> 
   <div> 
<label>About</label>
<input type='text' name="About" ></input>
   </div>
<div>
<label>Location</label>
<input type="text" name="Location"></input>
</div>


<button>Edit </button>
     </form>
      
    </>
  )
}