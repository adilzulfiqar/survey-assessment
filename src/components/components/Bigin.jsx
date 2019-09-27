import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

function Bigin(props) {
  return (
    <Fragment>
      <div className="bigin">
        <div>
          <img className="logo" src="images/avatar.png" alt="" />
          <img src="images/banner.png" alt="" className="banner" />
          <h2>YouTopia Presents our Core Values Mindset Scorecard</h2>
          <p>Mindset determines everything</p>
          <Link to="/info">Bigin</Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Bigin;
