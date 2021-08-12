import React from "react";
import { NavLink } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  Onsubmit = () => {
    let url = "http://localhost:8000/api/users";
    axios.post(url, this.state).then(
      (response) => {
        console.log(response.data);
        alert(response.data.message);
      },
      (error) => {}
    );
  };

  render() {
    return (
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <b className="logoformat">StudyHere</b>
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="menu-aactive"
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu-aactive"
                        className="nav-link"
                        to="about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu-aactive"
                        className="nav-link"
                        to="service"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu-aactive"
                        className="nav-link"
                        to="contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu-aactive"
                        className="nav-link"
                        to="signup"
                      >
                        SignUp
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header bgcolor">
                <h5 class="modal-title" id="exampleModalLabel">
                  CREATE AN ACCOUNT
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <input
                  type="text"
                  value={this.state.firstname}
                  onChange={(e) => {
                    this.setState({
                      firstname: e.target.value,
                    });
                  }}
                  className="form-control"
                  placeholder="first Name"
                />
                <input
                  type="text"
                  value={this.state.middlename}
                  onChange={(e) => {
                    this.setState({
                      middlename: e.target.value,
                    });
                  }}
                  className="form-control"
                  placeholder="Middle Name"
                />
                <input
                  type="text"
                  value={this.state.lastname}
                  onChange={(e) => {
                    this.setState({
                      lastname: e.target.value,
                    });
                  }}
                  className="form-control"
                  placeholder="Last Name"
                />
                <br />

                <PhoneInput
                  country={"in"}
                  value={this.state.phonenumber}
                  onChange={(e) => {
                    this.setState({
                      phonenumber: e,
                    });
                  }}
                />
                <br />
                <input
                  type="text"
                  value={this.state.email}
                  onChange={(e) => {
                    this.setState({
                      email: e.target.value,
                    });
                  }}
                  className="form-control"
                  placeholder="Email Address"
                />
                <br />
                <input
                  type="password"
                  value={this.state.password}
                  onChange={(e) => {
                    this.setState({
                      password: e.target.value,
                    });
                  }}
                  className="form-control"
                  placeholder="Password"
                />

                <br />
              </div>
              <div class="modal-footer">
                {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.Onsubmit}
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
