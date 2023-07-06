import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


import {BrowserRouter as Router,Navigate, Route , Routes, Link ,useNavigate} from 'react-router-dom'


  

export default function ProviderHome(props) {
    const element = <FontAwesomeIcon icon={faSearch} />
    const navigate = useNavigate();


    const [posts, setPosts] = useState([])
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        getAllPosts()
    }, [])

    const deleteHandler = async (id) => {
        try {
          const response = await axios.post(
            `/provider/post/delete?id=${id}`
          )
        // console.log(posts.id)
          console.log("deleted successfully!")
        } catch (error) {
          console.log("Something went wrong", error)
        }
      }
  
    const getAllPosts = async () => {
        const response = await axios.get(`/provider/home/?id=${props.id}`)
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
            <div key={index}>
                <h4>{post.jobTitle}</h4>
                <p>{post.Location}</p>
                <p>{post.Salary}</p>
                <button type="button" class="btn bg-gradient-primary btn-lg" onClick={()=><Navigate to="/seeker/post/details" replace={true} post={post}/>}>Details</button>
                <button type="button" class="btn bg-gradient-primary btn-lg" onClick={() => deleteHandler(post._id)}>Delete</button>
                <button type="button" class="btn bg-gradient-primary btn-lg" onClick={() => navigate('/provider/post/edit', {state: {post}})}>Edit</button>

           
                {/* <Details post = {post}/> */}
                

           
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

    return (
        <div key={index}>
           <h4>{post.jobTitle}</h4>
            <p>{post.Location}</p>
            <p>{post.Salary}</p>
            <button type="button" class="btn bg-gradient-primary btn-lg" onClick={() => navigate('/seeker/post/details', {state: {post}})}>Details
       
            </button>  

            </div>
        )
    })
            

           

  
    return (
     <>
     <h1>Provider Home</h1>
     <div class="row text-center py-2 mt-3">
        <div class="col-4 mx-auto">
            <div class="input-group input-group-static">
      <span class="input-group-text">{element}</span>
     
     <input class="form-control" placeholder="Search" type="text" onChange={handleInputChange}/>
     <button onClick={handleSearch}>Search</button>
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

