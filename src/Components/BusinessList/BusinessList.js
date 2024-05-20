import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

function BusinessList({ items = [] }) {
    return (
        <div className="business-grid">
            {items.map((item, i) => (
                <Business item={item} key ={i} />
            ))}
        </div>
    );
}

export default BusinessList;


