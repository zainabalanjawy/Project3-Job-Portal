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
    console.log(state.post._id);
      const response = await axios.get(`/provider/app/view?id=${state.post._id}`)
      console.log("res",response)
      setApp(response.data)
  }

  const hadleDelete = async (id) => {
    console.log("id ", id)
    const response = await axios.post(`/provider/app/delete?id=${id}`)
    console.log(response)
   
}

  const allApp = app.map((a, index) => {
    return (
      <tr key={index}>
         <td class="align-middle text-center text-sm">
         <h6 class="mb-0 text-xs">{index+1}</h6>
         </td>
         <td class="align-middle text-center text-sm">
        
               <h6 class="mb-0 text-xs">{a.user[0].fullName}</h6>

         </td>
         <td class="align-middle text-center text-sm">
         <h6 class="mb-0 text-xs">{a.status}</h6>
           {/* <span class="badge badge-sm badge-success">{app.status}</span> */}
         </td>

         <td class="align-middle text-center text-sm">
           <button onClick={() => hadleDelete(a._id)} href="javascript:;" class=" font-weight-bold text-xs btn bg-gradient-primary btn-lg" data-toggle="tooltip" data-original-title="Edit user">
             DELETE
           </button>
         </td>
       </tr>

 // </div>
)
      return (
          <div key={index}>
              <td>{a.user[0].fullName}</td>
              <td>{a.cv}</td>
              <td>{a.status}</td>
          
              <td><button type="button" class="btn bg-gradient-primary btn-lg" onClick={() => hadleDelete(a._id)}>Delete
               </button></td> 
             
          </div>
      )
  })
  return (
  <>
    <h1>Applications</h1>
      {/* <div className='App'>
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
      </div> */}
            <section class="pt-5 mt-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card">
          <div class="table-responsive">
            <table class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th class="text-uppercase  text-xs font-weight-bolder opacity-7">Index</th>
                  <th class="text-uppercase  text-xs font-weight-bolder opacity-7 ps-2">Applicants</th>
                  <th class="text-center text-uppercase  text-xs font-weight-bolder opacity-7">Status</th>
                  <th class="text-center text-uppercase  text-xs font-weight-bolder opacity-7">Delete</th>
                  
                </tr>
              </thead>
              <tbody>
                {allApp}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
  </>
      

  )
}