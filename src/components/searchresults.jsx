import React, { PropTypes } from 'react'
import Card from './card'

const SearchResults = ({ query, state, results, onResultClick }) => {
  if (state === 'PENDING' || query === '') return <div className='search-results' />

  if (state === 'ERROR') {
    return (
      <div className='search-results'>
        <p className='search-results-error'>An error occurred :(</p>
      </div>
    )
  }

  const models = results ? results.get_models() : []
  if (models.length === 0) {
    return (
      <div className='search-results'>
        <p className='search-results-no-results'>No results for "{query}"</p>
      </div>
    )
  }

  return (
    <div className='search-results'>
      <ul className='search-results-list'>
        {models.map(model =>
          <Card key={model.ekn_id} model={model} onClick={() => onResultClick(model)} />
        )}
      </ul>
    </div>
  )
}

SearchResults.propTypes = {
  query: PropTypes.string,
  state: PropTypes.string,
  results: React.PropTypes.object,
  onResultClick: React.PropTypes.func
}

export default SearchResults
