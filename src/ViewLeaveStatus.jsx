import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import LeaveApplicationNavbar from './LeaveApplicationNavbar';
export default function ViewLeaveStatus() {
    let [leaves,setLeaves] = useState([]);
    let [employeeId,setEmployeeId] = useState();
      let app="http://localhost:9093";



    useEffect(() => {
    let userdata = JSON.parse(localStorage.getItem("user"));
    console.log(userdata);
    setEmployeeId(userdata.empid);
    console.log(employeeId);
    getleavedetails();
  }, [employeeId]);

  
    let getleavedetails=()=>{
       
        axios.get(`${app}/getleavedetailsbyempid/${employeeId}`)
        .then((response)=>{
            if(response.data){
                setLeaves(response.data);
                
            }
        })
        .catch((error)=>{})

    }

    let deleteemployeeleave=(leaveId)=>{
         axios.delete(`${app}/cancel/${leaveId}`)
        .then((response)=>{
            
                alert("Leave cancelled successfully");
                getleavedetails();
                
            
        })
        .catch((error)=>{
            alert(error);
        })
    }
  return (
    <div className='background-sectionemployee'>
        <LeaveApplicationNavbar></LeaveApplicationNavbar>

      <br/><br/>  <table className='table table-bordered' >
            <thead>
                <tr >
                <th>Employee Id</th>
                <th>Employee Name</th>
                <th>Reason</th>
                <th>FromDate</th>
                <th>ToDate</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {
                    leaves.map((leave,index)=>
                        <tr key={indexedDB.id || index}>
                            <td>{leave.employeeId}</td>
                            <td>{leave.employeeName}</td>
                            <td>{leave.reason}</td>
                            <td>{leave.fromDate}</td>
                            <td>{leave.toDate}</td>
                            <td>{leave.status}</td>
                            <td>
                                <button className='btn bg-success text-light'
                                >Update</button>
                                <button className='btn bg-danger text-light'
                                onClick={()=>{deleteemployeeleave(leave.id)}}
                                >Delete</button>
                            </td>
                        </tr>
                    )
                }

            </tbody>
            
        </table>



    </div>
  )
}
