import React from 'react'
import AboutusNavbar from './AboutusNavbar'

export default function AboutAs() {
  return (
     <div className='background-sectionabout'>
      <AboutusNavbar></AboutusNavbar>
      <div className="container mt-5">
        <h2 className="text-center text-primary mb-4">About SmartWork Solutions</h2>

        <div
          className="p-5 shadow-sm rounded text-center"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <p>
            <strong>SmartWork Solutions</strong> is a dynamic software product company dedicated to building smart, scalable, and efficient tools for modern organizations.
            Our flagship product — the <strong>Employee Management System</strong> — is designed to simplify HR processes, enhance team productivity, and ensure data-driven decisions in workforce management.
          </p>

          <p>
            We believe in delivering <strong>enterprise-grade software</strong> with intuitive user experiences and cutting-edge technologies. Our solution empowers businesses to automate administrative tasks, monitor employee lifecycle, and manage talent seamlessly — all from a single platform.
          </p>

          <p>
            Our development team is composed of experienced engineers and product strategists who focus on innovation, data security, and real-world usability.
            We leverage modern technologies including:
          </p>

          <div className="d-flex flex-column align-items-center mt-4">
            <div>✅ Spring Boot (Java Backend)</div>
            <div>✅ ReactJS (Responsive Frontend)</div>
            <div>✅ MySQL (Relational Database)</div>
            <div>✅ RESTful API Architecture</div>
          </div>

          <p className="mt-4">
            At SmartWork, we are committed to excellence, innovation, and delivering digital tools that evolve with your workforce.
          </p>
        </div>
      </div>
    </div>
  )
}
