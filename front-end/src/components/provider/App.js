import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useLocation, useParams} from 'react-router-dom'
import axios from 'axios';
import { useState , useEffect} from 'react';

// import { post } from '../../../../routes/provider/App';

export default function App() {
  const {state} = useLocation()
    const[app,setApp] = useState([])
    console.log(state.post)

    useEffect(() => {
      getAllApp()
  }, [])


  const getAllApp = async () => {
    console.log(app._id);
      const response = await axios.get(`/provider/app/view?id=${app._id}`)
      console.log(response)
      setApp(response.data)
  }

  const allApp = app.map((a, index) => {
      return (
          <div key={index}>
              <td>{a.post[0].jobTitle}</td>
              <td>{a.status}</td>
{/*           
              <td><button type="button" class="btn bg-gradient-primary btn-lg" onClick={() => hadleDelete(app._id)}>Delete
               </button></td> 
              */}
          </div>
      )
  })
  return (
  <>
    <h1>Applications</h1>
      <div className='App'>
      <table>
        <tr>
            <th> Applicants</th>
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