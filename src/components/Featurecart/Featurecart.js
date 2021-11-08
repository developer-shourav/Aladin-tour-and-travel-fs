

import React from 'react';
import { NavLink } from 'react-router-dom';

const Featurecart = (props) => {
    /* ---------Distructring the props-------- */
    const { name, price, img } = props.feature;
    return (
        <div className="">
            {/* -----------Home page tours section------------ */}
            <div className="col h-100 card-style">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="tours-img" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"> Price: {price}</p>
                        <NavLink to="/tours"> <button className=" mt-4 px-lg-5 py-lg-2 px-4 py-2 service-btn rounded ">Learn more</button></NavLink>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Featurecart;