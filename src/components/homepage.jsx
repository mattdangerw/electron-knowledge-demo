import React from 'react'
import AppLogo from './applogo'
import AppSearchEntry from '../containers/appsearchentry'
import AppSearchResults from '../containers/appsearchresults'

const HomePage = () => (
  <div className='home-page'>
    <AppLogo />
    <AppSearchEntry />
    <AppSearchResults />
  </div>
)

export default HomePage
