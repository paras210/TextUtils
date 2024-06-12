import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.modeColor} navbar-${props.modeColor}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>

          <div className='px-3'>
            <button type="button" className="btn btn-primary rounded-circle mx-1 p-2" onClick={()=>props.changeBg('#4973b1')}></button>
            <button type="button" className="btn btn-secondary rounded-circle mx-1 p-2" onClick={()=>props.changeBg('#6c757d')}></button>
            <button type="button" className="btn btn-success rounded-circle mx-1 p-2" onClick={()=>props.changeBg('#519d7a')}></button>
            <button type="button" className="btn btn-danger rounded-circle mx-1 p-2" onClick={()=>props.changeBg('#ce3d4b')}></button>
            <button type="button" className="btn btn-warning rounded-circle  mx-1 p-2" onClick={()=>props.changeBg('#dbaa17')}></button>
          </div>
          <div className={`form-check form-switch text-${props.modeColor === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleFun} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Default switch checkbox input</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}
// Navbar.defaultProps = {
//   title: "set Title here",
//   aboutText: "About Text here"
// }