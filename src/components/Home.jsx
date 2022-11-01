import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <Container>
      <Row>
        <Col className='text-center m-5'><h1>Welcome to my attendance tracker app!</h1></Col>
      </Row>
      <Row className='text-center m-3'><p>The purpose of this application is to allow people to view attendants registered in the list and to add more as needed</p></Row>
      <Row className='text-center m-3'>
        <p>I created this app using Ruby on Rails and React.js, with Rails being used as an API to store the attendant information so that it persists on multiple devices and through page refreshes.
        I decided to host this app on heroku due to its ease of use where Ruby is concerned. As for the styling I went with React Bootstrap. 
        </p></Row>
      <Row className='text-center m-3'>Under the hood there is also a JWT based user authentication method using the Knock gem that allows for limiting user access to certain functions such as creating a new attendant or deleting one.</Row>
    </Container>
  );
}

export default Home;