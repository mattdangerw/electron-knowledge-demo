import React from 'react'
import { remote } from 'electron'

const minimize = () => {
  const electronWindow = remote.getCurrentWindow()
  electronWindow.minimize()
}

const maximize = () => {
  const electronWindow = remote.getCurrentWindow()
  if (electronWindow.isMaximized()) electronWindow.unmaximize()
  else electronWindow.maximize()
}

const close = () => {
  const electronWindow = remote.getCurrentWindow()
  electronWindow.close()
}

const WindowButtons = () => (
  <div className='windowbuttons'>
    <button className='minimize' onClick={minimize}>
      <div className='icon icon-window-minimize' />
    </button>
    <button className='maximize' onClick={maximize}>
      <div className='icon icon-window-maximize' />
    </button>
    <button className='close' onClick={close}>
      <div className='icon icon-window-close' />
    </button>
  </div>
)

export default WindowButtons
