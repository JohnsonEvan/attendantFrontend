import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export default function Attendants(props){

    async function handleDelete(id){
        let result = await fetch("https://attendanttrackerapi.herokuapp.com/attendants/"+id,{
            method: "DELETE"
        });
        result = result.json();
        console.warn(result)
    }
    
    return(

            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.attendants.map((attendant) => {
                return <tr key={attendant.id}>
                    <th>{attendant.fname}</th>
                    <th>{attendant.lname}</th>
                    <th>{attendant.email}</th>
                    <th><Button variant="danger" onClick={()=>handleDelete(attendant.id)}>delete</Button></th>
                    </tr>
                })}
            </tbody>
            </Table>
    


    )
}