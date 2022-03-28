import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import user from "../assets/person_1.jpg";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { useNavigate } from "react-router-dom";

import "./component.css";
import "./componentMediaQ.css";

const Header = () => {
  const navigate = useNavigate();

  const pushProfile = () => {
    navigate("/profile");
  };
  const submit = () => {
    confirmAlert({
      title: "Confirm Shuffle",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => alert("Confirmed"),
        },
        {
          label: "No",
          onClick: () => alert("Cancelled"),
        },
      ],
    });
  };
  return (
    <div className="header">
      <div className="header_container">
        <div className="row">
          <div className="profile_pic col-md-4 col-lg-4 col-xl-4 col-sm-3 ">
            <img src={user} alt="user image" onClick={pushProfile} />
            <div className="student_info">
              <h4>Jonathan Doe</h4>
              <h5>University of benin</h5>
              <h6>Physical Science, Computer Science</h6>
            </div>
          </div>
          <div className="logo col-md-3 col-lg-3 col-xl-3 col-sm-3 ">
            <h3>
              edu<span className="styled_logo">PUS.</span>
            </h3>
          </div>
          <div className="logo connections col-md-4 col-lg-4 col-xl-4  col-sm-3">
            <h5>
              <span className="styled_logo">234 connections</span>
            </h5>
          </div>

          <div className="shuffle col-md-1 col-lg-1 col-xl-1 col-sm-3 ">
            <FontAwesomeIcon
              icon={faShuffle}
              className="icon"
              onClick={submit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
