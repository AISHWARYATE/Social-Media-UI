import React from 'react'
import './Post.css';
export default function Posts({details}) {
  return (
    <>
      <div class="box6">
        <div class="box5"><p>{details.username}</p>
        </div>
        <img src={details.photo}></img>
      </div>
    </>
  )
}
