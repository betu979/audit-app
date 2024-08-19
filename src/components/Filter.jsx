import React from 'react'
import './filter.scss'

const Filter = () => {
  return (
    <div id='filter'>
      <div className='filter-content'>
        <label>Filter</label>
        <select>
            <option>All Audit Type</option>
        </select>
      </div>
    </div>
  )
}

export default Filter
