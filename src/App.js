import React from "react";
import Navbar from "./navbar";
import "./App.css";
import userlogo from "./user.png";
import { RadioGroup, Radio } from "react-radio-group";
import background from "./asfalt-dark.png";

var sectionStyle = {
  backgroundImage: "url(" + background + ")"
};

function App() {
  return (
    <React.Fragment>
      <img src={background} className="main" />
      <div className="main">
        <Navbar></Navbar>
        <title>Add User</title>
        <link rel="stylesheet" type="text/css" href="App.css" />
        <div className="loginbox">
          <img src={userlogo} className="user" />
          <h1>Add User</h1>
          <form>
            <p>User Name :</p>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              required
            />
            <p>Password :</p>
            <input
              pattern=".{8,}"
              type="password"
              placeholder="Enter Password"
              required
            />
            <p>Email ID :</p>
            <br></br>
            <input
              type="email"
              pattern="{/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}"
              name="emailid"
              placeholder="Enter EmailID"
              required
            />
            {/* Guys, Input pattern for first name and last name is /^[A-Za-z]+$/ and it can only be verified when form is submitted, DURING BACKEND*/}
            <p>First Name :</p>
            <input
              type="text"
              name="fname"
              placeholder="Enter First Name"
              required
            />
            <p>Last Name :</p>
            <input
              type="text"
              name="lname"
              placeholder="Enter Last Name"
              required
            />
            <div>
              <p>Gender :</p>
              <br></br>
              <RadioGroup
                name="Gender"
                style={{ display: "flex", width: "80%" }}
              >
                <Radio value="male" />
                Male
                <Radio value="female" />
                Female
              </RadioGroup>
            </div>
            <p id="age">Age :</p>
            <input
              type="text"
              name="age"
              placeholder="Enter your Age for eg: 20 years"
              required
            />
            <p>Address :</p>
            <textarea
              type="textarea"
              rows="4"
              cols="30"
              name="address"
              placeholder="Enter Address"
              required
            />
            <p>College ID :</p>
            <input
              type="text"
              name="cid"
              placeholder="Enter college ID"
              required
            />
            <p>Link for LinkedIn :</p>
            <input type="text" name="links" placeholder="Enter link" required />
            <button class="button button1">Add User</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;
