import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'

function Caution (props) {
  return (
    <Fragment>
      <div className='caution'>
        <div>
          <img className='logo' src='images/avatar.png' alt='' />
          <img src='images/banner.png' alt='' className='banner' />
          <p>
            [First Name] <br />
            Please remember, this is self-evaluation, not a test, There are no
            right or wrong answers. Only your personal truth, as it exists
            today. So, please answer as honestly and openly as possible. The
            accuracy of your answers will determine the quality of your report,
            The evaluation should take approximately 2-3 minutes to complete,
            When you're finished we will email a summary of your scores.
          </p>
          <div style={{ textAlign: 'right', marginRight: 10 }}>
            <Link to='/survey'>Continue</Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

Caution.propTypes = {}

export default Caution
