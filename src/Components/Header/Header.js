import React from 'react';
import './Header.css'; // import the CSS file

function Header() {
  return (
    <React.Fragment>
    <div className="header">
      <div className="header-buttons">
        <button style={{ alignSelf: 'flex-start' }}>Best<br />Match</button>
        <button style={{ alignSelf: 'center' }}>Highest<br />Rated</button>
        <button style={{ alignSelf: 'flex-end' }}>Most<br />Reviewed</button>
      </div>
      <div className="header-inputs">
        <input type="text" placeholder="Search Business" />
        <input type="text" placeholder="Where?" />
      </div>
      <button className="search-button">Let's Go</button>
    </div>
    </React.Fragment>
  );
}

export default Header;
