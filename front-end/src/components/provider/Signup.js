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
    <section>
  <div class="container py-4">
    <div class="row text-center py-3 mt-3">
      <div class="col-lg-7 mx-auto">
        <h3 class="text-center">Signup As Provider</h3>
        <form role="form" id="contact-form" method="post" autocomplete="off">
          <div class="card-body">
            <div class="mb-4">
              <div class="input-group input-group-static">
                <label>Email Address</label>
                <input type="email"  onChange={changeHandler} name="emailAddress" class="form-control"/>
              </div>
            </div>
            <div class="mb-4">
              <div class="input-group input-group-static">
                <label>Username</label>
                <input type="text"  onChange={changeHandler} name="username" class="form-control"/>
              </div>
            </div>
            <div class="mb-4">
              <div class="input-group input-group-static">
                <label>Full name</label>
                <input type="text"  onChange={changeHandler} name="fullName" class="form-control"/>
              </div>
            </div>
            <div class="mb-4">
              <div class="input-group input-group-static">
                <label>Phone</label>
                <input type="text"  onChange={changeHandler} name="phone" class="form-control"/>
              </div>
            </div>
            <div class="mb-4">
              <div class="input-group input-group-static">
                <label>Password</label>
                <input type="password"  onChange={changeHandler} name="password" class="form-control"/>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <input onClick={registerHandler} class="btn bg-gradient-primary w-100 primary" type="Signin" value="Signup"/>
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
