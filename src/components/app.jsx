import React from 'react'
import AppTopBar from '../containers/apptopbar'
import HomePage from './homepage'
import ArticlePage from './articlepage'

const App = () => (
  <div className='app'>
    <AppTopBar />
    <div className='pages'>
      <HomePage />
      <ArticlePage />
    </div>
  </div>
)

export default App
