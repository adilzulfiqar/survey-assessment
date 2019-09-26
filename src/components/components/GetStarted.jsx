import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'

function GetStarted (props) {
  return (
    <Fragment>
      <div className='getStarted'>
        <div>
          <img className='logo' src='images/avatar.png' alt='' />
          <img src='images/banner.png' alt='' className='banner' />
          <p>
            Great! Let's Get Started (First Name I Vou Hill be shown series of
            10 mindsets (ways of thinking) about the core values we have at
            YouTopia. We will examine things like customer obsession,
            transparency & candor, unique ability. thinking big, innovation, and
            conviction, Each mindset question Will ask you to rate yourself on a
            scale Of I • 12, With 4 separate scoring statements that "ill help
            guide your score choice. You will be asked to score how you're
            thinking about things today and how you desire to think about things
            in the future.
          </p>
          <div style={{ textAlign: 'right', marginRight: 10 }}>
            <Link to='/caution'>Continue</Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

GetStarted.propTypes = {}

export default GetStarted
