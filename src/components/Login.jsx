import React, { Component } from 'react'
import  axios  from 'axios'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Login extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const request = {"auth": {"email": email, "password": password}};
    console.log(request);
    axios 
    .post('http://0.0.0.0:25615/api/user_token', request)
      .then(response => {
        localStorage.setItem("jwt", response.data.jwt);
        this.props.history.push("/");
      })
      .catch(error => console.log('error', error));
  }  
      

  render() {
    return (
      <Container>
      
      <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" id="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" id="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    );
  }
}

export default Login;