import React, { useState } from 'react'
import './Login.css';
export default function Login() {
 
const [details,setDetails] = useState({
  username:"",
  password:""
})
 
const change = (e)=>{
  //const name = e.target.name
  //const value= e.target.value
  const {name,value} = e.target

  setDetails({...details,[name]:value})
}
const sub =(e)=>{
  e.preventDefault()
  console.log("state",details);
}


  return (
    <>

     <center>
     <div class="container">
     <h1>Login</h1> 
     <input placeholder='name' name='username' onChange={change}/><br></br><br></br>
     <input placeholder='password' name='password' onChange={change} /><br></br><br></br>
     <input type="submit" onClick={sub}/>
     </div>
     </center>
    </>
  )
}

