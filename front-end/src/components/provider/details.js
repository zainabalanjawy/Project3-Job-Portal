import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';

export default function AddDetails(props) {
  const [newDetails, setNewDetails] = useState({ About: '', Location: '' });

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

  return (
    <>
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