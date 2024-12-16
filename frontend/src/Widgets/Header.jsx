import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, BarChart, Settings, Home, Menu, X } from 'lucide-react';
import myContext from '../CreateContext';


const Header = () => {
  const c = useContext(myContext);
  const [burger, setburger] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    c.setpayload(c.decodeToken());
    const w = window.innerWidth;
    if (w < 800) {
      const original = document.getElementById('header-ext');
      original.classList.add("d-none");
      const mobile = document.getElementById('mobile-header');
      mobile.classList = "d-flex justify-content-between p-3";
    }
  }, []);
  function handleLogout() {
    localStorage.clear();
    c.showAlert("User logged out");
    setTimeout(() => {
      navigate('/');
      window.location.reload();
    }, 1000);

  }

  function handleBurger() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("d-none");
    setburger(!burger);
  }

  return (
    <>

      {/* header for mobile  */}
      <div id='mobile-header' className="d-none" >
        <div className="fw-bold fs-4 text-dark">
          a<span className="text-primary">Ex</span>
        </div>


        <div className="menu-cont d-flex flex-column align-items-end" >

          <button id="menu-toggle" onClick={handleBurger} className="btn btn-outline-dark " style={{ width: "fit-content" }}>
            {burger ? <Menu size={20} /> : <X size={20} />}
          </button>

          <div id="menu" className="d-flex flex-column my-1 p-2 d-none text-center" >
            <Link to="/" className=" text-decoration-none mx-2 my-2" onClick={handleBurger}>Overview</Link>
            <Link to="/analytics" className=" text-decoration-none mx-2 my-2" onClick={handleBurger}>Analytics</Link>
            <Link to="/settings" className=" text-decoration-none mx-2 my-2" onClick={handleBurger}>Settings</Link>
            <button onClick={handleLogout} className="btn btn-outline-danger d-flex align-items-center ">
              <LogOut size={20} />
              <span className="ms-2  d-md-inline">Logout</span>
            </button>
          </div>
        </div>
      </div>


      {/* header for full screen */}
      <div id='header-ext' className="d-flex justify-content-between align-items-center p-3 bg-white shadow-sm border-bottom">
        {/* Logo */}
        <div className="fw-bold fs-4 text-dark">
          ability<span className="text-primary">Ex</span>
        </div>

        <nav id='' className="d-flex align-items-center gap-4">
          <Link to="/" className="d-flex align-items-center text-dark text-decoration-none hvr-glow p-2 rounded-pill ">
            <Home size={20} />
            <span className="ms-2 d-none d-md-inline">Overview</span>
          </Link>
          <Link to="/analytics" className="d-flex align-items-center text-dark text-decoration-none hvr-glow p-2 rounded-pill ">
            <BarChart size={20} />
            <span className="ms-2 d-none d-md-inline">Analytics</span>
          </Link>
          <Link to="/settings" className="d-flex align-items-center text-dark text-decoration-none hvr-glow p-2 rounded-pill ">
            <Settings size={20} />
            <span className="ms-2 d-none d-md-inline">Settings</span>
          </Link>
          <div className="d-flex align-items-center">
            <span className="me-2 rounded-pill px-3 py-1 bg-primary text-light">{c.payload.username}</span>
            <button onClick={handleLogout} className="btn btn-outline-danger d-flex align-items-center border-0 rounded-pill px-3 py-1 text-dark">
              <LogOut size={20} />
              <span className="ms-2 d-none d-md-inline">Logout</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
