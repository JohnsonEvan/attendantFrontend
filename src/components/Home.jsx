import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <Container>
      <Row>
        <Col className='text-center m-5'><h1>Welcome to my sample app!</h1></Col>
      </Row>
      <Row className='text-center m-3'><p>While simple, I feel that this app demonstrates my programming abilities from a logic standpoint</p></Row>
      <Row className='text-center m-3'><p>The login function works by checking the backend for a JWT so I seeded in an admin for testing purposes</p></Row>
      <Row className='text-center m-3'><p>For login use 'Admin@ducks.com' for the email and 'admin' for the password </p></Row>
    </Container>
  );
}

export default Home;