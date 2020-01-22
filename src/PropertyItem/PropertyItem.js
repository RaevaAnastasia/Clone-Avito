import React from 'react';
import './PropertyItem.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';

function PropertyItem(props) {

    return (<div className="property">
            <div className="property__wrap">
                <h3>
                    <Router>
                        <Link className="property__title" to={'/' + props.id} target="_blank" id={props.id}>{props.title}</Link>
                    </Router>      
                </h3> 
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