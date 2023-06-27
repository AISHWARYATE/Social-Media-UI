import React from 'react'
import './Nav.css';

export default function Nav() {
  return (
    <>
      <nav class="navbar bg-danger">
  <div class="container-fluid">
    <h3>Mai_Tweet</h3>
    <form class="d-flex " role="search" id="search" >
      <input class="form-control me-2"  type="search" placeholder="Search" aria-label="Search"/>
      <li class="nav-item">
    <a class="nav-link active" aria-current="page" href='/profile'>Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href='/home'>Home</a>
  </li>
    </form>
  </div>
</nav>
    </>
  )
}
