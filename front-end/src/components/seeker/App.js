import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import axios from 'axios';
import { useState } from 'react';
// import { post } from '../../../../routes/Seeker/App';

export default function App() {
  
  
  return (
    <>
      <h1>Applications</h1>
      <div className='App'>
      <table>
        <tr>
            <th>Job Title</th>
            <th>Status</th>
            <th>Delete</th>
        </tr>
        <tr>
        {/* <td>{post.jobTitle}</td> */}
        {/* <td>{post.Status}</td> */}
        </tr>

      </table>
      </div>
      
    </>
  )
 }
