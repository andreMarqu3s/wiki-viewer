import React from 'react'
import './SearchResult.css'

function SearchResult({name, link}) {
  return (
    <div className='result-box'>
        <a href={link} target="_blank" rel="noreferrer">{name}</a>
    </div>
  )
}

export default SearchResult