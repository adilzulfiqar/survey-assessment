import React, { Fragment } from 'react'

function Results (props) {
  return (
    <Fragment>
      <div className='results'>
        <img className='logo' src='images/avatar.png' alt='' />
        <p>
          [First Name] - Congratulations! Your results have been submited and a
          summary has also been emailed to you
        </p>
        <div className='result'>
          [Name] [Date]
          <table>
            <tr>
              <th>Mindset</th>
              <th>Score Today</th>
              <th>Desired Future</th>
            </tr>
            <tr>
              <td>Customer Obsession</td>
              <td>2</td>
              <td>7</td>
            </tr>
            <tr>
              <td>Driven to Exellence</td>
              <td>4</td>
              <td>9</td>
            </tr>
            <tr>
              <td>Enthusiastic & Energetic</td>
              <td>2</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Transparency & Candor</td>
              <td>8</td>
              <td>11</td>
            </tr>
            <tr>
              <td>Frugality & Ownership</td>
              <td>7</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Collaboration</td>
              <td>9</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Unique Ability</td>
              <td>9</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Being Curious</td>
              <td>9</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Innovative</td>
              <td>9</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Bias for Action</td>
              <td>9</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>9</td>
              <td>10</td>
            </tr>
          </table>
        </div>
        <button>Print as PDF</button>
      </div>
    </Fragment>
  )
}

Results.propTypes = {}

export default Results
