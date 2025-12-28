import React from 'react'
import AboutusNavbar from './AboutusNavbar'

export default function ContactUs() {
  return (
    <div>
      <div className='background-sectioncontact'>
        <AboutusNavbar></AboutusNavbar>
      <div className="container mt-5 text-dark text-center">
        <h2 className="text-primary mb-4">Contact Us</h2>

        <p>
          We'd love to hear from you! Whether you have questions about our Employee Management System, want a live demo,
          or need support, feel free to reach out.
        </p>

        <div className="mt-4">
          <h5 className="text-success">📧 Email</h5>
          <p>support@smartworksolutions.com</p>

          <h5 className="text-success">📞 Phone</h5>
          <p>+91 98765 43210</p>

          <h5 className="text-success">📍 Address</h5>
          <p>SmartWork Solutions Pvt. Ltd., Hinjewadi Phase 2, Pune, Maharashtra, India</p>
        </div>

        <p className="mt-4">
          Our support team is available Monday to Friday, 10:00 AM to 6:00 PM IST.
        </p>
      </div>
    </div>
    </div>
  )
}
