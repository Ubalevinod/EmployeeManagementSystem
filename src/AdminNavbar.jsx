import React from 'react'
import { Link, useNavigate } from 'react-router-dom';



export default function AdminNavbar() {
  let navigate=useNavigate();

  let logout=()=>{
    localStorage.clear();
    navigate("/");

  }
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
          <Link className="nav-link text-light" to="/addemp">Add Employee</Link>
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
          <Link className="nav-link text-light" to="/updateleave">Issue Leaves</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav><br/>
<div className="d-flex justify-content-end " >
<button className='btn bg-info text-light' style={{"marginRight":"2cm"}} onClick={logout}>Logout</button></div>
    </div>
  )
}
