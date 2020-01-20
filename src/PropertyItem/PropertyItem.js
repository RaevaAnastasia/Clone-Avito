import React from 'react';

function PropertyItem(props) {
    return (
        <div className="property">
            <div className="property__wrap">
                <h2 className="property__title">{props.title}</h2>
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