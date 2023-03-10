import React from 'react'; 
import "./Card.scss"; 

import 'bootstrap/dist/css/bootstrap.css';

const Cardx = (props) => {
  const {name, tagline, description, food_pairing , imageUrl,abv} = props;
  return (
    
   
    

     <div className="beerCard" >
              <section className="beerCardS1">
                <img src={imageUrl} />

              </section>
              <section className="beerCardS2">
                <h2>{name}</h2>
                <h4>{tagline}</h4>
                <p>{description}</p>
                <p>Traditionally paired with {food_pairing} .</p>
               
               
                <h3 >ABV: {abv}%</h3>
              </section>
    </div>



    // <div className="card">
    //   <div className="card__item-1">
    //     <img className="card__item-1__img" src = {imageUrl} alt="beer" />
    //     <p className="card__item-1__abv"> abv: {abv} </p>
    //     <p className="card__item-1__ph"> pH: {pH} </p> 
    //   </div>
    //   <div className = "card__item-2"> 
    //     <h2 className="card__item-2__name"> {name} </h2>
    //     <p className="card__item-2__first-brewed"> First Brewed: {firstBrewed} </p>
    //     <h4 className="card__item-2__tagline"> {tagline}</h4>
    //     <p className="card__item-2__description"> {description} </p>
    //   </div> 
    // </div>
  )
}

export default Cardx
