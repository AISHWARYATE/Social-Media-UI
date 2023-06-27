import React, { useState } from 'react'
import './Log.css';

export default function Log() {

  const [details,setDetails] = useState({
    email:"",
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
      
      <div class="container1 ">
      <div class="row align-items">
      <div class="col">
     <h1 class="h1" style={{color:"blue"}}><b>Facebook</b></h1>
     <p>Connect with friends and the world around you on<br></br>
     Lamsocial
     </p>
    </div>
    <div class="col ">
     <div class="container2">
     <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"></label>
    <input type="email" placeholder='email' name="email"onChange={change} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label"></label>
    <input type="password" placeholder='password' name="password" onChange={change} class="form-control" id="exampleInputPassword1"/>
  </div>
  <center><button type="button" class="btn btn-primary btn-lg"onClick={sub} >Submit</button></center>
  <hr></hr>
  <center><a style={{color:"blue"}} href="/">Forget Password?</a></center><br></br>
  <center><button type="button" class="btn btn-success btn-lg">Create a New Account</button>
  </center>
  </form>
     </div>
    </div>
    </div>
    </div>
    </>
  )
}
