import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Add() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  
    function handleSubmit(e) {
      let token = "Bearer " + localStorage.getItem("jwt");

      fetch("/add",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          headers: {'Authorization': token }
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      })
        .then((r) => r.json());
        
    }
  
    return (
        
        <Form id="newperson" onSubmit={handleSubmit}>
            <Form.Group className="m-3 text-center" controlId="formBasicEmail">
            <Form.Label>Add new attendant:</Form.Label>
            <Form.Control className='m-3' type="text" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="m-3" >
            <Form.Control className="m-3"  type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Button className='m-3' variant="primary" type="submit">
            Submit
            </Button>
            </Form>

    );
  }
export default Add;