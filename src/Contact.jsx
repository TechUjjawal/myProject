import React from "react";
import axios from "axios";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      middlename: "",
      lastname: "",
      phonenumber: "",
      email: "",
      message: "",
      loading: false,
    };
    this.Update = this.Update.bind(this);
  }

  Update() {
    this.setState({
      loading: true,
    });
    let url = "http://localhost:8000/api/users/contactus";
    axios.post(url, this.state).then(
      (response) => {
        console.log(response.data);
        alert(response.data.message);
        this.setState({
          firstname: "",
          middlename: "",
          lastname: "",
          phonenumber: "",
          email: "",
          message: "",
          loading: false,
        });
      },
      (error) => {
        this.setState({
          loading: false,
        });
      }
    );
  }

  render() {
    return (
      <div>
        <div className="my-2">
          <h1 className="text-center">Contact US</h1>
        </div>

        <div className="container align-item-center mb-5">
          <div className="row">
            <div className="col-lg-6 col-md-10 col-sm-10 col-10 mx-auto">
              <form>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    value={this.state.firstname}
                    onChange={(e) => {
                      this.setState({
                        firstname: e.target.value,
                      });
                    }}
                    name="firstname"
                    id="exampleFormControlInput1"
                    placeholder="First Name"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    value={this.state.middlename}
                    onChange={(e) => {
                      this.setState({
                        middlename: e.target.value,
                      });
                    }}
                    name="middlename"
                    id="exampleFormControlInput1"
                    placeholder="Middle Name"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    value={this.state.lastname}
                    onChange={(e) => {
                      this.setState({
                        lastname: e.target.value,
                      });
                    }}
                    name="lastname"
                    id="exampleFormControlInput1"
                    placeholder="Last Name"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    value={this.state.phonenumber}
                    onChange={(e) => {
                      this.setState({
                        phonenumber: e.target.value,
                      });
                    }}
                    name="phonenumber"
                    id="exampleFormControlInput1"
                    placeholder="Mobile Number"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    value={this.state.email}
                    onChange={(e) => {
                      this.setState({
                        email: e.target.value,
                      });
                    }}
                    id="exampleFormControlInput1"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    value={this.state.message}
                    onChange={(e) => {
                      this.setState({
                        message: e.target.value,
                      });
                    }}
                    name="message"
                    id="exampleFormControlTextarea1"
                    placeholder="Enter a message..."
                    rows="3"
                  ></textarea>
                </div>

                <div class="col-12">
                  <button
                    class="btn btn-primary"
                    type="button"
                    onClick={this.Update}
                  >
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
