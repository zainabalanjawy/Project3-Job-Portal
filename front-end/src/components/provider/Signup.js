import React, { useState } from 'react'
import {Container, Form, Button } from 'react-bootstrap'


export default function Signup(props) {
    //Set state for the user into new user
    const [newuser, setNewUser] = useState({});

    //Function to handle any change in value of fields
    const changeHandler = (e) =>{
        //Set copy of newuser into user every time
        const user = {...newuser}

        //Set key with value for fields sent in the form
        user[e.target.name]= e.target.value

        console.log('user',user)
        //Set user to new user
        setNewUser(user)
    }

    //Function to pass the new user after click
    const registerHandler = (event) =>{
        event.preventDefault()
       props.register(newuser)
    }


  return (
    <>
    <h1>Signup as Provider</h1>
    <form encType="multipart/form-data">
    <div>
        <label>Email</label>
        <input onChange={changeHandler} type="text" name="emailAddress"/>
    </div>
    <div>
        <label>Username</label>
        <input onChange={changeHandler} type="text" name="username"/>
    </div>
    <div>
        <label>Full name</label>
        <input onChange={changeHandler} type="text" name="fullName"/>
    </div>
    <div>
        <label>Phone number</label>
        <input onChange={changeHandler} type="text" name="phone"/>
    </div>
    <div>
        <label>Password</label>
        <input onChange={changeHandler} type="password" name="password"/>
    </div>
    {/* <div>
        <label>Profile-img</label>
        <input onChange={changeHandler} type="file" name="profile_image"/>
    </div> */}
    <input onClick={registerHandler} type="submit"/>
</form>
    </>
  )
}
