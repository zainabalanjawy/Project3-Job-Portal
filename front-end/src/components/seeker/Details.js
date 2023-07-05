import React, { Component } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function Details() {
    // const {post} = useParams()
    const {state} = useLocation()
    const {post} = state
    // {post.map(post => <div>{post.jobTitle}</div>)}
    /* const allPosts = props.id.map((post, index) => {

}
//         return (
//             <div key={index}>
//                 <button type="button" class="btn bg-gradient-primary btn-lg" > 
//                 <h4>{post.jobTitle}</h4>
//                 <p>{post.Location}</p>
//                 <p>{post.Salary}</p>
//                 </button>
//                 {/* <div className="App">
//                     <table>
//                         <tr>
//                             <th>Title</th>
//                             <th>Location</th>
//                             <th>Salary</th>
//                         </tr>
//                         <tr>
//                             <td>{post.jobTitle}</td>
//                             <td>{post.Location}</td>
//                             <td>{post.Salary}</td>
                      
//                         </tr>
//                     </table>
//                 </div> */
//             // </div>
//         // )
//     // })

    return(
        <>
         <h1>Details</h1>
{/*        
        {post.jobTitle}
        {post.jobNature}
        {post.requirement}
        {post.description}
        {post.responsibilities}
        {post.Salary}
        {post.Location} */}

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
  <button type="button" class="btn bg-gradient-primary btn-lg" >Apply</button>
  </div>
</div>
</>
    )
}
