import React, { useState } from 'react';
import PropertyItem from '../PropertyItem/PropertyItem.js';
import axios from 'axios';
import './PropertyList.css';

function PropertyList() {
    let [list, setList] = useState([]);

    axios.get('http://134.209.138.34/items')
        .then(responce => {
            setList(responce.data);
        })
        .catch(error => {
            alert("Ошибка");
    })     

    let propertyList = list.map((elem, i) => {
            return <li className="property-item" key={i}>
                <PropertyItem title={elem.title} address = {elem.address} price = {elem.price} previewImage = {elem.previewImage} id={elem.id}/>
            </li>
        })

        
    return (<ul className="property-list">
        {propertyList}
    </ul>);
}

export default PropertyList;