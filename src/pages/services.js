import React from 'react'
import { Link } from 'react-router-dom'

export const Services = () => {
  return (
    <div>
      Services
      <button><Link to="/">Home</Link></button>
    <button><Link to="/Contact">Contact</Link></button>
    </div>
  )
}
export default Services;
