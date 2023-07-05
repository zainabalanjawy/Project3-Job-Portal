import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react'
import {Form,Container, Row,Col,Button, Table,} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Details from './Details';
import {BrowserRouter as Router,Navigate, Route , Routes, Link } from 'react-router-dom'

  

export default function Home() {
    const element = <FontAwesomeIcon icon={faSearch} />
   

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllPosts()
    }, [])

  
    const getAllPosts = async () => {
        const response = await axios.get('/seeker/post/view')
        console.log(response)
        setPosts(response.data)
    }

    const allPosts = posts.map((post, index) => {
        return (
            <div key={index}>
                <h4>{post.jobTitle}</h4>
                <p>{post.Location}</p>
                <p>{post.Salary}</p>
                <button type="button" class="btn bg-gradient-primary btn-lg" onClick={()=><Navigate to="/seeker/post/details" replace={true} post={post}/>}> 
           
                {/* <Details post = {post}/> */}
                

                </button>
                {/* <div className="App">
                    <table>
                        <tr>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Salary</th>
                        </tr>
                        <tr>
                            <td>{post.jobTitle}</td>
                            <td>{post.Location}</td>
                            <td>{post.Salary}</td>
                      
                        </tr>
                    </table>
                </div> */}
            </div>
        )
    })

  
    return (
     <>
     <h1>Seeker Home</h1>
     <div class="row text-center py-2 mt-3">
        <div class="col-4 mx-auto">
            <div class="input-group input-group-dynamic mb-4">
      <span class="input-group-text">{element}</span>
      <input class="form-control" placeholder="Search" type="text"/>
    </div>
  </div>
</div>

<div class="row text-center py-2 mt-3">
  <div class="col-12 mx-auto">
    {allPosts}
  </div>
</div>

    </>
    )
  }

