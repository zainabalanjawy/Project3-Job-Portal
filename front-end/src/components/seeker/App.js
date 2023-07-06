import { BrowserRouter as Router, Routes, Route, Link ,Navigate} from 'react-router-dom'

import axios from 'axios';
import { useState , useEffect} from 'react';

// import { post } from '../../../../routes/Seeker/App';

export default function App(props) {
  
  const [app, sectApp] = useState([])

  useEffect(() => {
      getAllApp()
  }, [])


  const getAllApp = async () => {
      const response = await axios.get(`/seeker/app/viwe?id=${props.id}`)
      console.log(response)
      sectApp(response.data)
  }

  const hadleDelete = async (id) => {
    console.log("id ", id)
    const response = await axios.post(`/seeker/app/delete?id=${id}`)
    console.log(response)
   
}

  const allApp = app.map((app, index) => {
      return (
          <div key={index}>
              <td>{app.post[0].jobTitle}</td>
              <td>{app.status}</td>
          
              <td><button type="button" class="btn bg-gradient-primary btn-lg" onClick={() => hadleDelete(app._id)}>Delete
               </button></td> 
             
          </div>
      )
  })
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
        {allApp}
        {/* <td>{post.jobTitle}</td> */}
        {/* <td>{post.Status}</td> */}
        </tr>

      </table>
      </div>
      
    </>
  )
 }
