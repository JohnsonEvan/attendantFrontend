import React from 'react'
import Table from 'react-bootstrap/Table'

export default function Attendants(props){
    return(
        
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {props.attendants.map((attendant) => {
                return <tr key={attendant.id}>
                    <th>{attendant.fname}</th>
                    <th>{attendant.lname}</th>
                    <th>{attendant.email}</th>
                    </tr>
                })}
            </tbody>
            </Table>
    


    )
}