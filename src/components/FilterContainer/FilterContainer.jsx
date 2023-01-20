import React from 'react'
import "./FilterContainer.scss"
import FiltersList from '../FiltersList/FiltersList';

import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';


const FilterContainer = (props) => {
  const {  filterBeers } = props; 
  return (
    <div className="navbarz">
      <form className = "navbar__form">
       <div className="navbar__form__filters">
          <h5 className = "navbar__form__filters-label">Filter & Viewing Settings </h5> 
          <FiltersList filterBeers = {filterBeers} />
        </div>
      </form>
    </div>
     
    
  
  )
}

export default FilterContainer
