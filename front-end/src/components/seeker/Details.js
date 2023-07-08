import React, { Component } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios, { all } from 'axios';
import { BrowserRouter as Router, Routes, Route, Link ,Navigate,useNavigate} from 'react-router-dom'

export default function Details(props) {
  const navigate = useNavigate();
    
    // const {post} = useParams()
    const {state} = useLocation()
    const {post} = state
   //const {id} = useParams();
    const handleApply = async () => {
     console.log(props.id);
      const response = await axios.post(`/seeker/post/detailes?id=${props.id}`,{post})
      console.log(response)
      navigate('/seeker/app')

  }
    return(
        <>
         <h1>Details</h1>
         <div class="big-container">
<div class="card card2">
  <div class="card_header">
    <h3 class="card_header__title">{post.jobTitle}</h3>
  </div>
  <div class="card_description">
    <div class="card_description__content">
      <p class="card_description__content-text">job Nature: {post.jobNature} </p>
      <p class="card_description__content-text">Salary: {post.Salary} </p>
      <p class="card_description__content-text">Location: {post.Location} </p>
      

      <h4 class="card_header__title">Description: </h4>
      <p class="card_description__content-text">{post.description}</p>

      <h4 class="card_header__title">Requirments: </h4>
      <p class="card_description__content-text">{post.requirement} </p>

       <h4 class="card_header__title">Responsibilities: </h4>
      <p class="card_description__content-text">{post.responsibilities} </p>
      
     
    </div>
  </div>
  <div class="card_button">
    <form>
      <input type="hidden" name="post" value={post._id}></input>
      {/* <input type="hidden" name="user" value={props.id}></input> */}
      <button type="button" class="btn bg-gradient-primary btn-lg" onClick={()=>{handleApply()}}>Apply</button>
    </form>
  
  </div>
</div>
<section class="py-4">
  <div class="container">
    <div class="row justify-space-between py-2">
      <div class="col-6 mx-auto">
        <div class="card shadow-lg mt-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <a class="d-block blur-shadow-image">
              <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80" alt="img-blur-shadow" class="img-fluid shadow border-radius-lg"/>
            </a>
          </div>
          <div class="card-body">
            <h4>{post.Provider[0].fullName}</h4>
            {/* <p>
             About
            </p> */}
             {/* <p>
             Location
            </p> */}

            <h5 class="text-info mb-0">Phone number: +973 {post.Provider[0].phone}</h5>
            <div class="col-lg-4 col-4">
                
              
              </div>
            {/* <a href="javascript:;" class="text-primary icon-move-right">More about us
              <i class="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 
</div>
</>
    )
}
