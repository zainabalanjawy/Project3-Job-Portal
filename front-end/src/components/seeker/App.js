import { BrowserRouter as Router, Routes, Route, Link ,Navigate,useNavigate} from 'react-router-dom'

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
    window.location.reload(false); 
   
}

  const allApp = app.map((app, index) => {
      return (

               <tr key={index}>
                  <td class="align-middle text-center text-sm">
                  <h6 class="mb-0 text-xs">{index+1}</h6>
                  </td>
                  <td class="align-middle text-center text-sm">
                 
                        <h6 class="mb-0 text-xs">{app.post[0].jobTitle}</h6>

                  </td>
                  <td class="align-middle text-center text-sm">
                  <h6 class="mb-0 text-xs">{app.status}</h6>
                    {/* <span class="badge badge-sm badge-success">{app.status}</span> */}
                  </td>
 
                  <td class="align-middle text-center text-sm">
                    <button onClick={() => hadleDelete(app._id)} href="javascript:;" class=" font-weight-bold text-xs btn bg-gradient-primary btn-lg" data-toggle="tooltip" data-original-title="Edit user">
                      DELETE
                    </button>
                  </td>
                </tr>


      )
  })
  return (
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
                  <th class="text-uppercase  text-xs font-weight-bolder opacity-7 ps-2">Job Title</th>
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
      

  )
 }