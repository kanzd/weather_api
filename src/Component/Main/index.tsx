import React,{useState} from 'react';
import {Grid,Container,TextField,Button,Typography} from "@mui/material";
import axios from "axios";
import {country_api} from "../../const";
import {Link} from "react-router-dom";

export default function Index() {
    const [state,setstate] = useState("");
    return (
       <>
       <Container style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"15%"}}>
           <Typography variant="h3" style={{color:"grey"}}>Weather Checking App</Typography>
           <TextField id="outlined-basic" label="Enter Country" variant="outlined" style={{marginTop:"2%"}} onChange={(e)=>{
               setstate(e.target.value);
           }} />
          <Link to={"/weather/"+state}><Button variant="contained" style={{marginTop:"5%"}}> Go Ahead </Button></Link> 
       </Container>
      
       </>
    )
}
