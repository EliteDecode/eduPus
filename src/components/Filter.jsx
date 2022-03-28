import React from "react";

import "./component.css";
import "./componentMediaQ.css";

const Filter = ({ blured }) => {
  const trigger = (e) => {
    e.preventDefault();
    var modal = document.getElementById("modal");
    modal?.classList.toggle("show");

    blured();
  };
  return (
    <div className="filter">
      <form>
        <div className="search_tab">
          <input
            type="search"
            className="form-control"
            placeholder="Student search..."
            onClick={trigger}
          />
        </div>
        <div className="filter_inputs" id="modal" style={{ display: "none" }}>
          <h5>Filter Students</h5>

          <div className="inputs">
            <label htmlFor="school">School</label> <br />
            <select name="school" id="">
              <option value="" selected disabled>
                Select school
              </option>
              <option value="">Uniben</option>
              <option value="">Unilag</option>
              <option value="">UniCad</option>
            </select>
          </div>
          <div className="inputs">
            <label htmlFor="school">Faculty</label> <br />
            <select name="school" id="">
              <option value="" selected disabled>
                Select Faculty
              </option>
              <option value="">Uniben</option>
              <option value="">Unilag</option>
              <option value="">UniCad</option>
            </select>
          </div>
          <div className="inputs">
            <label htmlFor="school">Department</label> <br />
            <select name="school" id="">
              <option value="" selected disabled>
                Select Department
              </option>
              <option value="">Uniben</option>
              <option value="">Unilag</option>
              <option value="">UniCad</option>
            </select>
          </div>

          <div className="button inputs">
            <input
              type="submit"
              value="Continue"
              className="form-control"
              onClick={trigger}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filter;
