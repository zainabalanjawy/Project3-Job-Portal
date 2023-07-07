import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState ,useEffect} from 'react';

export default function AddDetails(props) {
  const [newDetails, setNewDetails] = useState({});

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
}
const allApp = app.map((p, index) => {
  return (
      <div key={index}>
          <td>Education: {p.About}</td><tr></tr>
          <td>Experiance: {p.Location}</td>
      
          {/* <td><button type="button" class="btn bg-gradient-primary btn-lg" onClick={() => hadleDelete(app._id)}>Add Profile
           </button></td>  */}
         
      </div>
  )
})
  return (
    <>
    {allApp}
      <link rel="stylesheet" href="./public/detalis.css"></link>
      <h1>Details</h1>
      <form encType="multipart/form-data">
        <div>
          <label>About</label>
          <input
            type="text"
            onChange={changeHandler}
            name="About"
            className="form-control"
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            onChange={changeHandler}
            name="Location"
            className="form-control"
          />
        </div>
        <input onClick={addPostHandler} className="Edit" type="submit" />
      </form>
    </>
  );
}
