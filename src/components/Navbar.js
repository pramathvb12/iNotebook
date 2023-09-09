import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  let history = useHistory();
  var location = useLocation(); //usage of useloaction hook
  const handleLogout = () => {
    //remove token from localstorage
    localStorage.removeItem("token");
    history.push("/login");
  };
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img
            src="https://www.cloudnotes.io/wp-content/uploads/2019/04/cropped-cluud-notes-logo-1.png"
            alt=""
            width={60}
            height={60}
            style={{ borderRadius: "30%" }}
          />
          <Link className="navbar-brand mx-4" to="/">
            iNotebook
          </Link>
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
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginLeft: 100 }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{ marginLeft: 100 }}>
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : " "
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item" style={{ marginLeft: 100 }}>
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : " "
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <form className="d-flex" style={{ marginLeft: 50 }}>
                <Link
                  className="btn btn-primary mx-5"
                  to="/login"
                  role="button"
                >
                  LOGIN
                </Link>
                <Link
                  className="btn btn-primary mx-5"
                  to="/register"
                  role="button"
                >
                  REGISTER
                </Link>
                {/* <button style={{marginLeft:100}} className="btn btn-outline-success" type="submit">
                LOGIN
              </button>
              <button  style={{marginLeft:100}} className="btn btn-outline-success" type="submit">
                REGISTER
              </button> */}
              </form>
            ) : (
              <button className="btn btn-primary mx-5" onClick={handleLogout}>
                LOGOUT
              </button>
              // if already login than logout
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
