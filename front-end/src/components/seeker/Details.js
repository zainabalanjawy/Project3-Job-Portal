import React, { Component } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios, { all } from 'axios';

export default function Details(props) {
    // const {post} = useParams()
    const {state} = useLocation()
    const {post} = state
   //const {id} = useParams();
    const handleApply = async () => {
     console.log(props.id);
      const response = await axios.post(`/seeker/post/detailes?id=${props.id}`,{post})
      console.log(response)
  }


    return(
        <>
         <h1>Details</h1>
         
<div class="card">
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
</>
    )
}
