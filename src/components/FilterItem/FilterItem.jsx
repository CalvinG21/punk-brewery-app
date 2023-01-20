import React from 'react';
import "./FilterItem.scss";

const FilterItem = (props) => {
  const { inputType,filterProperty, filterLabel, filterBeers } = props; 
  return (
    <div className='filter_item'>
      <label for = {`filters__${filterProperty}`} > {filterLabel} </label>
      <input type={inputType} id={`filters__${filterProperty}`} name={`filters__${filterProperty}`} className='filter_input' value={filterProperty} onClick={filterBeers} />
    </div>
  )
}

export default FilterItem
