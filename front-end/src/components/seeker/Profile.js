import { useState } from 'react';
import axios from 'axios'
//import Profile from '../../../../models/Profile';/

export default function App(props) {
  const [newProfile, setNewProfile] = useState({});

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
  const response = await axios.get(`/seeker/profile=${props.id}`)
  console.log(response)
  sectApp(response.data)
}
const allApp = profile.map((app, index) => {
  return (
      <div key={index}>
          <td>{profile.post[0].jobTitle}</td>
          <td>{profile.status}</td>
      
          <td><button type="button" class="btn bg-gradient-primary btn-lg" onClick={() => hadleDelete(app._id)}>Add Profile
           </button></td> 
         
      </div>
  )
})
  return (
    <>
      <link rel="stylesheet" href="./public/profile.css" />
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
        <button onClick={addPostHandler} className="Update">Add Profile</button>
      </form>
    </>
  )
  }
