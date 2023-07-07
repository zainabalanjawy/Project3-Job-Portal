import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react'
import {Form,Container, Row,Col,Button, Table,} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Details from './Details';
import {BrowserRouter as Router,Navigate, Route , Routes, Link,useNavigate} from 'react-router-dom'

  

export default function Home(props) {
    const element = <FontAwesomeIcon icon={faSearch} />
    const navigate = useNavigate(); 
   

    const [posts, setPosts] = useState([])
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        getAllPosts()
    }, [])

  
    const getAllPosts = async () => {
        const response = await axios.get('/seeker/post/view')
        console.log(response)
        setPosts(response.data)
    }

    function handleInputChange(event) {
        setInputValue(event.target.value);
      }
    
      function handleSearch() {
        if (inputValue.length > 0) {
            console.log("input",inputValue);
            const filtered_posts = posts.filter((p) => {
            // console.log("p",p);
            // console.log("posts",posts);
            return p.jobTitle.match(inputValue);
        });
        setPosts(filtered_posts)
        console.log(filtered_posts);
        }
        //props.onSearch(inputValue);
      }

    const allPosts = posts.map((post, index) => {

        return (
            <div class="col-lg-4 col-md-8">
            <div class="card" key={index}>
              <div class="card-body">
                {/* <img src="../../assets/img/team-2.jpg" alt="..." class="avatar avatar-lg border-radius-lg shadow mt-n5"/> */}
                <div class="author">
                  <div class="name">
                    <span>{post.jobTitle}</span>
                    <div class="stats">
                      <small><i class="far fa-clock"></i> {post.Location}</small>
                    </div>
                  </div>
                </div>
                <p class="mt-4">Salary: { post.Salary } BD</p>
                <button type="button" class="btn bg-gradient-primary btn-lg" onClick={() => navigate('/seeker/post/details', {state: {post}})}>Details
                </button>
              </div>
            </div>
          </div>
        )
    })

  
    return (
     <>
     <h1>Seeker Home</h1>
     <div class="row text-center py-2 mt-3">
        <div class="col-4 mx-auto">
            <div class="input-group input-group-dynamic mb-4">
      
      <input class="form-control" placeholder="Search" type="text"onChange={handleInputChange}/>
      {/* <span class="input-group-text">{element}</span> */}
      <button class="btn bg-gradient-primary btn-lg" onClick={handleSearch}>{element}</button>
    </div>
  </div>
</div>
<section class="py-5">
  <div class="container">
    <div class="row mt-6">
        {allPosts}
    </div>
    <hr class="horizontal dark my-5"/>
  </div>
</section>

    </>
    )
  }

