import React from "react";
import Header from "../../components/Header";
import Student from "../../components/Student";
import Filter from "../../components/Filter";
import Signup from "../signup/Signup";

import bg from "../../assets/chats.gif";
import "../../components/componentMediaQ.css";
import "./home.css";

const Home = () => {
  const showSignUp = () => {
    var hidesign = document.getElementById("signUp");
    hidesign?.classList.add("show");
    var results = document.getElementById("results");
    results?.classList.add("blur");
    console.log("show");
  };

  // for search  bar
  const blur = () => {
    var results = document.getElementById("results");
    results?.classList.toggle("blur");
  };

  //for signup
  const blurr = () => {
    var results = document.getElementById("results");
    results?.classList.add("blur");
  };

  const submit = (e) => {
    e.preventDefault();
    var hidesign = document.getElementById("signUp");
    hidesign?.classList.remove("show");
    var results = document.getElementById("results");
    results?.classList.remove("blur");
  };
  return (
    <>
      <Header />
      <Filter blured={blur} />

      <div id="results">
        <div className="row">
          <div className="student_results col-md-12 col-lg-12 col-xl-6 col-sm-12">
            <Student showSignUp={showSignUp} />
            <Student showSignUp={showSignUp} />
            <Student showSignUp={showSignUp} />
            <Student showSignUp={showSignUp} />
          </div>
          <div className="student_bg col-lg-12 col-xl-6 col-md-12 col-sm-12">
            <img src={bg} alt="" />
          </div>
        </div>
      </div>

      <div id="signUp" style={{ display: "none" }}>
        <Signup submit={submit} blurred={blurr} />
      </div>
    </>
  );
};

export default Home;
