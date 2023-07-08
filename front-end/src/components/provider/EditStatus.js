import React, { Component, useState } from 'react'
import { useLocation, useParams} from 'react-router-dom'
import axios from 'axios'
import {BrowserRouter as Router,Navigate, Route , Routes, Link ,useNavigate} from 'react-router-dom'

export default function  EditStatus() {
    // const navigate = useNavigate();
    const {state} = useLocation()
    // console.log(state)
    // console.log(state.app)
    // const {post} = state
    const[applicant,setApplicant] = useState(state.app)
    // console.log(state.app)

    

    const handleChange = event => {
        const editStatus = {...applicant}
        editStatus[event.target.name] = event.target.value
        console.log(event.target.name + " ---- " + event.target.value)
        setApplicant(editStatus)
    }


    const EidtHandler = async (applicant) => {
        try {
            console.log(applicant._id)
            applicant.newId = applicant._id;
            console.log("allapp---",applicant);
            console.log("appid---",applicant._id);
            // console.log("app",app);
            // console.log(app._id)
          const response = await axios.post(
            `/provider/status/editstatus?id=${applicant._id}`, applicant
          )
          console.log("Updateded successfully!")
        } catch (error) {
          console.log("Something went wrong", error.message)
        }
      }

return (

     <>
     <section>
        <div class="container py-4">
            <div class="row">
            <div class="col-lg-7 mx-auto d-flex justify-content-center flex-column">
                <h3 class="text-center">Edit state</h3>
                <form role="form" id="contact-form" method="post" autocomplete="off">
                <div class="card-body">
                    <div class="row">

                    <div class="col-md-6">
                    <h6>Status</h6>
                        <div class="input-group input-group-dynamic mb-4">
                        <input class="form-control"type="text" name="status" value={applicant.status} onChange={handleChange}/>
                        <input class="form-control"type="hidden" name="id" value={applicant._id} onChange={handleChange} />
                        </div>
                    </div>

                    <div class="col-md-6 ps-2">
                        <div class="input-group input-group-dynamic">
                    

                        </div>
                       
                    </div>
                    <button type="submit" class="btn bg-gradient-primary btn-lg w-50" onClick={()=>EidtHandler(applicant)} >Update</button>
                    </div>

                
                

                  

           



                </div>
                </form>
            </div>
            </div>
        </div>
        </section>
        </>
            
    )

}
