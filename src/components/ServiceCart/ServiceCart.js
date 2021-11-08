

import React from 'react';

const ServiceCart = (props) => {
    /* -----------Props distructring for Easy use--------- */
    const { name, price, img, duration, enrolled, doctor } = props.tour;

    return (
        <div>
            {/* ------------Creating Card Using BootStrap------------- */}
            <div className="col h-100 card-style">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-text">Price: {price}</h6>
                        <h6>Tratment Duration: {duration} Days</h6>
                        <h6>Already Treated: {enrolled} </h6>
                        <h5 className="card-title">Specialist Dr. {doctor}</h5>
                        <button className=" mt-4 px-lg-5 py-lg-2 px-4 py-2 service-btn rounded ">Booked Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;