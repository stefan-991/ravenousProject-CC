import React from 'react';
import './Business.css';


function Business({ item }) {
    return (
        <React.Fragment>
            <div className="business-card">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="a-no-underline">
                    <img src={item.image_url} alt={item.name} className="business-image" />
                </a>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="a-no-underline">
                    <h2 className="h2-hover">{item.name}</h2>
                </a>
                <div className="business-info">
                    <div className="business-text">
                        <p>{item.location.address1}</p>
                        <p>{item.location.city}</p>
                        <p>{item.location.state} {item.location.zipCode}</p>
                    </div>
                    <div className="business-stats">
                        <h3 style={{ textTransform: 'uppercase' }}>{item.category}</h3>
                        <p>{item.rating} stars</p>
                        <p className="review">{item.review_count} reviews</p>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
};

export default Business;
