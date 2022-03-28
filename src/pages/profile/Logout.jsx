import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import user from "../../assets/person_1.jpg";
import Signup from "../signup/Signup";

import "./profile.css";
import "../../components/componentMediaQ.css";

import { useNavigate } from "react-router-dom";

const Logout = () => {
  const setshowDelete = () => {
    confirmAlert({
      title: "Confirm  Account Delete",
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

  const setshowLogout = () => {
    confirmAlert({
      title: "Confirm Logout",
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

  const navigate = useNavigate();

  const pushProfile = () => {
    navigate("/profile");
  };
  const pushLogout = () => {
    navigate("/logout");
  };

  return (
    <>
      <div className="profile_container">
        <div className="profile_head">
          <div className="profile_arrow">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="arrow_icon"
              onClick={pushProfile}
            />
            <h2>Profile</h2>
          </div>
        </div>

        <div>
          <div className="profile_info" id="profile_info">
            <div className="profile_picture">
              <img src={user} alt="" />
            </div>

            <h5>2,000 Connections</h5>
            <h2>Elite Jonathan</h2>
            <h4>University of benin</h4>

            <h4 style={{ color: "#27D6AE" }}>
              Chemical Engineering, Engineering
            </h4>
          </div>
        </div>

        <div className="trigger_btns">
          <div className="logout" onClick={setshowLogout}>
            <span>Logout</span>{" "}
            <FontAwesomeIcon icon={faSignOut} className="sign_icon" />
          </div>

          <div className="delete" onClick={setshowDelete}>
            <span>Delete Account</span>
            <FontAwesomeIcon icon={faTrashAlt} className="trash_icon" />
          </div>
        </div>

        <div className="logoo">
          <h3>
            edu<span className="styled_logo">PUS.</span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Logout;
