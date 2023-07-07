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
      <div key={index}>
          <td>Education: {p.Edication}</td><tr></tr>
          <td>Experiance: {p.Experince}</td>
      
          {/* <td><button type="button" class="btn bg-gradient-primary btn-lg" onClick={() => hadleDelete(app._id)}>Add Profile
           </button></td>  */}
         
      </div>
  )
})


if(!exist)
{
  return (
    <>
      {/* <link rel="stylesheet" href="./public/profile.css" /> */}
      <h1>Profile</h1>
  
      <form encType="multipart/form-data">
        <div>
          <label>Education</label>
          <input type="text" onChange={changeHandler} name="Edication" className="form-control" />
        </div>
        <div>
          <label>Experience</label>
          <input type="text" onChange={changeHandler} name="Experince" className="form-control" />
        </div>
        <div>
          
          <input type="hidden" value="cv" onChange={changeHandler} name="CV" className="form-control" />
        </div>
        <button onClick={addPostHandler} class="btn bg-gradient-primary btn-lg" >Add Profile</button>
      </form>
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
  
