import React, { useState } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import './PropertyDetails.css';

function PropertyDetails() {
    let {id} = useParams();
    let [result, setResult] = useState([]);
    let imgs = result.images;
    let imgList = [];
    let headImg = document.querySelector('.detail__img');
    let thumb = document.querySelector('.detail__img-wrap');

    axios.get('http://134.209.138.34/item/' + id)
        .then(responce => { 
            setResult(responce.data[0]);
        })
        .catch((error => {
            alert('Error' + error);
        }
        ))
    
    if (imgs) {
        imgList =  imgs.map((elem, i) => {
            return <li className="detail__img-item" key={i}>
                    <a className="detail__img-link" href={elem}>
                        <img className="detail__img" src={elem} alt={result.title}></img>
                    </a>
                </li>
        })
    }
    
    if (thumb) {
        thumb.onmouseover = function(event) {
            let thumbnail = event.target.closest('a');
    
            if (!thumbnail) return;
            showThumbnail(thumbnail.href, thumbnail.alt);
            thumbnail.focus();
            event.preventDefault();
        }

        thumb.onclick = function(event) {
            event.preventDefault();
        }
    
        function showThumbnail(href, alt) {
            headImg.src = href;
            headImg.alt = alt;
        }
    }

    return (<section className="detail container">
            <div className="detail__left-side">
                <h1 className="detail__title">{result.title}</h1>
                <ul className="detail__img-wrap">
                    {imgList[0]}
                    {imgList}
                </ul>
            </div>
            <div className="detail__right-side">
                <p className="detail__desc">
                    <span className="detail__subtitle">Описание: </span> 
                    {result.description}</p>
                <p className="detail__address">
                    <span className="detail__subtitle">Адрес: </span>
                    {result.address}
                </p>
                <p className="detail__seller">
                    <span className="detail__subtitle">Владелец: </span>
                    {result.sellerName}
                </p>
                <p className="detail__price">
                    <span className="detail__subtitle">Цена: </span>
                    {result.price}
                </p>
            </div> 
        </section>
    );
}

export default PropertyDetails;