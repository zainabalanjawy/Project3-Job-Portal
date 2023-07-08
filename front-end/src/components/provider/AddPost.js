import React, { useState } from 'react'
import {BrowserRouter as Router,Navigate, Route , Routes, Link ,useNavigate} from 'react-router-dom'


export default function AddPost(props) {
  const navigate = useNavigate();
    //Set state for the post into new post
    const [newPost, setNewPost] = useState({});

    //Function to handle any change in value of fields
    const changeHandler = (e) =>{
        //Set copy of newuser into user every time
        const post = {...newPost}
        post['Provider']=props.id
        //Set key with value for fields sent in the form
        post[e.target.name]= e.target.value

        console.log(post)
        //Set post to new post
        setNewPost(post)
    }

    //Function to add new post 
    const addPostHandler = (e) =>{
        // e.preventDefult()
        props.addPost(newPost)
        navigate('/provider/home')
    }

    return (
  <>
  <section>
  <div class="container py-4">
    <div class="row text-center py-3 mt-3">
      <div class="col-lg-7 mx-auto">
        <h3 class="text-center">Add New Post</h3>
        <form role="form" id="contact-form" method="post" autocomplete="off">
          <div class="card-body">
            <div class="mb-4">
              <div class="input-group input-group-static">

              <label >Job Title</label>   
              <input type="text" onChange={changeHandler} name="jobTitle" class="form-control"/>
              </div>

            </div>
            <div class="mb-4">
              <div class="input-group input-group-static">
                <label >Job Responsibilities</label>
                <textarea onChange={changeHandler} name="responsibilities" rows="4" class="form-control"></textarea>
                {/* <input type="text" onChange={changeHandler} name="responsibilities" class="form-control"/> */}
              </div>
            </div>


            <div class="mb-4">
              <div class="input-group input-group-static">
              <label >Job Description</label>
              <textarea onChange={changeHandler} name="description" rows="4" class="form-control"></textarea>
               {/* <input type="text" onChange={changeHandler} name="description" class="form-control"/> */}
              </div>
            </div>
            <div class="mb-4">
              <div class="input-group input-group-static">
                <label >Job Requirement</label>
                <textarea onChange={changeHandler} name="requirement" rows="4" class="form-control"></textarea>
                {/* <input type="text" onChange={changeHandler} name="requirement" class="form-control"/> */}
              </div>
            </div>
            
            <div class="mb-4">
              <div class="input-group input-group-static">
              <label >Salary</label>
                <input type="number" onChange={changeHandler} name="Salary" class="form-control"/>
              </div>
            </div>

            <div class="mb-4">
              <div class="input-group input-group-static">
              <label >Location</label>
                <input type="text" onChange={changeHandler} name="Location" class="form-control"/>
              </div>
            </div>


            <div class="mb-4">
              <div class="input-group input-group-static">
              <label >Job Nature</label>
                <input type="text" onChange={changeHandler} name="jobNature" class="form-control"/>
              </div>
            </div>

            <input type="hidden" name="Provider" value={props.id} class="form-control"/>
            <div class="row">
              <div class="col-md-12">
                <input value="Add Post" onClick={addPostHandler} class="btn bg-gradient-primary w-100 primary" type="Signin"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
  {/* <section>

  <div class="container py-4">
    <div class="row text-center py-3 mt-3">
      <div class="col-lg-7 mx-auto">
        <h3 class="text-center">Add New Post</h3>
        <form role="form" id="contact-form" method="post" autocomplete="off">
          <div class="card-body">
            <div class="mb-4">
              <div class="input-group input-group-dynamic">
                <label >Job Title</label>
              
                <input type="text" onChange={changeHandler} name="jobTitle" class="form-control"/>
              </div>
            </div>
            <div class="mb-4">
            <div class="input-group input-group-dynamic">
                <label >Job Responsibilities</label>
                <input type="text" onChange={changeHandler} name="responsibilities" class="form-control"/>
              </div>
            </div>
            <div class="mb-4">
            <div class="input-group input-group-dynamic">
                <label >Job Description</label>
                <input type="text" onChange={changeHandler} name="description" class="form-control"/>
              </div>
            </div>
            <div class="mb-4">
            <div class="input-group input-group-dynamic">
                <label >Job Requirement</label>
                <input type="text" onChange={changeHandler} name="requirement" class="form-control"/>
              </div>
            </div>
            <div class="mb-4">
            <div class="input-group input-group-dynamic">
                <label >Salary</label>
                <input type="number" onChange={changeHandler} name="Salary" class="form-control"/>
              </div>
            </div>
            <div class="mb-4">
            <div class="input-group input-group-dynamic">
                <label >Location</label>
                <input type="text" onChange={changeHandler} name="Location" class="form-control"/>
              </div>
            </div>
            <div class="mb-4">
              <div class="input-group input-group-dynamic">
                <label >Job Nature</label>
                <input type="text" onChange={changeHandler} name="jobNature" class="form-control"/>
              </div>
            </div>
            <input type="hidden" name="Provider" value={props.id} class="form-control"/>
            <div class="row">
              <div class="col-md-12">
                <input value="Add Post" onClick={addPostHandler} class="btn bg-gradient-primary w-100 primary" type="Signin"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section> */}

    </>
  )
}

