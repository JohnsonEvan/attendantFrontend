import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Add() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
  
    function handleSubmit(e) {
      let token = "Bearer " + localStorage.getItem("jwt");

      fetch("https://attendanttrackerapi.herokuapp.com/add",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          headers: {'Authorization': token }
        },
        body: JSON.stringify({
          fname: fname,
          lname: lname,
          email: email,
        }),
      })
        .then((r) => r.json());
        
    }
  
    return (
        
        <Form id="newperson" onSubmit={handleSubmit}>
            <Form.Group className="m-4 text-center" controlId="formBasicEmail">
            <Form.Label>Add new attendant:</Form.Label>
            <Form.Control  className="m-2" type="text" value={fname} placeholder="first name" onChange={(e) => setFname(e.target.value)} />
            <Form.Control  className="m-2" type="text" value={lname} placeholder="last name" onChange={(e) => setLname(e.target.value)} />
            <Form.Control  className="m-2" type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <Button  variant="primary" type="submit">Submit</Button>
            </Form.Group>
            </Form>

    );
  }
export default Add;