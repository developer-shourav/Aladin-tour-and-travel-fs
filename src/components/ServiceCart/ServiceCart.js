

import React from 'react';

const ServiceCart = (props) => {
    /* -----------Props distructring for Easy use--------- */
    const { name, price, description, date, imageLink, model } = props.tour;

    return (
        <div>
            {/* ------------Creating Card Using BootStrap------------- */}
            <div className="col h-100 card-style">
                <div className="card h-100">
                    <img src={imageLink} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="fw-bold" className="card-title">{name}</h5>
                        <p className="card-text"> {description} </p>
                        <h6 className=" fw-bold">Class: {model} </h6>
                        <h6 className=" fw-bold">Price:$ {price}</h6>
                        <h6 className=" fw-bold">Traveling Time: {date} </h6>
                        <button className=" mt-4 px-lg-5 py-lg-2 px-4 py-2 service-btn rounded ">Booked Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;