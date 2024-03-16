import React, { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  const [endPoint,setPoint]=useState('')
  const [container,setContainer]=useState([])
  const [finalPoint,setFinalPoint]=useState('');

  useEffect(()=>{
    fetchme()
  },[finalPoint])


  const  fetchme = async ()=> { 

    fetch(`https://weather-api138.p.rapidapi.com/weather?city_name=+madurai${endPoint}`,{
      method: await 'GET',
      headers: {
        'X-RapidAPI-Key': '79b226d5c5msh58936cc3837787ap1e2f40jsn18453c50cd1b',
        'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com'
    }
  })
  
.then ( response => {
  return response.json();
})	

.then(data =>{
  console.log(data);
  setContainer(data);
})

.catch (error => {
	console.error(error);
})
}

function onchangeHandler(e){
  setPoint(e.target.value)
}

const submitHandler = e =>{
  e.preventDefault();
  setFinalPoint(endPoint);
}
  return (
    <div>
      <form onSubmit={submitHandler}>
        <center><h1> SEARCH THE songs YOU WANT</h1></center>
        <center>  <input type="text" className='inputField'  value={endPoint} onChange={onchangeHandler}/>
      <button type='submit' className='btn btn-primary'>submit</button>
      </center>
      
      <div className='car'>{container.map((item,index)=>{
        return (<div key={index} className='card'  style={{width: "18rem"} }>
          <p>{item.temp}</p>
          </div>
       
 )
      })}
      </div>
</form>
  </div>
  )
}

export default App;

// {coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 10000, …}
// base
// : 
// "stations"
// clouds
// : 
// {all: 6}
// cod
// : 
// 200
// coord
// : 
// {lon: 78.1167, lat: 9.9333}
// dt
// : 
// 1710430746
// id
// : 
// 1264521
// main
// : 
// {temp: 301.44, feels_like: 302.24, temp_min: 301.44, temp_max: 301.44, pressure: 1013, …}
// name
// : 
// "Madurai"
// sys
// : 
// {country: 'IN', sunrise: 1710377707, sunset: 1710421106}
// t
