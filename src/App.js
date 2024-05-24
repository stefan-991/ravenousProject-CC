import React, { useState } from 'react';
import './App.css';
import BusinessList from './Components/BusinessList/BusinessList';
import Header from './Components/Header/Header';
import ScrollToTheTop from './Components/ScrollToTheTop/ScrollToTheTop'
import sampleData from './Components/sampleData';//Outcomment this line
//import getYelpRestaurants from './Utils/Utils';//Restore this line


function App() {

  //Sort Handling
  const [sort, setSort] = useState('bestMatch');

  function handleChangeSort({ target }) {
    setSort(target.value);
  }

  //Company Name Handling
  const [name, setName] = useState('');

  function handleNameChange({ target }) {
    setName(target.value);
  }

  //Location Handling
  const [location, setLocation] = useState('');

  function handleLocationChange({ target }) {
    setLocation(target.value);
  }

  //Handle data change
  const [yelpData, setYelpData] = useState([]);

  //Handle Form Submit and fetch from Yelp
  //const handleClick = async (event) => {//Restore this line
  const handleClick = (event) => {//Outcomment this line
    event.preventDefault();
    console.log(`Searching Yelp with ${name}, ${location}, ${sort}`);
    //let response = await getYelpRestaurants(name, location, sort);//Restore this line
    //setYelpData(response);//Restore this line
    setYelpData(sampleData);//Remove this line
  }

  return (
    <div className="App">
      <h1 style={{
        backgroundColor: 'goldenrod',
        height: '5%',
        margin: '0%',
        padding: '1%'
      }}>ravenous</h1>
      <Header sort={sort} handleChangeSort={handleChangeSort} handleNameChange={handleNameChange} handleLocationChange={handleLocationChange} handleClick={handleClick} />
      <ScrollToTheTop />
      <BusinessList items={yelpData} />
    </div>
  );
}

export default App;