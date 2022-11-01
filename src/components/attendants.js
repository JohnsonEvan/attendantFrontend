import React from 'react'
import Table from 'react-bootstrap/Table'

export default function Attendants(props){
    return(
        
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {props.attendants.map((attendant) => {
                return <tr key={attendant.id}>
                    <th>{attendant.name}</th>
                    <th>{attendant.email}</th>
                    </tr>
                })}
            </tbody>
            </Table>
    


    )
}