import React from 'react';

function PropertyDetails(props) {
    return (
        <section className="detail">
            <div className="detail__left-side">
                <h1 className="detail__title">{props.title}</h1>
                <ul className="detail__img-wrap">
                    {props.images.map((elem, i) => {
                            return <li className="detail__img-item" key={i}>
                                    <img className="detail__img" src={elem}></img>
                                </li>
                        }
                    )}
                </ul>
                <p className="detail__price">{props.price}</p>
            </div>
            <div className="detail__right-side">
                <p className="detail__desc">{props.description}</p>
                <p className="detail__address">{props.address}</p>
                <p className="detail__seller">{props.sellerName}</p>
            </div>
        </section>
    );
}

export default PropertyDetails;