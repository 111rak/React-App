import React from "react";
import propTypes from "prop-types";
// import { Link } from "react-router-dom";




export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand " to = "/"> */}
        <a className="navbar-brand " href = "/#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/"> Home */}
              <a className="nav-link active" aria-current="page" href="/#"> Home
              </a>
            </li>

            <li className="nav-item">
              {/* <Link className="nav-link" to="/about" > {props.About}  */}
              <a className="nav-link" href="/#" > {props.About} 
              </a>
            </li>
          </ul>
 
          <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}` }>
            <input onClick = {props.toggle}
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">
              Enable Dark Mode
            </label> 
           </div>
        </div>
      </div>
    </nav>
  
  );

}


Navbar.propTypes = {
  title: propTypes.string.isRequired,
  About: propTypes.string,
};
// {/* // Navbar.defaultProps = {
// //     title:"Rakesh",
// //     About: "Roni"
// // }; */}
