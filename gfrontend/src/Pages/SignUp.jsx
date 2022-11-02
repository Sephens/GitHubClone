import axios from "axios";
// tell boostrap that you want to use the form and button
import { Form, Button } from "react-bootstrap";
import React, {useState} from 'react'

function SignUp() {


  const [firstname, setFirstname] = useState("");
  const [secname, setSecname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(false);


  const handleSubmit = (e) =>{
    //prevent the form from refreshing the whole page
    e.preventDefault();
   
  }

  return (
    <div>  
      <h2>Sign Up</h2>
      <Form onSubmit={(e)=>handleSubmit(e)}>
      {/* first name */}
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
          type="text"
          name = "fname" 
          placeholder="John"
          value={firstname}
          onChange={(e)=>
          setFirstname(e.target.value)
          }
          ></Form.Control>
        </Form.Group>


        {/* second name */}
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
           type="text"
           name = "secname"
           value={secname} 
           onChange={(e)=>
            setSecname(e.target.value)
           }
           placeholder="Doe"></Form.Control>
        </Form.Group>

        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email" 
          name = "email"
          value = {email}
          placeholder="doe@gmail.com" 
          onChange={(e)=>
          setEmail(e.target.value)
          }
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
          type="password"
          name = "password"
          value={password}
          onChange={(e)=>
          setPassword(e.target.value)
          }
          placeholder="password" />
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" type="submit" onClick={(e)=>handleSubmit(e)}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
  }

export default SignUp;
