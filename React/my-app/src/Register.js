import React, { useState } from 'react'
export default function Register() {

  const [details,setDetails] = useState({
    username:"",
    password:"",
    email:"",
    phonenumber:""
  })
   
  const change = (e)=>{
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
        <h1>Registeration</h1>
        <form>
           <input placeholder='username' name='username' onChange={change} ></input><br></br>
           <input placeholder='password' name='password' onChange={change} ></input><br></br>
           <input placeholder='email' name='email'onChange={change} ></input><br></br>
           <input placeholder='phonenumber' name='phonenumber' onChange={change} ></input><br></br>
           <input type="submit" onClick={sub}></input>
        </form>
      </center>
    </>
  )
}

