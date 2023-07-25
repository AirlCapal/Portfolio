import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ background: 'darkblue' }}>
      <div className="container-fluid sticky-top" style={{ background: 'darkblue' }}>
        <a className="navbar-brand" href="#" style={{ color: 'white' }}>
          <img src="/newlogo.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2" />
          AirLuna Creations
        </a>

        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
