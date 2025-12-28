import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import UpdateEmployee from './UpdateEmployee';
import AdminNavbar from './AdminNavbar';


export default function AdminDashboard() {
      let navigate = useNavigate();
    
    let [employees, setEmployees] = useState([]);
    let [searchresult,setSearchresult] = useState([]);
    let [dept,setDept] = useState('');
    let [fname,setFname] = useState('');
    let [lname,setLname] = useState('');
    let [desig,setDesig] = useState('');
      let app="http://localhost:9093";

    useEffect(()=>{
        getdata();
    },[])

    let getdata=()=>{
        
        axios.get(`${app}/all`)
        .then((response)=>{
            if(response.data){
                setEmployees(response.data);
            }
        })
        .catch((error)=>{
            alert(error);
        });
    }

    let deleteemployee = (empid)=>{
        axios.delete(`${app}/delete/${empid}`)
        .then((response)=>{
            if(response.data=="Employee record deleted successfully"){
                alert("Employee record deleted successfully");
                getdata();
                
            }
        })
        .catch((error)=>{
            alert(error);
        })
    }

    let UpdateEmployee=(empid)=>{
        navigate(`/update/${empid}`);
    }
    let serachbyfname=()=>{
        axios.get(`${app}/firstname/${fname}`)
        .then((response)=>{
            if(response.data){
                setSearchresult(response.data);
                console.log(response.data);
            }
        })
        .catch((error)=>{alert(error)})

    }

    let serachbylname=()=>{
        axios.get(`${app}/lastname/${lname}`)
        .then((response)=>{
            if(response.data){
                setSearchresult(response.data);
                console.log(response.data);
            }
        })
        .catch((error)=>{alert(error)})

    }

    let serachbydepartment=()=>{
        axios.get(`${app}/department/${dept}`)
        .then((response)=>{
            if(response.data){
                setSearchresult(response.data);
                console.log(response.data);
            }
        })
        .catch((error)=>{alert(error)})

    }

    let serachbydesignation=()=>{
        axios.get(`${app}/designation/${desig}`)
        .then((response)=>{
            if(response.data){
                setSearchresult(response.data);
                console.log(response.data);

            }
        })
        .catch((error)=>{alert(error)})

    }

  return (
    
    <div className='background-sectionadmin'>
    <AdminNavbar></AdminNavbar>
        <br/><br/>

    <div className="container">
        <div className="row">
            <div className="col-3">
                <label className='form-label ' for='firstnameg'>Enter firstname:</label>
                <input type='text' className='form-control' id='firstnameg' onChange={(event)=>{setFname(event.target.value)}}></input><br/>
                <button type='submit' className='btn bg-info text-light' onClick={serachbyfname}>Search</button>
             
            </div>
            <div className="col-3">
                <label className='form-label' for='lastnamegs'>Enter lastname:</label>
                <input type='text' className='form-control' id='lastnamegs' onChange={(event)=>{setLname(event.target.value)}}></input><br/>
                <button type='submit' className='btn bg-info text-light' onClick={serachbylname}>Search</button>
            </div>
            <div className="col-3">
                <label className='form-label' for='departmentg'>Enter Department:</label>
                <input type='text' className='form-control' id='departmentg' onChange={(event)=>{setDept(event.target.value)}}></input><br/>
                <button type='submit' className='btn bg-info text-light' onClick={serachbydepartment}>Search</button>
            </div>
            <div className="col-3">
                <label className='form-label' for='designationg' >Enter Designation:</label>
                <input type='text' className='form-control' id='designationg' onChange={(event)=>{setDesig(event.target.value)}}></input><br/>
                <button type='submit' className='btn bg-info text-light' onClick={serachbydesignation}>Search</button>
            </div>
        </div>
    </div>
<br></br>
<div className="container">
    <div className="row row gx-4 gy-4">
        

            {
            (searchresult.length>0?searchresult:employees).map((emp)=>
                 <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={emp.empid}>
    <div className="card h-100 shadow-sm">

                
                
                   
  <img src={emp.profile} className="card-img-top" alt="..."
  style={{"width":"354px","height":"250px"}}
  />
  <div className="card-body">
    <h5 className="card-title">{emp.firstname} {emp.lastname}</h5>
    <p className="card-text">
        <strong>Designation</strong>:{emp.designation}<br/>
        <strong>Department</strong>:{emp.department}<br/>
        <strong>Experience</strong>:{emp.exp}<br/>
        <strong>Contactno</strong>:{emp.contactno}<br/>
    </p>
    <div className="d-flex justify-content-between">
        <button className='btn bg-danger text-light' 
        onClick={()=>{deleteemployee(emp.empid)}}>Delete</button>
        <button className='btn bg-success text-light'
        onClick={()=>{UpdateEmployee(emp.empid)}}
        >Update</button>
    </div>
  </div>
</div>
</div>

                    
               
            )
        }
        
        </div>
        </div>
      
             
        

    </div>
  )
}
