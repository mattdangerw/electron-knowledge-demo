import React, { PropTypes } from 'react'

const SearchEntry = ({ text, onChange }) => (
  <input className='search-entry' value={text} onChange={onChange} />
)

SearchEntry.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default SearchEntry
