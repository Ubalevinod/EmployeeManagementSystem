import React from 'react'
import { Link } from 'react-router-dom';

export default function LeaveApplicationNavbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">EMS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-light" to="/employeedashboard">Employee Dashboard</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link text-light" to="/">Home</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link text-light" to="/service">Serivce</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link text-light" to="/contactus">Contact Us</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link text-light" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/leaveapplication">Apply Leave</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/viewleave">View Leave Status</Link>
        </li>
      </ul>
      
    </div>
  </div>
  
</nav>
    </div>
  )
}
