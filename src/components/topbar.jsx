import React, { PropTypes } from 'react'
import WindowButtons from './windowbuttons'

const TopBar = ({ onHomeClick }) => (
  <div className='topbar'>
    <button className='home' onClick={onHomeClick}>
      <div className='icon icon-home' />
    </button>
    <WindowButtons />
  </div>
)

TopBar.propTypes = {
  onHomeClick: PropTypes.func.isRequired
}

export default TopBar
