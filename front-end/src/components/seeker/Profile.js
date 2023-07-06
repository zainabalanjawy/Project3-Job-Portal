import { useState } from 'react';
import Profile from '../../../../models/profile';

export default function App(props) {
  const [newProfile, setNewProfile] = useState({});

  const changeHandler = (e) => {
    const profile = { ...newProfile };
    profile['seeker'] = props.id;
    profile[e.target.name] = e.target.value;
    console.log(profile);
    setNewProfile(profile);
  }

  const addPostHandler = (e) => {
    e.preventDefault();
    props.addProfile(newProfile);
  }

  return (
    <>
      <link rel="stylesheet" href="./public/profile.css" />
      <h1>Profile</h1>
      <form encType="multipart/form-data">
        <div>
          <label>Education</label>
          <input type="text" onChange={changeHandler} name="education" className="form-control" />
        </div>
        <div>
          <label>Experience</label>
          <input type="text" onChange={changeHandler} name="experience" className="form-control" />
        </div>
        <button onClick={addPostHandler} className="Update">Add Profile</button>
      </form>
    </>
  )
}