import './App.scss';
import React, {useState, useEffect} from "react";//import use state hook from react
import Main from "./components/Main/Main";

import FilterContainer from "./components/FilterContainer/FilterContainer";

import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

//modern react approach is to use functional components.
//jsx code below, similar to but not html. 
//use curly brackets to include any js expression/code.
//when you want to render 2 or more adjacent elements ,then they must be wrapped in a 'react fragment tag' eg <> jsx_element1 jsx_element2 </>
//props allow for dynamic data to be passed into react components. Proprs are passed via attributes.
//every react component has a built in props object
//react state is a js object used to represent info abot the components current situation



//func react component
const App = () => {
  const [beerData, setBeerData] = useState(""); 
  
  const [apiReqPageNumber,SetApiReqPageNumber]=useState(1);//Todo : getting all beers on one page and getting other pages! 
  
  const fetchBeerData = () => {
    fetch("https://api.punkapi.com/v2/beers?page="+apiReqPageNumber+"&per_page=9")
    .then(response => response.json())
    .then((jsonResponse) => {setBeerData(jsonResponse);console.log()})
    .catch(err => console.log("err"));
  }

/**
 * ToDo:for api Req url param (Page Number).
 *
 * @param   nextPage  true or false .
 * 
 */
const getNextOrPrevSetOfPages=(nextPage)=>{
  if(nextPage==true){
    SetApiReqPageNumber( (prevCount)=>prevCount+1 )//api req for beers on for next page
  }
  else{
        SetApiReqPageNumber( (prevCount)=>prevCount-1 )//api req for beers on for prev page
  }
    
}

/**
 * ToDo:for api Req url param (per_page).
 *
 * @param   drinksPerPage  true or false .
 * 
 */
const getNextOrPrevSetOfDrinks=(drinksPerPage)=>{
 
    
}




//Hooks

// use useEffect to fetch data from API immediately on render. 
  useEffect(fetchBeerData, [])

  //hook that gets run on Load of component
  //never modify state manually , modify state using states-setter func!!!
  //useEffect hook takes 2 params 1.callback and 2.dependancy array
  //if dependancy array is empty then callback only gets invoked once on load of component!
  useEffect( ()=>{
  
    SetApiReqPageNumber(1);
  },[]);

  
 
  //function for filtering
  const filterBeers = (e) => {
    switch(e.target.value) {
      case "abv":
        e.target.checked ? setBeerData(beerData.filter(beer => beer.abv > 5)) : fetchBeerData();
        break;
    
      default:
        break; 
    }
  }

  return (
    <>
       <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#home">Punk Brewery App</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                : <a href="#">Mark Otto</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="App">
              <FilterContainer  filterBeers={filterBeers} />
              <Main  beerData = {beerData} />
        </div>
    </>
  );
}

export default App
