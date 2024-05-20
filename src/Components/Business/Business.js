import React from 'react';
import './Business.css';
            

function Business({item}) {
    return (
        <React.Fragment>
            <div className="business-card" >
                <img src={item.imageSrc} alt={item.name} className="business-image"/>
                <h2>{item.name}</h2>
                <div className="business-info">
                    <div className="business-text">
                        <p>{item.address}</p>
                        <p>{item.city}</p>
                        <p>{item.state} {item.zipCode}</p>
                    </div>
                    <div className="business-stats">
                        <h3 style={{ textTransform: 'uppercase' }} >{item.category}</h3>
                        <p>{item.rating} stars</p>
                        <p className="review">{item.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Business;
