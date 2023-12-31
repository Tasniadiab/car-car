import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          CarCar
        </NavLink>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople">
                Salesperson
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople/create">
                Add a Salesperson
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customer">
                Customers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customer/create">
                Add a Customer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salesrecord">
                Sales Records
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales">
                Sales List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/saleshistory">
                Sales Person History
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers/">Manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers/create">
                Create a Manufacturer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models">
                Models
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models/create">
                Create a Model
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles/">Automobiles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles/create">
                Create an Automobile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technicians/">Technicians</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technician/new/">Add a Technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appoinments/">Service Appointments</NavLink>
              </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appoinments/new/">Make an Appointments</NavLink>
              </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appoinments/history/">Service History</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
