import React from 'react';
import './App.css';
import BusinessList from './Components/BusinessList/BusinessList';
import Header from './Components/Header/Header';
import sampleData from './Components/sampleData';


function App() {
  return (
      <div className="App">
        <h1 style={{
            backgroundColor: 'goldenrod',
            height: '5%',
            margin: '0%',
            padding: '1%'
            }}>ravenous</h1>
        <Header />
        <BusinessList items={sampleData} />
      </div>
  );
}

export default App;