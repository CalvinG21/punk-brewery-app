import React from 'react'
import CardList from "../CardList/CardList";
import "./Main.scss"; 

const Main = (props) => {
  const { beerData } = props; 
  return (
    <div className = "main"> 
      <CardList  beerData = {beerData}/>
    </div>
  )
}

export default Main
