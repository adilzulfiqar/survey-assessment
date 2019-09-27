import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { abc } from "../../store/actions/action";

function Info(props) {
  const onSubmit = e => {
    // e.preventDefault();
    props.abc(state);
  };
  const [state, setstate] = useState(props.data);

  console.log("state", state);

  var invitedBy = e => {
    // console.log("working invitedBy", e.target.value);
    setstate({
      ...state,
      invitedBy: e.target.value,
    });
    // console.log("value", state);
  };

  var fullName = e => {
    // console.log("working invitedBy", e.target.value);
    setstate({
      ...state,
      fullName: e.target.value,
    });
    // console.log("value", state);
  };

  var email = e => {
    // console.log("working invitedBy", e.target.value);
    setstate({
      ...state,
      email: e.target.value,
    });
    // console.log("value", state);
  };

  return (
    <Fragment>
      <div className="info">
        <div>
          <img className="logo" src="images/avatar.png" alt="" />
          <p>
            Please Take a few Seconds and let us know who asked you to complete
            this evaluation. who you are, and your email address so we can send
            you your results.
          </p>

          <form>
            <label>Who invited You To Take This Evalution?</label>
            <br />
            <select onChange={invitedBy}>
              <option value="Select">Select</option>
              <option value="Select1">Select1</option>
              <option value="Select2">Select2</option>
            </select>
            <br />
            <br />
            <br />
            <br />
            <label>
              Full Name
              <br />
              <input
                onChange={fullName}
                type="text"
                placeholder="First name & last name"
              />
            </label>
            <br />
            <br />
            <label>
              Email Address (We will send you the results)
              <br />
              <input
                onChange={email}
                type="email"
                placeholder="email@address.com"
              />
            </label>
            <div style={{ textAlign: "right" }}>
              <Link to="/getStarted" onClick={onSubmit}>
                Continue
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

Info.propTypes = {};

const mapStatetoProps = state => {
  return {
    data: state.personalInformation,
  };
};

export default connect(
  mapStatetoProps,
  { abc }
)(Info);
