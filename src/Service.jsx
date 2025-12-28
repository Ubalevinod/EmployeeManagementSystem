import React from 'react'
import ServiceNavbar from './ServiceNavbar'

export default function Service() {
  return (

    <div className='background-sectionservice'>
      <ServiceNavbar></ServiceNavbar>
      <div className="container mt-5">
      <h2 className="text-center text-primary mb-3">Our Services</h2>
      <p className="text-center mb-5">
        At SmartWork Solutions, we offer intelligent and scalable employee management services designed to streamline HR operations, boost productivity, and support your organization’s growth with technology-driven solutions.

      </p>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="border p-4 shadow-sm rounded">
            <h5 className="text-success"> Employee Information System</h5>
            <p>Maintain centralized, secure, and easily accessible employee profiles with real-time updates and role-based access.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="border p-4 shadow-sm rounded">
            <h5 className="text-success">Attendance & Leave Management</h5>
            <p>Automate daily attendance tracking, manage leaves, holidays, and generate insightful reports to improve workforce efficiency.

</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="border p-4 shadow-sm rounded">
            <h5 className="text-success"> Payroll Integration Support</h5>
            <p>Seamlessly integrate with payroll systems to calculate salaries, deductions, and generate payslips with zero hassle.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="border p-4 shadow-sm rounded">
            <h5 className="text-success">Role-Based Access & Security</h5>
            <p>Ensure data security and compliance with customizable access levels for admins, HR managers, and employees.

</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="border p-4 shadow-sm rounded">
            <h5 className="text-success">Performance Monitoring Tools</h5>
            <p>Track employee performance with feedback tools, KPIs, and periodic reviews to help enhance talent management.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="border p-4 shadow-sm rounded">
            <h5 className="text-success">Recruitment & Onboarding Support</h5>
            <p>Simplify hiring processes with built-in recruitment modules, resume tracking, and smooth onboarding workflows.

</p>
          </div>
        </div>
      </div>
    </div><br/><br/>
    </div>
  )
}
