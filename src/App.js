import logo from './logo.svg';
import './App.css';
import EmployeeAdd from './EmployeeAdd';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AdminDashboard from './AdminDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdateEmployee from './UpdateEmployee';
import EmployeeDashboard from './EmployeeDashboard';
import Register from './Register';
import Home from './Home';
import AboutAs from './AboutAs';
import ContactUs from './ContactUs';
import Service from './Service';
import LeaveApplication from './LeaveApplication';
import ViewLeaveStatus from './ViewLeaveStatus';
import UpdateLeaveStatus from './UpdateLeaveStatus';

function App() {
  return (
     <center>
    <>
   
    
    

      <Routes>
        <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/addemp" element={<EmployeeAdd />} />  
        <Route path="/admindashboard" element={<AdminDashboard></AdminDashboard>} />
        <Route path="/update/:empid" element={<UpdateEmployee></UpdateEmployee>}></Route>
        
        <Route path="/employeedashboard" element={<EmployeeDashboard></EmployeeDashboard>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<AboutAs></AboutAs>}></Route>
        <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path="/leaveapplication" element={<LeaveApplication></LeaveApplication>}></Route>
        <Route path='/viewleave' element={<ViewLeaveStatus></ViewLeaveStatus>}></Route>
        <Route path='/updateleave' element={<UpdateLeaveStatus></UpdateLeaveStatus>}></Route>

      </Routes>
    
    
    
    </>
    </center>
  );
}

export default App;
