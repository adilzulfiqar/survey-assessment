import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'
function Survey (props) {
  return (
    <Fragment>
      <div className='main'>
        <header>
          <img className='logo' src='images/avatar.png' alt='' />
          <div className='top'>
            <div>
              Mindset Evluation Progress
              <div class='progress-bar'>
                <div class='progress' style={{ height: 16, width: '20%' }} />
              </div>
              <div className='evaluation-score'>
                <p>Total Evaluation Score</p>
                Today&nbsp;
                <span>2</span>
                &nbsp; Desired Future &nbsp;
                <span>0</span>
              </div>
            </div>
          </div>
        </header>
        <section className='survey'>
          <div className='heading'>
            <p>Customer Obsession Mindset</p>
            <h3>Score</h3>
          </div>
          <div className='results'>
            <div className='top'>
              <p>Today, on a scale of 1-12, how "Customer Obessesd" are you</p>
              <div className=''>
                Today <span>2</span> <br />
                <div
                  style={{
                    width: 20,
                    display: 'inline'
                  }}>
                  {' '}
                  Desired Future
                </div>
                <span>0</span>
              </div>
            </div>
            <div className='questionnaire'>
              <div className='question'>
                <div className='head'>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>
                <p>
                  You believe your personal tastes and opinions are what others
                  want. <br />
                  Everyone else is working if they don't see it your way.
                </p>
              </div>
              <div className='question'>
                <div className='head'>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>
                <p>
                  You believe your personal tastes and opinions are what others
                  want. <br />
                  Everyone else is working if they don't see it your way.
                </p>
              </div>
              <div className='question'>
                <div className='head'>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>
                <p>
                  You believe your personal tastes and opinions are what others
                  want. <br />
                  Everyone else is working if they don't see it your way.
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link to='/results'>Submit</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  )
}

Survey.propTypes = {}

export default Survey
