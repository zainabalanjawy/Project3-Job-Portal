import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import axios from 'axios';
import { useState } from 'react';
export default function App() {
  
  
  return (
    <>
    <link rel="stylesheet" href="./public/profile.css"></link>
      <h1>Profile</h1>
     <form enctype="multipart/form-data"> 
   <div> 
<label>education</label>
<input type='text' name="education " ></input>
   </div>
<div>
<label>experince</label>
<input type="text" name="experince"></input>
</div>

<div> 
    <label>upload cv</label>
    <input type='file' name='file'></input>

</div>

<button>update </button>
     </form>
      
    </>
  )
}