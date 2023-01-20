import React from 'react';
import "./FiltersList.scss"; 
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = (props) => {
  const { filterBeers } = props; 
  return (
    <div className = "filters"> 
      <FilterItem inputType="checkbox" filterProperty = "abv" filterLabel = "Alcohol By Volume >= 5%" filterBeers = {filterBeers}/> 
      <FilterItem inputType="button" filterProperty = "nextBeers" filterLabel = "View next 9 beers" filterBeers = {0}/> 
      <FilterItem inputType="button" filterProperty = "prevBeers" filterLabel = "View prev 9 beers" filterBeers = {0}/>  
    </div>
  )
}

export default FiltersList