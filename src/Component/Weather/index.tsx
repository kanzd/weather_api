import React,{useState,useEffect} from 'react'
import axios from "axios";
import {FormControl,InputLabel,Select,MenuItem,Container,Grid,Typography} from "@mui/material";
import { country_api,weather_api } from "../../const";
import { DataGrid } from '@mui/x-data-grid';
import {useParams} from "react-router-dom";
export default function Index(props:any) {
    const {country} = useParams();
    const columns = [
        { field: 'id', headerName: 'id', width: 70 },
        { field: 'temperature', headerName: 'Temperature', width: 130 },
        { field: 'weather_code', headerName: 'WeatherCode', width: 130 },
        {
          field: 'wind_speed',
          headerName: 'WindSpeed',
        
          width: 90,
        },
        {
          field: 'wind_degree',
          headerName: 'WindDegree',
         
          
          width: 160,
         
        },
        {
            field:"observation_time",
            headerName:"ObservationTime",
            width:160
        }

      ];
    const [loading,setLoading] =useState(false);
    const [cities,setCities] = useState([]);
    const [city,setcity]=useState<any>("");
    const [rows,setRow]=useState<any[]>([]);
    useEffect(()=>{
        (async ()=>{
            var data = await axios.post(country_api(),{country:country});

            setCities(data.data.data);
        })();
       
    },[])
    return (
        <>
        {loading?<div>Loading...</div>:<></>}
        <Container style={{display:'flex',flexDirection:"column",alignItems:"center",marginTop:"5%"}}>
        <Typography variant="h3" style={{color:"grey"}}>Weather Checking App</Typography>
            <FormControl style={{marginTop:"3%"}} fullWidth>
  <InputLabel id="demo-simple-select-label">Cities</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    
    label="Select City"
    onChange={(e)=>{
        setcity(e.target.value);
        (async ()=>{
            var Weather = await axios.get(weather_api(e.target.value));
            setRow([{
                temperature:Weather.data.current.temperature,
                weather_code:Weather.data.current.weather_code,
                wind_speed:Weather.data.current.wind_speed,
                wind_degree:Weather.data.current.wind_degree,
                observation_time:Weather.data.current.observation_time,
                id:1
            }])
        })()


    }}
  >
      {cities.map((value,index)=>(<MenuItem value={value}>{value}</MenuItem>))}
    
    
  </Select>
</FormControl>
            
       
        </Container>
        <div style={{marginTop:"3%",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <DataGrid style={{height:"100px",width:"90%"}} rows={rows} columns={columns}  pageSize={5} />
        </div>
        
        </>
    )
}
