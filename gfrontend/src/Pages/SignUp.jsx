import axios from "axios";
// tell boostrap that you want to use the form and button
import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";

function SignUp() {
  const [first_name, setFirstname] = useState("");
  const [last_name, setSecname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(false);



  // set configurations for connecting the front end and the backend through axios
 

  const handleSubmit = (e) => {
    //prevent the form from refreshing the whole page
    e.preventDefault();
    const configurations = {
      method: "post",
      url: "http://localhost:8080/register",
      data: {
        first_name,
        last_name,
        email,
        password
      },
    };

   // make the API call
  axios(configurations)
    .then((result) => {
      setSignup(true);
    })
    .catch((error) => {
      error = new error();
    });
    
  };

  

 

  


  return (
    <div>
      <h2>Sign Up</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* first name */}
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="fname"
            placeholder="John"
            value={first_name}
            onChange={(e) => setFirstname(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* second name */}
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="secname"
            value={last_name}
            onChange={(e) => setSecname(e.target.value)}
            placeholder="Doe"
          ></Form.Control>
        </Form.Group>

        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="doe@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </Form.Group>

        {/* submit button */}
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Sign Up
        </Button>

        {signup ? (
          <p className="text-success">Registration Successful</p>
        ) : (
          <p className="text-danger">You are not Registered</p>
        )}
      </Form>
    </div>
  );
}

export default SignUp;
