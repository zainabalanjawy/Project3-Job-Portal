import { useState,useEffect } from 'react';
import axios from 'axios'
//import Profile from '../../../../models/Profile';/

export default function App(props) {
  const [newProfile, setNewProfile] = useState({});
  const [exist, setExist] = useState(false);
  const changeHandler = (e) => {
    const profile = { ...newProfile };
    profile['user'] = props.id;
    profile[e.target.name] = e.target.value;
    console.log(profile);
    setNewProfile(profile);
  }
  const addPostHandler = () =>{
    axios.post("/seeker/profile", newProfile)
    .then(res=>{
      console.log(res.data);
    }
    )
  }
  const [app, sectApp] = useState([])

  useEffect(() => {
    getAllApp()
}, [])
const getAllApp = async () => {
  const response = await axios.get(`/seeker/profile?id=${props.id}`)
  console.log(response)
  console.log("exist",exist);
  sectApp(response.data)
  if(response.data.length == 0)
  setExist(false)
  else 
  setExist(true)
  
}
const allApp = app.map((p, index) => {
  return (
      // <div key={index}>
      //     <td>Education: {p.Edication}</td><tr></tr>
      //     <td>Experiance: {p.Experince}</td>
      // </div>
      
      <header class="header-rounded-images">
        <div class="page-header min-vh-90">
          <img class="position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block border-radius-section border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0" src="https://media.istockphoto.com/id/1212523103/photo/business-man-wearing-tie-and-elegant-shirt-over-pink-isolated-background-with-a-happy-and.jpg?s=612x612&w=0&k=20&c=oCHi3-LyEyLl7gUSrtz8XbkyTVm_bJG5K1mDUHE9T6o=" alt="image" loading="lazy"/>
          <div class="container">
            <div class="row">
              <div class="col-lg-7 d-flex">
                <div class="card card-body blur text-md-start text-center px-sm-5 shadow-lg mt-sm-5 py-sm-5">
                  <h2 class="text-dark mb-4">{p.user[0].fullName}</h2>
      
                  <p class="lead text-dark pe-md-5 me-md-5">
                  Education: {p.Edication}
                  </p>
                  <p class="lead text-dark pe-md-5 me-md-5">
                  Experiance: {p.Experince}
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
                    <h6>Education</h6>
                    <div class="input-group mb-4 input-group-static">
                    <textarea  class="form-control" id="message" rows="4" onChange={changeHandler} name="Edication"  ></textarea>
                    </div>
                    <h6>Experiance</h6>
                    <div class="input-group mb-4 input-group-static">
                    <textarea  class="form-control" id="message" rows="4" onChange={changeHandler} name="Experince"  ></textarea>
                    </div>
                    <input type="hidden" value="cv" onChange={changeHandler} name="CV" className="form-control" />
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
  
