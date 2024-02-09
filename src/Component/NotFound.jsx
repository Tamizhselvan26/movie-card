import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='page-not-found'>
        <h1>404 not found the page</h1>
        <h2><Link to="/portal/movie">Back to HomePage</Link></h2>
        <img src="https://www.magnacast.com/images/404.gif"/>
    </div>
  )
}