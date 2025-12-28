import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UpdateLeaveStatusNavbar from './UpdateLeaveStatusNavbar';

export default function UpdateLeaveStatus() {
    let [leaveslist,setleaveslist] = useState([]);
    let navigate=useNavigate();
      let app="http://localhost:9093";


    let gobacktomainmenu=()=>{
        navigate("/admindashboard")
    }


    useEffect(()=>{
        getleavedetails();



    },[])

    let updateLeaveStatus=(id,action)=>{
        axios.put(`${app}/updatestatus/${id}/${action}`)
        .then((response)=>{
            if(response.data=="Leave status updated successfully"){
                alert("Leave status updated successfully");
                 getleavedetails();
            }

        })
        .catch((error)=>{
            alert(error);
            console.log(error);
        })
    }

    let getleavedetails=()=>{
        axios.get(`${app}/findallleavedetails`)
        .then((response)=>{
            if(response.data){
                setleaveslist(response.data);
                console.log(response.data);
            }

        })
        .catch((error)=>{alert(error)})
    }


  return (
    <div className='background-sectionadmin'>
        <UpdateLeaveStatusNavbar></UpdateLeaveStatusNavbar>
       <br/><br/> <table table className='table table-bordered' >
            <thead>
                <tr>
                    <th>EmployeeID</th>
                    <th>Employee Name</th>
                    <th>Reason</th>
                    <th>From Date</th>
                    <th>To Date</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>

            </thead>
            <tbody>
                {
                    leaveslist.map((leave)=>
                        <tr>
                            <td>{leave.employeeId}</td>
                            <td>{leave.employeeName}</td>
                            <td>{leave.reason}</td>
                            <td>{leave.fromDate}</td>
                            <td>{leave.toDate}</td>
                            <td>{leave.status}</td>
                            <td>
                                <button className='btn bg-success text-light'
                                onClick={()=>{updateLeaveStatus(leave.id,"approve")}}>Approve</button>
                                <button className='btn bg-danger text-light'
                                onClick={()=>{updateLeaveStatus(leave.id,"reject")}}>Reject</button>
                            </td>
                        </tr>
                    )
                }

            </tbody>
        </table>


    </div>
  )
}
