import React from 'react';
import './Header.css'; // import the CSS file



function Header({ sort, handleChangeSort, handleNameChange, handleLocationChange, handleClick }) {
  return (
    <React.Fragment>
      <div className="header">
        <form />
        <div className="header-buttons">
          <input
            type="radio"
            id="bestMatch"
            name="bestMatch"
            value="bestMatch"
            checked={sort === 'bestMatch'}
            onChange={handleChangeSort}
            className="btn-radio"
          />
          <label htmlFor="bestMatch" className="btn-label">Best<br />Match</label>

          <input
            type="radio"
            id="highestRated"
            name="highestRated"
            value="highestRated"
            checked={sort === 'highestRated'}
            onChange={handleChangeSort}
            className="btn-radio"
          />
          <label htmlFor="highestRated" className="btn-label">Highest<br />Rated</label>

          <input
            type="radio"
            id="mostReviewed"
            name="mostReviewed"
            value="mostReviewed"
            checked={sort === 'mostReviewed'}
            onChange={handleChangeSort}
            className="btn-radio"
          />
          <label htmlFor="mostReviewed" className="btn-label">Most<br />Reviewed</label>
        </div>
        <div className="header-inputs">
          <input type="text" placeholder="Search Business" onChange={handleNameChange} />
          <input type="text" placeholder="Where?" onChange={handleLocationChange} />
        </div>
        <button type="submit" className="search-button" onClick={handleClick}>Let's Go</button>
        <form />
      </div>
    </React.Fragment>
  );
}

export default Header;
