import React from "react";
import Navbar from "./navbar";
import "./App.css";
import userlogo from "./user.png";
import { RadioGroup, Radio } from "react-radio-group";
import { Container, Row, Col } from "reactstrap";
import background from "./asfalt-dark.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function App() {
  return (
    <React.Fragment>
      <div className="main">
        <Navbar></Navbar>
        <title>Add Company</title>
        <link rel="stylesheet" type="text/css" href="App.css" />
        <div className="companybox">
          {/*  ADD ANY LOGO ON THE TOP OF THE BOX*/}
          <h1>Add Company</h1>
          <form>
            <div>
              <div className="container-fluid">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <p>Name of the Company :</p>
                      <input
                        type="text"
                        name="compid"
                        placeholder="Enter Company name"
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <p>Offer Type :</p>
                      <input
                        type="text"
                        name="links"
                        placeholder="Enter Offer type"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="container-fluid">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <p>Category :</p>
                      <input
                        type="text"
                        name="category"
                        placeholder="Enter Category"
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <p>Open For :</p>
                      <input
                        type="text"
                        name="openfor"
                        placeholder="Open for"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <br></br>
              <div className="container-fluid">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-4">
                      <p>Registration Starts :</p>
                      <br></br>
                      <input type="date" name="regstart" required />
                    </div>
                    <div className="col-lg-4">
                      <p>Registration Ends :</p>
                      <br></br>
                      <input type="date" name="regend" required />
                    </div>
                    <div className="col-lg-4">
                      <p>OnCampus Date :</p>
                      <br></br>
                      <input type="date" name="oncampusdate" required />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div>
              <div className="container-fluid">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-12">
                      <p>Posting Locations :</p>
                      <br></br>
                      <textarea
                        rows="4"
                        cols="55"
                        name="posting_location"
                        placeholder="Enter Posting Locations"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <button class="button button1">Add Company</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;
