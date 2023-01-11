

import { Link } from "react-router-dom"
import React from 'react'

function Navbar() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/otp">OTP</Link>
    </div>
  )
}

export default Navbar