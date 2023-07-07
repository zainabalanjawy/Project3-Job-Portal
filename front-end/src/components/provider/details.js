import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState ,useEffect} from 'react';

export default function AddDetails(props) {
  const [newDetails, setNewDetails] = useState({});
  const [exist, setExist] = useState(false);

  const changeHandler = (e) => {
    const details = { ...newDetails };
    details['user'] = props.id;
    details[e.target.name] = e.target.value;
    setNewDetails(details);
  };

  const addPostHandler = (e) => {
    e.preventDefault();
    if (!newDetails.About || !newDetails.Location) {
      alert('Please fill in all the required fields');
      return;
    }
    axios
      .post('/provider/details', newDetails)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [app, sectApp] = useState([])
  useEffect(() => {
    getAllApp()
}, [])
const getAllApp = async () => {
  const response = await axios.get(`/provider/details?id=${props.id}`)
  console.log(response)
  sectApp(response.data)
  if(response.data.length == 0)
  setExist(false)
  else 
  setExist(true)
  
}
const allApp = app.map((p, index) => {
  return (
    <header class="header-rounded-images">
    <div class="page-header min-vh-90">
      <img class="position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block border-radius-section border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0" src="https://media.istockphoto.com/id/1212523103/photo/business-man-wearing-tie-and-elegant-shirt-over-pink-isolated-background-with-a-happy-and.jpg?s=612x612&w=0&k=20&c=oCHi3-LyEyLl7gUSrtz8XbkyTVm_bJG5K1mDUHE9T6o=" alt="image" loading="lazy"/>
      <div class="container">
        <div class="row">
          <div class="col-lg-7 d-flex">
            <div class="card card-body blur text-md-start text-center px-sm-5 shadow-lg mt-sm-5 py-sm-5">
              <h2 class="text-dark mb-4">{p.user[0].fullName}</h2>
  
              <p class="lead text-dark pe-md-5 me-md-5">
              About: {p.About}
              </p>
              <p class="lead text-dark pe-md-5 me-md-5">
              Location: {p.Location}
              </p>
              {/* <div class="buttons">
                <button type="button" class="btn bg-gradient-primary mt-4">Contact Us</button>
                <button type="button" class="btn btn-outline-secondary mt-4 ms-2">Read More</button>
              </div> */}
              <br/>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
})

if(!exist)
{
  return (
    <>
      {/* <link rel="stylesheet" href="./public/profile.css" /> */}
      <h1>Profile</h1>
      <section>
        <div class="container py-4">
            <div class="row">
            <div class="col-lg-7 mx-auto d-flex justify-content-center flex-column">
                <h3 class="text-center">Edit Profile</h3>
                <form encType="multipart/form-data" role="form" id="contact-form" method="post" autocomplete="off">
                <div class="card-body">
                    <h6>About</h6>
                    <div class="input-group mb-4 input-group-static">
                    <textarea  class="form-control" id="message" rows="4" onChange={changeHandler} name="About"  ></textarea>
                    </div>
                    <h6>Location</h6>
                    <div class="input-group mb-4 input-group-static">
                    <textarea  class="form-control" id="message" rows="4" onChange={changeHandler} name="Location"  ></textarea>
                    </div>
                    {/* <input type="hidden" value="cv" onChange={changeHandler} name="CV" className="form-control" /> */}
                    <div class="row">
                    <div class="col-md-12">
                        <button onClick={addPostHandler}  class="btn bg-gradient-primary btn-lg w-100" >Add Profile</button>
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

  else 
{
  return(
    <>
  
    <link rel="stylesheet" href="./public/profile.css" />
    <h1>Profile</h1>
    {allApp}
  </>
  )
}
}
