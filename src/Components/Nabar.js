import React from 'react';
import { useNavigate } from 'react-router-dom';


function Navbar() {
  // logout function //
  async function logout() {
    localStorage.removeItem('token')
    Navigate('/login')
  }
  //----------------------//  

  const Navigate = useNavigate();
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary sticky-top"> {/* Added 'sticky-top' class for sticky behavior */}
        <div className="container-fluid">
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://github.com/hafizhammad123/working-time/blob/main/pngwing.com%20(29).png?raw=true"
                height="90"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => Navigate("/adds")}>My-Adds</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => Navigate("/sell")}> SELL </a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <a className="text-reset me-3" href="#">
              <i className="fa-solid fa-lock text-dark " onClick={logout}> logout</i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
