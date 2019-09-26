import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class Bigin extends Component {
  render () {
    return (
      <Fragment>
        <div className='bigin'>
          <div>
            <img className='logo' src='images/avatar.png' alt='' />
            <img src='images/banner.png' alt='' className='banner' />
            <h2>YouTopia Presents our Core Values Mindset Scorecard</h2>
            <p>Mindset determines everything</p>
            <Link to='/info'>Bigin</Link>
          </div>
        </div>
      </Fragment>
    )
  }
}
