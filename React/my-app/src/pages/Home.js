import React from 'react'
import Sidebar from '../components/navbar/Sidebar'
import Nav from '../components/navbar/Nav'
import Main from '../components/main/Main'
import Posts from '../components/Posts/Posts'

export default function Home() {
  return (
    <>
    <Nav/>
    <div class="main-container">
        <div class="row">
          <div className='col-lg-3' ><Sidebar/></div>
          </div>
        <div className='col-lg-6'><Main/>
        </div>
        <div class="row">
          <Posts/>
        </div>
        <div class="row">
          <Posts/>
        </div>
    </div>
    
    </>
  )
}
