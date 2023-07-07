import React, { Component, useState } from 'react'
import { useLocation, useParams} from 'react-router-dom'
import axios from 'axios'
import {BrowserRouter as Router,Navigate, Route , Routes, Link ,useNavigate} from 'react-router-dom'

// import React, { useState } from "react";

export default function EditPost() {
    const navigate = useNavigate();
    const {state} = useLocation()
    // const {post} = state
    const[job,setJob] = useState(state.post)
    console.log(state.post)

    const handleChange = event => {
        const editJob = {...job}
        editJob[event.target.name] = event.target.value
        console.log(event.target.name + " ---- " + event.target.value)
        setJob(editJob)
    }

    // console.log(job.jobTitle)
    // console.log(job.Location)
    console.log(job)
    

    const EidtHandler = async (job) => {
        try {
            job.newId = job._id;

            console.log("Job---",job);
            console.log("Job---",job._id);
            // console.log("job",job);
            // console.log(job._id)
          const response = await axios.post(
            `provider/post/edit?id=${job._id}`, job
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
                <h3 class="text-center">Edit Post</h3>
                <form role="form" id="contact-form" method="post" autocomplete="off">
                <div class="card-body">
                    <div class="row">

                    <div class="col-md-6">
                    <h6>Job Title</h6>
                        <div class="input-group input-group-dynamic mb-4">
                        <input class="form-control"type="text" name="jobTitle" value={job.jobTitle} onChange={handleChange} />
                        <input class="form-control"type="hidden" name="id" value={job._id} onChange={handleChange} />
                        </div>
                    </div>

                    <div class="col-md-6 ps-2">
                    <h6>Job Nature</h6>
                        <div class="input-group input-group-dynamic">
                        <input type="text" class="form-control" name="jobNature" value={job.jobNature} onChange={handleChange} aria-label="Last Name..." />
                        </div>
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-md-6">
                    <h6>Salary</h6>
                        <div class="input-group input-group-dynamic mb-4">
                        <input class="form-control" name="Salary" value={job.Salary} onChange={handleChange} type="text" />
                        </div>
                    </div>

                    <div class="col-md-6 ps-2">
                    <h6>Location</h6>
                        <div class="input-group input-group-dynamic">
                        {/* <label class="form-label">{post.Location}</label> */}
                        <input type="text" class="form-control" name="Location" value={job.Location} onChange={handleChange} />
                        </div>
                    </div>
                    </div>

                    <h6>Description</h6>
                    <div class="input-group mb-4 input-group-static">
                    
                    <textarea class="form-control" name="description" id="message" rows="4" value={job.description} onChange={handleChange} ></textarea>
                    </div>

                    <h6>Requirments</h6>
                    <div class="input-group mb-4 input-group-static">
                    <textarea name="requirement" class="form-control" id="message" rows="4" value={job.requirement} onChange={handleChange} ></textarea>
                    </div>


                    <h6>Responsibilities</h6>
                    <div class="input-group mb-4 input-group-static">
                    <textarea name="responsibilities"  class="form-control" id="message" rows="4" value={job.responsibilities} onChange={handleChange}></textarea>
                    </div>


                    <div class="row">
                    <div class="col-md-12">
                        <button type="submit" class="btn bg-gradient-primary btn-lg w-100" onClick={()=>EidtHandler(job)} >Update</button>
                    </div>
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
