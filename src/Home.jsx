import React from 'react'
import HomeNavbar from './HomeNavbar'
import EmpNavbar from './EmpNavbar';
import { useNavigate } from 'react-router-dom';


export default function Home() {

  let navigate = useNavigate();
  return (
    <div className="background-section">
      <HomeNavbar></HomeNavbar><br/>
      <div className="d-flex justify-content-end gap-2" style={{ paddingRight: "0.6cm" }}>
  <button className="btn bg-info text-light" onClick={() => navigate('/register')}>Register/Login</button>
  
</div>


      
      
      <br/><br/><br/><br/>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{"width":"56%"}}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.create.vista.com/api/media/small/315873928/stock-photo-selective-focus-happy-businessman-glasses-smiling-multicultural-coworkers-giving-high" class="d-block w-100" alt="..."
      style={{ width: "100%", height: "450px", objectFit: "cover" }}
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Efficient Workforce Management</h5>
        <p>Track employee records, attendance, roles, and departments—all in one place.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg" class="d-block w-100" alt="..."
      style={{ width: "100%", height: "450px", objectFit: "cover" }}
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Streamlined Operations & Automation</h5>
        <p>Automate employee onboarding, task assignment, and performance tracking.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/599870188/photo/gather-around.jpg?s=170667a&w=0&k=20&c=gbK3VXlVgj78EOG9UILnKiR0-3rwgA1TSrpz2ZMUKvo=" class="d-block w-100" alt="..."
      style={{ width: "100%", height: "450px", objectFit: "cover" }}
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Real-Time Insights & Reporting</h5>
        <p>Make informed decisions with powerful analytics and real-time data visualization.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br/><br/><br/>
    </div>
  )
}
