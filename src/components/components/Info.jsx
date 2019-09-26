import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'

function Info (props) {
  return (
    <Fragment>
      <div className='info'>
        <div>
          <img className='logo' src='images/avatar.png' alt='' />
          <p>
            Please Take a few Seconds and let us know who asked you to complete
            this evaluation. who you are, and your email address so we can send
            you your results.
          </p>

          <form>
            <label>Who invited You To Take This Evalution?</label>
            <br />
            <select>
              <option value='Select'>Select</option>
              <option value='Select1'>Select1</option>
              <option value='Select2'>Select2</option>
            </select>
            <br />
            <br />
            <br />
            <br />
            <label>
              Full Name
              <br />
              <input type='text' placeholder='First name & last name' />
            </label>
            <br />
            <br />
            <label>
              Email Address (We will send you the results)
              <br />
              <input type='email' placeholder='email@address.com' />
            </label>
            <div style={{ textAlign: 'right' }}>
              <Link to='/getStarted'>Continue</Link>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

Info.propTypes = {}

export default Info
