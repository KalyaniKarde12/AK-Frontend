import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast'
const Header = () => {
  const [auth, setAuth] = useAuth()

  const handleLogout = () => {
    setAuth({
      ...auth, user: null, token: ''
    })
    localStorage.removeItem("auth");
    toast.success("Logout Succcesfully ")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Navbar</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  to="#"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/action">Action</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/another">Another action</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/something-else">Something else here</NavLink></li>
                </ul>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">Register</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">Login</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      to="#"
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li><NavLink className="dropdown-item" to={`/dashboard/${auth?.user?.role==1?'admin':'user'}`}>Dashboard</NavLink></li>
                      <li className="dropdown-item" >
                        <NavLink onClick={handleLogout} to="/login" className="nav-link">Logout</NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )
              }
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">Cart</NavLink>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
