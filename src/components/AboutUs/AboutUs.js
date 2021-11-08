import React from 'react';
import { NavLink } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div>
            <div className="container row mt-5 pt-lg-5">
                {/*-------------- About section img and description ----------*/}
                <div className="col-lg-7 col-12">
                    <img className="w-100" src="./about.svg" alt="" />
                </div>

                <div className="col-lg-5 col-12">
                    <h2 className="fw-bold  mt-5 ms-lg-5 ps-lg-5">ABOUT US</h2>
                    <p className="mt-lg-5 ms-lg-5 ps-lg-5">Aladin Tour & Travel focus on customer satisfaction. We provide service as lower cost as we can. No other company can do this for you.. Always we provide you safe and comfortable tour and hotel tours. join  us and make your tour better....  </p>
                    {/* --------- Back to home Route------------- */}
                    <NavLink className="ms-lg-5" to="/home"> <button className=" ms-lg-5  px-lg-5 py-lg-2 px-4 py-2 primery-btn rounded ">Visite home</button></NavLink>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;