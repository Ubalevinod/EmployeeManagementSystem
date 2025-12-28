import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UpdateLeaveStatusNavbar from './UpdateLeaveStatusNavbar';


export default function EmployeeAdd() {
  const navigate = useNavigate();


 const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState('');
  const [email, setEmail] = useState('');
  const [contactno, setContactno] = useState('');
  const [joiningdate, setJoiningdate] = useState('');
  const [dob, setDob] = useState('');
  const [designation, setDesignation] = useState('');
  const [exp, setExp] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const [profile, setProfile] = useState('');
  const [reportingmanager, setReportingmanager] = useState('');
    let app="http://localhost:9093";


  let validation=()=>{
    if(firstname==""||lastname==""||gender==""||parseFloat(salary)==0||designation==""||email==""||parseFloat(contactno)==0||joiningdate==""||
        dob==""||reportingmanager==""||status==""||profile==""||address==""||parseFloat(exp)==0
    ){
        alert("Please fill all the feild");
        return false;
    }
    else if(!/^[A-za-z\s]{2,30}$/.test(firstname)){
        alert("Please enter alphabet in firstname feild");
        return false;
    }
    else if(!/^[A-za-z\s]{2,30}$/.test(lastname)){
        alert("Please enter alphabet in lastname feild");
        return false;
    }
    else if(!/^\S+@\S+\.\S+$/.test(email)){
        alert("Please enter valid emailid with  . and @");
        return false;
    }
    else if(!/^\d{10}$/.test(contactno)){
        alert("Please enter 10 digit contact no");
        return false;
    }
    else if(salary<=0){
        alert("Enter valid salary amount");
        return false;
    }
    else if(exp<=0){
        alert("Please enter valid experience");
        return false;
    }
    else{
        return true;
    }
  }

  const addemp = (event) => {
    event.preventDefault();
    if(validation()){

    

    const emp = {
      firstname,
      lastname,
      department,
      salary,
      email,
      contactno,
      joiningdate,
      dob,
      designation,
      exp,
      address,
      gender,
      status,
      profile,
      reportingmanager,
    };

    axios.post(`${app}/add`, emp)
      .then((response) => {
        if (response.data) {
          alert("Employee record added successfully");
        }
      })
      .catch((error) => {
        alert("Error adding employee: " + error.message);
      });
    }
  };
 let handleimg=(event)=>{
  var file= event.target.files[0];
  //file name type size
  var filepath=`./img/${file.name}`;
  console.log(filepath);
  setProfile(filepath);
 }

  return (
    <div className='background-sectionadmin'>
      <UpdateLeaveStatusNavbar></UpdateLeaveStatusNavbar>
      <center><br/>
      
      <form className='employeeform' onSubmit={addemp}>
      <h1 className='text-light'>Add Employee</h1><br/>
        <input type='text' placeholder='First Name' className='form-control' style={{ width: "500px" }}
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        /><br />

        <input type='text' placeholder='Last Name' className='form-control' style={{ width: "500px" }}
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        /><br />

        <input type='text' placeholder='Department' className='form-control' style={{ width: "500px" }}
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        /><br />

        <input type='text' placeholder='Salary' className='form-control' style={{ width: "500px" }}
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        /><br />

        <input type='text' placeholder='Email' className='form-control' style={{ width: "500px" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />

        <input type='number' placeholder='Contact Number' className='form-control' style={{ width: "500px" }}
          value={contactno}
          onChange={(e) => setContactno(e.target.value)}
        /><br />

        <label htmlFor='joiningdate' className='form-label'>Joining Date:</label>
        <input type='date' className='form-control' style={{ width: "500px" }} id='joiningdate'
          value={joiningdate}
          onChange={(e) => setJoiningdate(e.target.value)}
        /><br />

        <label htmlFor='dob' className='form-label'>Date of Birth:</label>
        <input type='date' className='form-control' style={{ width: "500px" }} id='dob'
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        /><br />

        <input type='text' placeholder='Designation' className='form-control' style={{ width: "500px" }}
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        /><br />

        <input type='number' placeholder='Experience' className='form-control' style={{ width: "500px" }}
          value={exp}
          onChange={(e) => setExp(e.target.value)}
        /><br />

        <textarea placeholder='Address' className='form-control' style={{ width: "500px" }}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea><br />

        <select className='form-select' style={{ width: "300px" }}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option>Select Gender</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select><br />

        <select className='form-select' style={{ width: "300px" }}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Select Status</option>
          <option value='Active'>Active</option>
          <option value='Inactive'>Inactive</option>
        </select><br />

        

        

        <input type='text' placeholder='Reporting Manager' className='form-control' style={{ width: "500px" }}
          value={reportingmanager}
          onChange={(e) => setReportingmanager(e.target.value)}
        /><br />
        <label className='form-label' for='imageform'>Upload Profile</label>
        <input type='file' placeholder='Profile' className='form-control' style={{ width: "500px" }}
           accept='image/*'
          onChange={handleimg}
        /><br />

        <button type='submit' className='btn bg-success text-light' style={{ width: "145px" }}>
          Add Employee
        </button><br></br>
        <br/>
      </form><br/></center>
    </div>
  )
}
