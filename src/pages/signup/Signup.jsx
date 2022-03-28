import React from "react";
import { Font, FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./signup.css";
import "../../components/componentMediaQ.css";

const Signup = ({ submit, blurred }) => {
  const showSchoolForm = (e) => {
    e.preventDefault();
    var studentNameForm = document.getElementById("student_info_name");
    studentNameForm?.classList.add("hide");
    var studentSchoolForm = document.getElementById("studentSchoolForm");
    studentSchoolForm?.classList.add("show");

    blurred();
  };

  const showNumberForm = (e) => {
    e.preventDefault();
    var studentSchoolForm = document.getElementById("studentSchoolForm");
    studentSchoolForm?.classList.remove("show");
    var studentNumberForm = document.getElementById("studentNumberForm");
    studentNumberForm?.classList.add("show");
    blurred();
  };

  const signIn = (e) => {
    e.preventDefault();
    var studentNumberForm = document.getElementById("studentNumberForm");
    studentNumberForm?.classList.remove("show");
    var studentNameForm = document.getElementById("student_info_name");
    studentNameForm?.classList.add("hide");
    var studentSchoolForm = document.getElementById("studentSchoolForm");
    studentSchoolForm?.classList.remove("show");
    var studentSignIn = document.getElementById("student_signIn");
    studentSignIn?.classList.add("show");
    blurred();
  };
  const signUp = () => {
    var studentNumberForm = document.getElementById("studentNumberForm");
    studentNumberForm?.classList.remove("show");
    var studentNameForm = document.getElementById("student_info_name");
    studentNameForm?.classList.remove("hide");
    var studentSchoolForm = document.getElementById("studentSchoolForm");
    studentSchoolForm?.classList.remove("show");
    var studentSignIn = document.getElementById("student_signIn");
    studentSignIn?.classList.remove("show");

    blurred();
  };

  const backToName = () => {
    var studentNameForm = document.getElementById("student_info_name");
    studentNameForm?.classList.remove("hide");
    var studentSchoolForm = document.getElementById("studentSchoolForm");
    studentSchoolForm?.classList.remove("show");
  };

  const backToSchool = () => {
    var studentSchoolForm = document.getElementById("studentSchoolForm");
    studentSchoolForm?.classList.add("show");
    var studentNumberForm = document.getElementById("studentNumberForm");
    studentNumberForm?.classList.remove("show");
  };

  return (
    <div className="signUp_modal">
      <form>
        {/* Name section */}
        <div id="student_info_name" className="student_inputs">
          <div className="signin_inputs_title">
            <FontAwesomeIcon
              className="icon"
              icon={faArrowLeft}
              onClick={submit}
            />
            <h3 className="filter">Sign Up</h3>
          </div>
          <div className="signin_inputs">
            <label htmlFor="Firstname">Firstname</label>
            <input type="text" placeholder="Firstname" />
          </div>

          <div className="signin_inputs">
            <label htmlFor="Lastname">Lastname</label>
            <input type="text" placeholder="Lastname" />
          </div>

          <div className="signin_inputs">
            <label htmlFor="Sex">Sex</label>
            <select placeholder="Select Department">
              <option value="" selected disabled>
                Sex
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <button
            className="ion-margin-top"
            expand="block"
            onClick={showSchoolForm}
          >
            Next
          </button>

          <div
            className="registered"
            style={{ marginTop: "2%", width: "100%" }}
          >
            <h3 className="sign_in">
              Already registered?{" "}
              <span
                className="styled_logo"
                onClick={signIn}
                style={{ cursor: "pointer" }}
              >
                Sign in
              </span>
            </h3>
          </div>
        </div>

        {/* school section */}

        <div
          id="studentSchoolForm"
          className="student_inputs"
          style={{ display: "none" }}
        >
          <div className="signin_inputs_title">
            <FontAwesomeIcon
              className="icon"
              icon={faArrowLeft}
              onClick={backToName}
            />
            <h3 className="filter">Sign Up</h3>
          </div>
          <div className="signin_inputs">
            <label htmlFor="School">School</label>
            <select placeholder="Select School">
              <option value="" selected disabled>
                School
              </option>
              <option>AAU</option>
              <option>BIU</option>
            </select>
          </div>

          <div className="signin_inputs">
            <label htmlFor="School">Faculty</label>
            <select placeholder="Select Faculty">
              <option value="" selected disabled>
                Faculty
              </option>
              <option>Medicine</option>
              <option>Engineering</option>
            </select>
          </div>

          <div className="signin_inputs">
            <label htmlFor="School">Department</label>
            <select placeholder="Select Department">
              <option value="" selected disabled>
                Department
              </option>
              <option>Chemical</option>
              <option>Biology</option>
            </select>
          </div>

          <button
            className="ion-margin-top"
            expand="block"
            onClick={showNumberForm}
          >
            Next
          </button>

          <div
            className="registered"
            style={{ marginTop: "2%", width: "100%" }}
          >
            <h3 className="sign_in">
              Already registered?{" "}
              <span
                className="styled_logo"
                onClick={signIn}
                style={{ cursor: "pointer" }}
              >
                Sign in
              </span>
            </h3>
          </div>
        </div>

        {/* number section */}
        <div
          id="studentNumberForm"
          className="student_inputs"
          style={{ display: "none" }}
        >
          <div className="signin_inputs_title">
            <FontAwesomeIcon
              className="icon"
              icon={faArrowLeft}
              onClick={backToSchool}
            />
            <h3 className="filter">Sign Up</h3>
          </div>
          <div className="signin_inputs">
            <label htmlFor="PhoneNumber">Phone Number</label>
            <input type="text" placeholder="Phone Number" />
          </div>

          <div className="signin_inputs">
            <label htmlFor="Passowrd">Passowrd</label>
            <input type="password" placeholder="Passowrd" />
          </div>

          <div className="signin_inputs">
            <label htmlFor="Passowrd">Retype Passowrd</label>
            <input type="password" placeholder="Confirm Passowrd" />
          </div>

          <button className="ion-margin-top" expand="block" onClick={signIn}>
            Next
          </button>
          <div className="registered">
            <h3
              className="sign_in"
              style={{ marginTop: "3%", fontSize: "12px" }}
            >
              Kindly enter your whatsapp number below connections are made
              through whatsap
            </h3>
          </div>
        </div>

        {/* sign in section */}
        <div
          id="student_signIn"
          className="student_inputs"
          style={{ display: "none", marginTop: "15%" }}
        >
          <div className="signin_inputs_title">
            <FontAwesomeIcon
              className="icon"
              icon={faArrowLeft}
              onClick={submit}
            />
            <h3 className="filter">Sign In</h3>
          </div>
          <div className="signin_inputs">
            <label htmlFor="number">Phone Number</label>
            <input placeholder="Phone number" type="number" />
          </div>

          <div className="signin_inputs">
            <label htmlFor="password">Password</label>
            <input placeholder="Password" type="password" />
          </div>

          <button className="ion-margin-top" expand="block" onClick={submit}>
            Sign In
          </button>

          <div
            className="registered"
            style={{ marginTop: "2%", width: "100%" }}
          >
            <h3 className="sign_in">
              Don't have an account?{" "}
              <span
                className="styled_logo"
                onClick={signUp}
                style={{ cursor: "pointer" }}
              >
                Sign Up
              </span>
            </h3>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
