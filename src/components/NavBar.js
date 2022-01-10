import {Link} from "react-router-dom";

const NavBar=() =>
{
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
        <div className="container-fluid">
          <Link to={"/"}>
            <div className="navbar-brand" href="/">Navbar</div>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"}>
                  <div className="nav-link active" aria-current="page">Home</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"}>
                  <div className="nav-link active">About</div>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;