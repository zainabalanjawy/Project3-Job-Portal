import { BrowserRouter as Router, Routes, Route, Link,useNavigate } from 'react-router-dom'
import { useLocation, useParams} from 'react-router-dom'
import axios from 'axios';
import { useState , useEffect} from 'react';

// import { post } from '../../../../routes/provider/App';

export default function App() {
  const navigate = useNavigate()
  const {state} = useLocation()
    const[app,setApp] = useState([])
    // const {post} = state
    console.log(state.post)

    useEffect(() => {
      getAllApp()
  }, [])


  const getAllApp = async () => {
    console.log(state.post._id);
      const response = await axios.get(`/provider/app/view?id=${state.post._id}`)
      console.log("res",response)
      setApp(response.data)
  }

  const hadleDelete = async (id) => {
    console.log("id ", id)
    const response = await axios.post(`/provider/app/delete?id=${id}`)
    console.log(response)
    window.location.reload(false); 
   
}

  const allApp = app.map((a, index) => {
      return (
          <div key={index}>
              <td>{a.user[0].fullName}</td>
              <td>{a.cv}</td>
              <td>{a.status}</td>
          
              <td><button type="button" class="btn bg-gradient-primary btn-lg" onClick={() => hadleDelete(a._id)}>Delete
               </button></td> 
               <td><button type="button" class="btn bg-gradient-primary btn-lg"  onClick={() => navigate('/provider/status/editstatus',  {state: {app}})}>Status
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
            <th>Applicant</th>
            <th>CV</th>
            <th>Status</th>
            <th>Delete</th>
        </tr>
        <tr>
        {allApp}
        </tr>

      </table>
      </div>
      
  </>
      

  )
}