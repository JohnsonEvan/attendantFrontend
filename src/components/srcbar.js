import React from "react"
import Row from 'react-bootstrap/Row';

export default function Srcbar({ handleSearch }) {

    function handleChange(event) {
        event.preventDefault();
        const searchText = event.target.value;
        handleSearch(searchText);

    }

    return(
        <Row className='m-5'>
            <Row className='text-center'><h1>Attendants</h1></Row>
            <Row><input onChange={handleChange} id="search" type="text" placeholder="Search..."></input></Row>
        </Row>
    );
}