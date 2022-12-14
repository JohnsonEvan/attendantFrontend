import Attendants from './attendants';
import { useState , useEffect } from 'react';
import Srcbar from './srcbar'
import Add from "./add"
import axios from 'axios';
import Container from 'react-bootstrap/esm/Container';



export default function Display() {

  const [attendants, setAttendants] = useState([]);
  const [searchText, setSearchText] = useState("");


  useEffect(()=>{
    let token = "Bearer " + localStorage.getItem("jwt");
    axios({method: 'get', url: 'https://attendanttrackerapi.herokuapp.com/attendants', headers: {'Authorization': token }})
      .then(response => { 
        setAttendants(response.data)
      })
      .catch(error => console.log('error', error));
  },[])


function handleSearch(searchText){
  setSearchText(searchText);
}

const filterAttendants = attendants.filter((attendants)=>{
  const upperSearchText = searchText.toUpperCase();
  return attendants.fname.toUpperCase().includes(upperSearchText) || attendants.lname.toUpperCase().includes(upperSearchText);
 })

return(
    <Container >
        <Srcbar handleSearch={handleSearch} />
        <Attendants attendants={filterAttendants} />
        <Add />
    </Container>
)
}