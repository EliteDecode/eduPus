import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import user from "../../assets/person_1.jpg";
import Signup from "../signup/Signup";

import "./profile.css";
import "../../components/componentMediaQ.css";

import { useNavigate } from "react-router-dom";

const Profile = () => {
  const showSignUp = (e) => {
    e.preventDefault();
    var hidesign = document.getElementById("signUp");
    hidesign?.classList.add("show");
    console.log("show");
    var studentBio = document.getElementById("student_bio");
    studentBio.classList.add("blur");
    var profileInfo = document.getElementById("profile_info");
    profileInfo.classList.add("blur");
  };

  const submit = (e) => {
    e.preventDefault();
    var hidesign = document.getElementById("signUp");
    hidesign?.classList.remove("show");
    var studentBio = document.getElementById("student_bio");
    studentBio.classList.remove("blur");
    var profileInfo = document.getElementById("profile_info");
    profileInfo.classList.remove("blur");
  };

  const navigate = useNavigate();

  const pushHome = () => {
    navigate("/home");
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
              onClick={pushHome}
            />
            <h2>Profile</h2>
          </div>

          <FontAwesomeIcon
            icon={faSignOut}
            className="sign_icon"
            onClick={pushLogout}
          />
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

            <button onClick={showSignUp}>Connect</button>
          </div>
        </div>

        <div style={{ display: "none", position: "relative" }} id="signUp">
          <div style={{ position: "absolute" }} className="profile_connect">
            <Signup submit={submit} />
          </div>
        </div>

        <div>
          <div className="student_bio" id="student_bio">
            <p>
              Hi dear 🥰, <br /> My name is Ehiosun Bishop <br /> a student of
              the University of Benin. Chemical Engineering.. <br />
              <br /> Lets connect!!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
