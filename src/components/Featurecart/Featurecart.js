

import React from 'react';
import { NavLink } from 'react-router-dom';

const Featurecart = (props) => {
    /* ---------Distructring the props-------- */
    const { name, price, description, date, imageLink, model } = props.feature;
    return (
        <div className="">
            {/* -----------Home page tours section------------ */}
            <div className="col h-100 card-style">
                <div className="card h-100">
                    <img src={imageLink} className="card-img-top" alt="tours-img" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"> {description} </p>
                        <h6 className=" fw-bold">Class: {model} </h6>
                        <h6 className=" fw-bold">Price:$ {price}</h6>
                        <h6 className=" fw-bold">Traveling Time: {date} </h6>
                        <NavLink to="/tours"> <button className=" mt-4 px-lg-5 py-lg-2 px-4 py-2 service-btn rounded ">Learn more</button></NavLink>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Featurecart;