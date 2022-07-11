import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`} >
  <div className="container-fluid" >
    <a className="navbar-brand" href="#" style={{color: props.mode==='dark'?'white':'#1f1c4b'}}>{props.title}</a>      {/* js must be passed in {} in JSX */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{color: props.mode==='dark'?'white':'black'}}>Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about" style={{color: props.mode==='dark'?'white':'#1f1c4b'}} >{props.aboutText}</Link>
        </li> */}
      
      </ul>
      
      <div className={`form-check form-switch text-${props.mode==='green'?'red':'green'}`}>  {/* To color the text according to the mode */}
        <input className="form-check-input" type="checkbox" onClick={props.enablebtn2} role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" for="flexSwitchCheckDefault" >Enable Green Mode</label>
      </div>

      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>  {/* To color the text according to the mode */}
        <input className="form-check-input" type="checkbox" onClick={props.enablebtn} role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" for="flexSwitchCheckDefault" >Enable Dark Mode</label>
      </div>

        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button> */}
    </div>
  </div>
</nav>
  )
}

// This will make sure that only string is sent and this is done using '.string' in proptype. If anything else is sent then error will be thrown.

Navbar.propTypes = {        // this 'p' is small cased.
    title: PropTypes.string.isRequired,  // will make title compulsory, if no title is passed then will throw error. 
    aboutText: PropTypes.string
};

Navbar.defaultProps = {        // this means if nothing is passed in props then use these values as default. 
    title: 'Set title here',
    aboutText: 'About' 
};
  