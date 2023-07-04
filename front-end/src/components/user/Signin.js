import React, { useState } from 'react'
import {Container, Form, Button } from 'react-bootstrap'


export default function Signin(props) {
    //Set state for the user into new user
    const [newUser, setNewUser] = useState({});

    //Function to handle any change in value of fields
    const changeHandler = (e) =>{
        //Set copy of newuser into user every time
        const user = {...newUser}

        //Set key with value for fields sent in the form
        user[e.target.name]= e.target.value

        console.log(user)
        //Set user to new user
        setNewUser(user)
    }

    //Function to login as  user 
    const loginHandler = () =>{
        props.login(newUser)
    }


  return (
    <>
    <h1>Signin</h1>
    <Container>

        <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control onChange={changeHandler} name="emailAddress"></Form.Control>
        </Form.Group>

        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control  onChange={changeHandler} name="password" type="password"></Form.Control>
        </Form.Group>

        <Button onClick={loginHandler} variant="primary">Login</Button>
    </Container>
    </>
  )
}
