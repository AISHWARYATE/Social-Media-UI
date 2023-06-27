import React from 'react'
import Nav from '../components/navbar/Nav'
import Sidebar from '../components/navbar/Sidebar'
import Posts from '../components/Posts/Posts'
import Content from '../components/content/Content'
import Adds from '../components/adds/Adds'
import {Post} from "../dummyData"
export default function Mainhome() {
  return (
    <>
      <Nav/>
      <Sidebar/>
      <Content/>
   
      {
        Post.map((data,index)=>(
        <Posts details={data}/>  //props using
        ))
      }
      <Adds/>
    </>
  )
}
