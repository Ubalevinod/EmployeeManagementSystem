import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'
import LeaveApplicationNavbar from './LeaveApplicationNavbar';

export default function LeaveApplication() {
    let [employeeId,setEmployeeId] = useState('');
    let [employeeName,SetEmployeename] = useState('');
    let [fromDate,setFromdate] = useState('');
    let [toDate,setTodate] = useState('');
    let [reason,setReason] = useState('');
      let app="http://localhost:9093";
               


    useEffect(()=>{
       let userdata= JSON.parse(localStorage.getItem("user"));
       console.log(userdata);
       setEmployeeId(userdata.empid);
       SetEmployeename(userdata.firstname+" "+userdata.lastname);
       
    },[employeeId])

    let applyforleave=(e)=>{
        e.preventDefault();
        let leavedata={employeeId,employeeName,reason,fromDate,toDate};
        axios.post(`${app}/apply`,leavedata)
        .then((response)=>{
            if(response.data=="You applied for leave successfully!"){
                alert("You applied for leave successfully!");
            }

        })
        .catch((error)=>{
            alert(error);
        })

    }


  return (
    <div className='background-sectionemployee'>
        <LeaveApplicationNavbar></LeaveApplicationNavbar>

<br/><br/>
        <form className='leaveform' onSubmit={applyforleave}>
            <h1 className='text-warning'>Leave Application Form</h1><br/>
            <label className='form-label' for="EmployeeIdEmployeeId">Enter EmployeeId</label>
            <input type='number' className='form-control' style={{ width: "500px" }}
            value={employeeId} id="EmployeeIdEmployeeId" ></input>

            <label className='form-label' for='NameName'>Enter Name</label>
            <input type='text' className='form-control' style={{ width: "500px" }}
            value={employeeName} id='NameName'></input>

            <label className='form-label' for='ReasonReason'>Enter Reason</label>
            <textarea className='form-control' style={{"resize":"none",width: "500px" }}
            id='ReasonReason' onChange={(event)=>{setReason(event.target.value)}}></textarea>

            <label className='form-label' for='FromDateFromDate'>Select FromDate</label>
            <input type='date' className='form-control' style={{ width: "500px" }}
            id='FromDateFromDate' onChange={(event)=>{setFromdate(event.target.value)}}></input>

            <label className='form-label' for='ToDateToDate'>Select ToDate</label>
            <input type='date' className='form-control' style={{ width: "500px" }}
            id='ToDateToDate' onChange={(event)=>{setTodate(event.target.value)}}></input><br/>

            <button className='btn bg-success text-light'>Apply for Leave</button>


        </form><br/><br/>
    </div>
  )
}
