import React from 'react';
import './PropertyItem.css';

function PropertyItem(props) {
    return (
        <div className="property">
            <div className="property__wrap">
                <h3 className="property__title">{props.title}</h3>
                <p className="property__address">{props.address}</p>
                <span className="property__price">{props.price}</span>
            </div>
            <div className="property__img-wrap">
                <img className="property__img" src={props.previewImage} alt={props.title}></img>
            </div>
        </div>
    );
}

export default PropertyItem;