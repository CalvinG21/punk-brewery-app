import React from 'react'
import Cardx from "../Card/Card";
import "./CardList.scss"

import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'; 

const CardList = (props) => {
  const { beerData} = props; 
  const cardArr =  beerData ? beerData.map(beer => { 
    return (
     
      <Col className='my-3' style={{ display: 'block', 
                  }} sm={4}>
          <Cardx
          name={beer.name} 
          food_pairing={beer.food_pairing[0]}
          imageUrl = {beer.image_url}
          tagline= {beer.tagline} 
          firstBrewed = {beer.first_brewed} 
          description = {beer.description} 
          abv = {beer.abv} 
          pH = {beer.ph}/>
      </Col>
      
    )}) : [];
  return (
    <div className="card-list">
      <Row style={{
          backgroundColor: 'black', 
        }}>
          {cardArr}
      </Row>
      
    </div>
  )
}


// const CardList = (props) => {
//   const { beerData, searchResults } = props; 
//   const cardArr = searchResults.length > 0 ? searchResults.map(beer => { return (
//   <Card
//   searchResults = {searchResults} 
//   name={beer.name} 
//   imageUrl = {beer.image_url}
//   tagline={beer.tagline} 
//   firstBrewed = {beer.first_brewed} 
//   description = {beer.description} 
//   abv = {beer.abv} 
//   pH = {beer.ph}/>
//   )}) : beerData ? beerData.map(beer => { // this is the one!!!
//     return (
//       <Card
//       name={beer.name} 
//       imageUrl = {beer.image_url}
//       tagline= {beer.tagline} 
//       firstBrewed = {beer.first_brewed} 
//       description = {beer.description} 
//       abv = {beer.abv} 
//       pH = {beer.ph}/>
//     )}) : [];
//   return (
//     <div className="card-list">
//       {cardArr}
//     </div>
//   )
// }

export default CardList
