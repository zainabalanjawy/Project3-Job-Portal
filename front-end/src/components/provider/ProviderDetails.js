import React, { Component } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios, { all } from 'axios';
import {BrowserRouter as Router,Navigate, Route , Routes, Link ,useNavigate} from 'react-router-dom'


export default function ProviderDetails(props) {
    const navigate = useNavigate();
   // const {post} = useParams()
   const {state} = useLocation()
   const {post} = state
  //const {id} = useParams();

  const deleteHandler = async (id) => {
    try {
      const response = await axios.post(
        `/provider/post/delete?id=${id}`
      )
    // console.log(posts.id)
      console.log("deleted successfully!")
      navigate('/provider/home')

    } catch (error) {
      console.log("Something went wrong", error)
    }

  }


   return(
       <>
         <h1>Details</h1>
<div class="big-container">
<div class="card card3">
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

     <button type="button" class="btn bg-gradient-primary btn-lg" onClick={() => deleteHandler(post._id)}>Delete</button>&nbsp;&nbsp;&nbsp;
   <button type="button" class="btn bg-gradient-primary btn-lg" onClick={() => navigate('/provider/post/edit', {state: {post}})}>Edit</button>&nbsp;&nbsp;&nbsp;
   <button type="button" class="btn bg-gradient-primary btn-lg" onClick={() => navigate('/provider/app', {state: {post}})}>View Applicants</button>&nbsp;&nbsp;&nbsp;

  
  </div>
</div>
</div>
</>


   )
}
