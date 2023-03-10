import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/images/logo.png'

function NavBar() {
  return (
    <div id="nav-container">
      <nav className="navbar navbar-expand navbar-dark">
        <a className="navbar-brand" href="/">
          <img src={logo} className="d-inline-block align-middle" alt="carli n. logo" />
          carl[i]++
        </a>


        <div className="navbar-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            About
          </NavLink>
          <NavLink
            to="projects"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="contact"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
