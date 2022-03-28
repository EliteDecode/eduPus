import React from "react";
import user from "../assets/person_1.jpg";
import "./componentMediaQ.css";
import "./component.css";
const Student = ({ showSignUp }) => {
  return (
    <div className="student_wrap student_container">
      <div className="row">
        <div className="results ">
          <div className="results_wrap row">
            <div className="student_img col-3">
              <img src={user} alt="user image" />
            </div>
            <div className="student_info col-5">
              <h4>Jonathan Doe</h4>
              <h5>University of benin</h5>
              <h6>
                Physical Science, <br /> Computer Science
              </h6>
            </div>
            <div className="button inputs col-4">
              <input
                type="submit"
                value="Connect"
                className="form-control"
                onClick={showSignUp}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
