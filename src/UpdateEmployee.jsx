import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function UpdateEmployee() {
    let navigate = useNavigate();

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


      let handleimg=(event)=>{
  var file= event.target.files[0];
  //file name type size
  var filepath=`./img/${file.name}`;
  console.log(filepath);
  setProfile(filepath);
 }

    let info=useParams();

    let empid=info.empid;

    useEffect(()=>{
        axios.get(`${app}/${empid}`)
        .then((response)=>{
            if(response.data){
                let emp=response.data;
                console.log(emp);
                setFirstname(emp.firstname);
                setLastname(emp.lastname);
                setDepartment(emp.department);
                setSalary(emp.salary);
                setEmail(emp.email);
                setContactno(emp.contactno);
                setAddress(emp.address);
                setJoiningdate(emp.joiningdate);
                setDob(emp.dob);
                setDesignation(emp.designation);
                setExp(emp.exp);
                setGender(emp.gender);
                setStatus(emp.status);
                setProfile(emp.profile);
                setReportingmanager(emp.reportingmanager);
            }

        })
        .catch((error)=>{console.log(error)})

    },[empid]);

    let updateemp = ()=>{

        let newemp = {firstname,lastname,salary,email,address,status,profile,gender,department,designation,dob,exp,reportingmanager,contactno,joiningdate};
        axios.put(`${app}/update/${empid}`,newemp)
        .then((response)=>{
            if(response.data=="Employee record updated successfully!"){
                alert("Employee record updated successfully!");
                navigate("/admindashboard");
            }
        })
        .catch((error)=>{alert(error)})

    }



  return (
    <div>
        <div><center><br/><br/>
      
      <form className='employeeformupdate' onSubmit={updateemp}>
      <h1 className='text-success'>Update Employee</h1><br/>
        <input type='text' placeholder='First Name'value={firstname} 
        onChange={(event)=>{setFirstname(event.target.value)}}  
        className='form-control' style={{ width: "500px" }} /><br />

        <input type='text' placeholder='Last Name' value={lastname}
        onChange={(event)=>{setLastname(event.target.value)}}
         className='form-control' style={{ width: "500px" }}
         /><br />

        <input type='text' placeholder='Department' value={department}
        onChange={(event)=>{setDepartment(event.target.value)}}
        className='form-control' style={{ width: "500px" }}
        /><br />

        <input type='text' placeholder='Salary' value={salary}
        onChange={(event)=>{setSalary(event.target.value)}}
        className='form-control' style={{ width: "500px" }}
        /><br />

        <input type='text' placeholder='Email' value={email}
        onChange={(event)=>{setEmail(event.target.value)}}
        className='form-control' style={{ width: "500px" }}
        /><br />

        <input type='number' placeholder='Contact Number' value={contactno}
        onChange={(event)=>{setContactno(event.target.value)}}
        className='form-control' style={{ width: "500px" }}
         /><br />

        <label htmlFor='joiningdate' value={joiningdate}
        onChange={(event)=>{setJoiningdate(event.target.value)}}
        className='form-label'>Joining Date:</label>
        <input type='date' className='form-control' style={{ width: "500px" }} id='joiningdate'
         /><br />

        <label htmlFor='dob' value={dob}
        onChange={(event)=>{setDob(event.target.value)}}
        className='form-label'>Date of Birth:</label>
        <input type='date' className='form-control' style={{ width: "500px" }} id='dob'
         /><br />

        <input type='text' placeholder='Designation' value={designation}
        onChange={(event)=>{setDesignation(event.target.value)}}
        className='form-control' style={{ width: "500px" }}
         /><br />

        <input type='number' placeholder='Experience' value={exp}
        onChange={(event)=>{setExp(event.target.value)}}
        className='form-control' style={{ width: "500px" }}
        /><br />

        <textarea placeholder='Address' value={address}
        onChange={(event)=>{setAddress(event.target.value)}}
        className='form-control' style={{ width: "500px" }}
        ></textarea><br />

        <select className='form-select' value={gender}
        onChange={(event)=>{setGender(event.target.value)}}
        style={{ width: "300px" }}
        >
          <option>Select Gender</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select><br />

        <select className='form-select' value={status}
        onChange={(event)=>{setStatus(event.target.value)}}
        style={{ width: "300px" }}
         >
          <option>Select Status</option>
          <option value='Active'>Active</option>
          <option value='Inactive'>Inactive</option>
        </select><br />

        <input type='text' placeholder='Reporting Manager' value={reportingmanager}
        onChange={(event)=>{setReportingmanager(event.target.value)}}
        className='form-control' style={{ width: "500px" }}
          /><br />
        <label className='form-label' for='imageform'>Upload Profile</label>
        <input type='file' placeholder='Profile' className='form-control' style={{ width: "500px" }}
           accept='image/*' onChange={handleimg}
        /><br />

        <button type='submit' className='btn bg-success text-light' style={{ width: "190px" }}>
          Update Employee
        </button><br></br>
        <br/>
      </form><br/></center>
    </div>
    </div>
  )
}
