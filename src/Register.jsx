import axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Register() {
  const [isRegistered, setIsRegistered] = useState(false);
     
  let navigate = useNavigate();


  let [firstname,setFirstname] = useState('');
  let [lastname,setLastname] = useState('');
  let [email,setEmail] = useState('');
  let [contactno,setContactno] = useState('');
  let [gender,setGender] = useState('');
  let [role,setRole] = useState('');
  let [empid,setEmpid] = useState('');
  let [password,setPassword] = useState('');
  let [username,setUsername] = useState('');
  let [confirmpassword,setComfirmpassword] = useState('');
  let app="http://localhost:9093";


  let [uname,setUname] = useState('');
  let [upassword,setUpassword] = useState('');


  let validation = ()=>{
    if(firstname==""||lastname==""||gender==""||email==""||parseFloat(contactno)==0||role==""||parseFloat(empid)==0||
password==""||username==""||confirmpassword==""){
    alert("Please Fill all the feilds!!");
    return false;

    }else if(!/^[A-za-z\s]{2,30}$/.test(firstname)){
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
    }else if(!/^\d{10}$/.test(contactno)){
        alert("Please enter 10 digit contact no");
        return false;
    }else{
        return true;
    }
  }




  

  let registeremp = (event)=>{
    event.preventDefault();
    if(validation()){
        let empreg = {
            firstname,
            lastname,
            email,
            contactno,
            gender,
            role,
            username,
            password,
            confirmpassword,
            empid

        };

        axios.post(`${app}/registe`,empreg)
        .then((response) => {
        if (response.data=="User registration successful") {
          alert("User registration successful");
        }
      })
      .catch((error) => {
        alert("Try again: " + error.message);
      });
    }
    

  }

  let userlogin=(e)=>{
    e.preventDefault();
    let logindetails = {username:uname, password:upassword }

    axios.post(`${app}/login `,logindetails)
    .then((response)=>{
        console.log(response.data);
        
        localStorage.setItem("user",JSON.stringify(response.data));
        let userdata=response.data;
        
        if(userdata.role.trim().toLowerCase()=="admin")
        {
            navigate("/admindashboard");
            
        }else{
            navigate("/employeedashboard")
        }
        

    })
    .catch((error)=>{

        alert("Failed to login "+error);

    })
  }




  return (
    <div className='background-sectionregistration'><br /><br />
      {!isRegistered ? (
        <form className='registerform' onSubmit={registeremp}>
          <h1 className='text-light'>Register Form</h1><br />
          <label className='form-label' htmlFor='firstname'>Enter First Name</label>
          <input type='text' className='form-control' id='firstname' style={{ width: "500px" }} 
          onChange={(event)=>{setFirstname(event.target.value)}}
          /><br />

          <label className='form-label' htmlFor='lastname'>Enter Last Name</label>
          <input type='text' className='form-control' id='lastname' style={{ width: "500px" }} 
          onChange={(event)=>{setLastname(event.target.value)}}
          /><br />

          <label className='form-label' htmlFor='email'>Enter Email</label>
          <input type='email' className='form-control' id='email' style={{ width: "500px" }} 
          onChange={(event)=>{setEmail(event.target.value)}}
          /><br />

          <label className='form-label' htmlFor='contact'>Enter Contact Number</label>
          <input type='number' className='form-control' id='contact' style={{ width: "500px" }} 
          onChange={(event)=>{setContactno(event.target.value)}}
          /><br />

          <label className='form-label' htmlFor='gender'>Select Gender</label>
          <select id='gender' className='form-select' style={{ width: "500px" }}
          onChange={(event)=>{setGender(event.target.value)}}
          >
            <option>Select Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select><br />

          <label className='form-label' htmlFor='role'>Select Role</label>
          <select id='role' className='form-select' style={{ width: "500px" }}
          onChange={(event)=>{setRole(event.target.value)}}
          >
            <option>Select Role</option>
            <option value='admin'>Admin</option>
            <option value='employee'>Employee</option>
          </select><br />

          <label className='form-label' htmlFor='empid'>Enter Employee Id</label>
          <input type='number' className='form-control' id='empid' style={{ width: "500px" }} 
          onChange={(event)=>{setEmpid(event.target.value)}}
          /><br />

          <label className='form-label' htmlFor='username'>Enter Username</label>
          <input type='text' className='form-control' id='username' style={{ width: "500px" }} 
          onChange={(event)=>{setUsername(event.target.value)}}
          /><br />

          <label className='form-label' htmlFor='password'>Enter Password</label>
          <input type='password' className='form-control' id='password' style={{ width: "500px" }} 
          onChange={(event)=>{setPassword(event.target.value)}}
          /><br />

          <label className='form-label' htmlFor='confirmpass'>Enter Confirm Password</label>
          <input type='password' className='form-control' id='confirmpass' style={{ width: "500px" }} 
          onChange={(event)=>{setComfirmpassword(event.target.value)}}
          /><br />

          <div className='d-flex justify-content-between'>
            <button className='btn bg-primary text-light' >Register</button>
            <button className='btn bg-primary text-light' onClick={(e) => { e.preventDefault(); setIsRegistered(true); }}>
              Already Registered? Click here for login
            </button>
          </div>
        </form>
      ) : (
        <form className='loginform' onSubmit={userlogin}><br />
          <h1 className='text-warning'>Login Form</h1><br />
          <label className='form-label' htmlFor='loginusername'>Enter Username</label>
          <input type='text' className='form-control' id='loginusername' style={{ width: "500px" }} 
            onChange={(event)=>{setUname(event.target.value)}}

          /><br />

          <label className='form-label' htmlFor='loginpassword'>Enter Password</label>
          <input type='password' className='form-control' id='loginpassword' style={{ width: "500px" }} 
          onChange={(event)=>{setUpassword(event.target.value)}}
          /><br />

          <button type='submit' className='btn bg-warning text-light' >Login</button>
        </form>
      )}
    </div>
  );
}
