import React, { useState,useEffect } from 'react'

import {BrowserRouter as Router,Navigate, Route , Routes, Link, useNavigate} from 'react-router-dom'
import logo from './logo.jpeg'; // with import

import SignUpSeeker from './components/seeker/Signup'
import SignUpProvider from './components/provider/Signup'
import About from './components/user/About'
import Contact from './components/user/Contact'
import Signin from './components/user/Signin'
import AppSeeker from './components/seeker/App'
import AppProvider from './components/provider/App'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

import Home from './components/seeker/Home'

import DetailsSeeker from './components/seeker/Details'

import SeekerDetails from './components/seeker/Details'

import ProviderHome from './components/provider/Home'
import ProviderEditPost from './components/provider/EditPost'
import ProviderAddPost from './components/provider/AddPost'




import Profile from './components/seeker/Profile'
import Details from './components/provider/details'
import ProviderDetails from './components/provider/ProviderDetails'
import Status from './components/provider/EditStatus'


export default function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [user,setUser] = useState({})
  const navigate = useNavigate();

  //Create use effect 
  useEffect(()=>{
    let token = localStorage.getItem("token")
    if(token !=null)
    {
      let user = jwt_decode(token)
      if(user)
      {
        setIsAuth(true)
        setUser(user)
      }
      else if(!user)
      {
        localStorage.removeItem("token")
      }
    }
  },[])

  //Function to set new user 
  const registerSeekerHandler = (user) =>{
    console.log("jiii");
    axios.post("/seeker/signup", user)
    .then(res=>{console.log(res);})
    .catch(e=>{console.log(e.message);})
}

  //Function to set new user 
  const registerProviderHandler = (user) =>{
    axios.post("/provider/signup", user)
    .then(res=>{console.log(res);})
    .catch(e=>{console.log(e.message);})
}

    //Function to login as  user 
    const loginHandler = (credintals) =>{
      axios.post("/signin", credintals)
      .then(res=>{
        console.log(res.data.token);
        
        let token = res.data.token
        if(token != null)
        {
          localStorage.setItem("token",token)
          let user = jwt_decode(token)
          setIsAuth(true)
          setUser(user)
          if(user.user.type=='provider')
          navigate('/provider/home')
          // return <Navigate to="/provider/home" replace={true} />
          else
          navigate('/seeker/home')
          // return <Navigate to="/seeker/home" replace={true} />
       
        }
       
      }
      )

   
      .catch(e=>{console.log(e.message);})
  }

      
  const logoutHandler = (e)=>{
    e.preventDefault()
    localStorage.removeItem("token")
    setIsAuth(false)
    setUser(null)
  
  }

  //Function to login as  user 
  const addPostHandler = (credintals) =>{
    axios.post("/provider/post/add", credintals)
    .then(res=>{
      console.log(res.data);
    }
    )
 
    .catch(e=>{console.log(e.message);})
}


  if(isAuth)
  {
    // Seeker site
    if(user.user.type == 'seeker')
    {
      return(
        <>
        <div>
          <div>
          <title>Hello, world!</title>  
          <meta charSet="utf-8"/>
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"/>
          
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
          
          {/* <link href="assets/css/material-kit.css?v=3.0.0" rel="stylesheet" /> */}
          </div>

          <body>
        <nav class="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent">
          <div class="container">
            <a class="navbar-brand  text-white " href="/" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
              iJob
            </a>
        <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon mt-2">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ms-lg-12 ps-lg-5" id="navigation">
          <ul class="navbar-nav navbar-nav-hover ms-auto">

            {/* <li class="nav-item dropdown dropdown-hover mx-2">
              <a class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuBlocks" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="material-icons opacity-6 me-2 text-md">view_day</i>
                About
              </a>
            </li> */}
              

            <li class="nav-item mx-2">
              <Link to="/seeker/home" class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                Home
              </Link>
            </li>
            <li class="nav-item mx-2">
              <Link to="/seeker/app" class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                Applications
              </Link>
            </li>
            <li class="nav-item mx-2">
              <Link to="/seeker/profile" class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                Profile
              </Link>
            </li>

            <li class="nav-item ms-lg-auto my-auto ms-3 ms-lg-0 mt-2 mt-lg-0">
          <nav>
            <div>
              <Link class="btn btn-sm  bg-gradient-primary mb-0 me-1 mt-2 mt-md-0" to="/logout" onClick={logoutHandler}>Signout</Link> &nbsp;
            </div>
          </nav>

            </li>
        

          </ul>
        </div>
      </div>
    </nav>

    <div class="page-header page-header-seeker min-vh-80" /*style="background-image: url('https://images.unsplash.com/photo-1630752708689-02c8636b9141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2490&q=80')"*/>
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto">
            <div class="text-center">
              <h1 class="text-white">Welcome Back to <span class="highliter"> iJob </span></h1>
              <h3 class="text-white">Find Best Jobs For Your Future.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
      <div class="container">
        <div class="section text-center">
          {/* COMPONENTS */}
          <h2 class="title">
            
          <Routes>
            <Route path='/seeker/home' element={<Home id={user.user.id}/>}/>

            <Route path='/seeker/post/details' element={<DetailsSeeker id={user.user.id}/>}/>


            <Route path='/seeker/post/details' element={<SeekerDetails/>}/>
            {/* <Route path='/provider/status/editstatus' element={<Status/>}/> */}

            <Route path='/seeker/app' element={<AppSeeker id={user.user.id}/>}/>


            <Route path='/provider/app'element={<AppProvider />}  />


            <Route path='/seeker/profile' element={<Profile id={user.user.id}/>}/>


          </Routes>
          
          </h2>
        </div>
      </div>
    </div>
    <footer class="footer pt-5 mt-5">
      <div class="container">
        <div class=" row">
          <div class="col-md-3 mb-4 ms-auto">
            <div>
              <a href="/">
                <img src={logo} class="mb-3 footer-logo" alt="main_logo"/>
              </a>
              <h6 class="font-weight-bolder mb-4">iJob</h6>
            </div>
            <div>
              <ul class="d-flex flex-row ms-n3 nav">
              </ul>
            </div>
          </div>
          <div class="col-md-2 col-sm-6 col-6 mb-4">
            <div>
              <h6 class="text-sm">Company</h6>
              <ul class="flex-column ms-n3 nav">
                <li class="nav-item">
                  <a class="nav-link" href="/about" target="_blank">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="col-md-2 col-sm-6 col-6 mb-4">
            <div>
              <h6 class="text-sm">Help & Support</h6>
              <ul class="flex-column ms-n3 nav">
                <li class="nav-item">
                  <a class="nav-link" href="/contact" target="_blank">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-2 col-sm-6 col-6 mb-4 me-auto">
            
          </div>
          <div class="col-12">
            <div class="text-center">
              <p class="text-dark my-4 text-sm font-weight-normal">
                All rights reserved. Copyright © GA, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </body>
    </div> 
        </>
      )
    }
    // Provider site
    else if(user.user.type == 'provider')
    {
      return(
        <>
        <div>
          <div>
          <title>Hello, world!</title>
          
          <meta charSet="utf-8"/>
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"/>
          
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
          
          {/* <link href="assets/css/material-kit.css?v=3.0.0" rel="stylesheet" /> */}
          </div>


         
         

          
            <Routes>

            <Route path='/seeker/post/details' element={<SeekerDetails/>}/>
            
            <Route path='/seeker/app' element={<AppSeeker/>}/>
            {/* <Route path='/provider/status/editstatus' element={<Status/>}/> */}
            </Routes>

          
          

          <body>

        <nav class="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent">
          <div class="container">
            <a class="navbar-brand  text-white " href="/" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
              iJob
            </a>
        <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon mt-2">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ms-lg-12 ps-lg-5" id="navigation">
          <ul class="navbar-nav navbar-nav-hover ms-auto">

            {/* <li class="nav-item dropdown dropdown-hover mx-2">
              <a class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuBlocks" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="material-icons opacity-6 me-2 text-md">view_day</i>
                About
              </a>
            </li> */}

            <li class="nav-item mx-2">
              
              <Link to="/provider/home" class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                Home
              </Link>
              
            </li>
            <li class="nav-item mx-2">
              
              <Link to="/provider/post/add" class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                Posts
              </Link>
              
            </li>
            <li class="nav-item mx-2">
              
              <Link to="/provider/details" class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                Profile
              </Link>
              
            </li>


            <li class="nav-item ms-lg-auto my-auto ms-3 ms-lg-0 mt-2 mt-lg-0">
          
          <nav>
            <div>
              <Link class="btn btn-sm  bg-gradient-primary mb-0 me-1 mt-2 mt-md-0" to="/logout" onClick={logoutHandler}>Signout</Link> &nbsp;
            </div>
          </nav>

        
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="page-header page-header-provider min-vh-80" /*style="background-image: url('https://images.unsplash.com/photo-1630752708689-02c8636b9141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2490&q=80')"*/>
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto">
            <div class="text-center">
              <h1 class="text-white">Welcome Back to <span class="highliter"> iJob </span></h1>
              <h3 class="text-white">Spread Your Avilable Jobs With Us.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
      <div class="container">
        <div class="section text-center">
          {/* COMPONENTS */}
          <h2 class="title">
            
          <Routes>

            <Route path='/provider/app'element={< AppProvider />}  />
            <Route path='/provider/details' element={<Details id={user.user.id}/>}/>
            <Route path='/provider/ProviderDetails' element={<ProviderDetails id={user.user.id}/>}/>
            <Route path='/provider/home' element={<ProviderHome id={user.user.id}/>}/>
            <Route path='/provider/post/add' element={<ProviderAddPost addPost={addPostHandler} id={user.user.id}/>}/>
            <Route path='/provider/post/edit' element={<ProviderEditPost/>}/>
             <Route path='/provider/status/editstatus' element={<Status/>}/>

          </Routes>
          
          </h2>
        </div>
      </div>
    </div>
    <footer class="footer pt-5 mt-5">
      <div class="container">
        <div class=" row">
          <div class="col-md-3 mb-4 ms-auto">
            <div>
              <a href="/">
                <img src={logo} class="mb-3 footer-logo" alt="main_logo"/>
              </a>
              <h6 class="font-weight-bolder mb-4">iJob</h6>
            </div>
            <div>
              <ul class="d-flex flex-row ms-n3 nav">
              </ul>
            </div>
          </div>
          <div class="col-md-2 col-sm-6 col-6 mb-4">
            <div>
              <h6 class="text-sm">Company</h6>
              <ul class="flex-column ms-n3 nav">
                <li class="nav-item">
                  <a class="nav-link" href="/about" target="_blank">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="col-md-2 col-sm-6 col-6 mb-4">
            <div>
              <h6 class="text-sm">Help & Support</h6>
              <ul class="flex-column ms-n3 nav">
                <li class="nav-item">
                  <a class="nav-link" href="/contact" target="_blank">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-2 col-sm-6 col-6 mb-4 me-auto">
            
          </div>
          <div class="col-12">
            <div class="text-center">
              <p class="text-dark my-4 text-sm font-weight-normal">
                All rights reserved. Copyright © GA, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </body>
    </div> 
        </>
      )
    }
  }
  else 
  {
    return (
      <div>
        <div>
        <title>Hello, world!</title>
       
        <meta charSet="utf-8"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"/>
        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
        
        {/* <link href="assets/css/material-kit.css?v=3.0.0" rel="stylesheet" /> */}
        </div>

        <body>

  <nav class="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent">
    <div class="container">
      <a class="navbar-brand  text-white " href="/" rel="tooltip" title="ijob" data-placement="bottom" target="_blank">
        iJob
      </a>
      <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ms-lg-12 ps-lg-5" id="navigation">
        <ul class="navbar-nav navbar-nav-hover ms-auto">
          <li class="nav-item dropdown dropdown-hover mx-2 ms-lg-6">
            <a href="/" class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuPages2" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="material-icons opacity-6 me-2 text-md" >dashboard</i>
              Home
            
            </a>
          </li>

          <li class="nav-item dropdown dropdown-hover mx-2">
            <a href="/about" class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuBlocks" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="material-icons opacity-6 me-2 text-md">view_day</i>
              About
            </a>
          </li>

          <li class="nav-item dropdown dropdown-hover mx-2">
            <a href="/contact" class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="material-icons opacity-6 me-2 text-md">article</i>
              Contact
             
            </a>
          </li>

          <li class="nav-item ms-lg-auto my-auto ms-3 ms-lg-0 mt-2 mt-lg-0">
          
          <nav>
            <div>
              <Link class="btn btn-sm  bg-gradient-primary mb-0 me-1 mt-2 mt-md-0" to="/signin">Signin</Link> &nbsp;
            </div>
          </nav>

        
            </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="page-header min-vh-80" /*style="background-image: url('https://images.unsplash.com/photo-1630752708689-02c8636b9141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2490&q=80')"*/>
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="text-center">
            <h1 class="text-white">Find the most exciting startup <span class="highliter"> JOBS. </span></h1>
            <h3 class="text-white">Signup now!</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <div class="container">
      <div class="section text-center">
        {/* COMPONENTS */}
        <h2 class="title">


        
          <nav>
            <div>
              <Link class="btn btn-sm  bg-gradient-primary mb-0 me-1 mt-2 mt-md-0" to="/seeker/signup">Signup as Seeker</Link> &nbsp;
              <Link class="btn btn-sm  bg-gradient-primary mb-0 me-1 mt-2 mt-md-0"to="/provider/signup">Signup as Provider</Link> &nbsp;
              {/* <Link to="/signin">Signin</Link> &nbsp; */}
            </div>
          </nav>
          <Routes>
              <Route path='/seeker/signup' element={<SignUpSeeker register={registerSeekerHandler}/>}/>
              <Route path='/provider/signup' element={<SignUpProvider register={registerProviderHandler}/>}/>
              <Route path='/signin' element={<Signin login={loginHandler}/>}/>
              <Route path='/about' element={<About />}/>
              <Route path='/contact' element={<Contact />}/>
          </Routes>
        
        </h2>
      </div>
    </div>
  </div>
  <footer class="footer pt-5 mt-5">
    <div class="container">
      <div class=" row">
        <div class="col-md-3 mb-4 ms-auto">
          <div>
            <a href="/">
              <img src={logo}class="mb-3 footer-logo" alt="main_logo"/>
            </a>
            <h6 class="font-weight-bolder mb-4">iJob</h6>
          </div>
          <div>
            <ul class="d-flex flex-row ms-n3 nav">
            </ul>
          </div>
        </div>
        <div class="col-md-2 col-sm-6 col-6 mb-4">
          <div>
            <h6 class="text-sm">Company</h6>
            <ul class="flex-column ms-n3 nav">
              <li class="nav-item">
                <a class="nav-link" href="/about" target="_blank">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="col-md-2 col-sm-6 col-6 mb-4">
          <div>
            <h6 class="text-sm">Help & Support</h6>
            <ul class="flex-column ms-n3 nav">
              <li class="nav-item">
                <a class="nav-link" href="/contact" target="_blank">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2 col-sm-6 col-6 mb-4 me-auto">
          
        </div>
        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              All rights reserved. Copyright © GA, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</body>
      </div>
     
    )
  }
}



