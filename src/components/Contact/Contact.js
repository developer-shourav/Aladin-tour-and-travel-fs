import React from 'react';

const Contact = () => {
    return (
        <div>
            {/* --------Contact section's manin container------- */}
            <div className="container mt-lg-5 pt-lg-5">
                <div className="row">
                    <div className="col-12 col-lg-7">
                        {/* --------Contact img ------------- */}
                        <img className = "w-100 rounded" src="./contact.webp" alt="" />
                    </div>
                    <div className="col-12 mt-5 col-lg-5 mt-lg-5 pt-lg-5 ">
                        {/* ------------Contact info--------------- */}
                        <div className="ms-lg-5 ps-lg-4">
                            <h5> <i className="fas fa-phone"></i> Phone: +111 434 334354</h5>
                            <h5> <i className="fas fa-envelope"></i> Email:Aladintravel99@gmail.com</h5>
                            <br />
                            <h6> <i className="fas fa-map-marker-alt"></i> Location: COSTARICA, Condal Business Center, Tibas San Jose - US</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;