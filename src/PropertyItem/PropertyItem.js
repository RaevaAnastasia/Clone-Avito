import React from 'react';
import './PropertyItem.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import axios from 'axios';

function PropertyItem(props) {

    function getItemInfo(id) {
        axios.get('http://134.209.138.34/item/' + id)
            .then(responce => alert(responce))
            .catch((error => {
                alert('Error');
            }
            ))
    }

    return (
        <div className="property">
            <div className="property__wrap">
                <h3 className="property__title">
                    <Router>
                        <Link to="/">{props.title}</Link>
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