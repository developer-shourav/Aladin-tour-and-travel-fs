
import React, { useEffect, useState } from 'react';
import Featurecart from '../Featurecart/Featurecart';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('https://rocky-dawn-01056.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setFeatures(data))


    }, []);



    return (
        <div className="">
            <div className=''>
                <div className="">
                    {/*------------------ Our main feature ----------------------*/}
                    <div className="">

                        <div className="w-100 mx-auto ">
                            <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>

                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item slider-height active">
                                        <img src="./banner1.jpg" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h2 className="slidr-label">Aladin Tour and Travel</h2>

                                        </div>
                                    </div>
                                    <div className="carousel-item slider-height">
                                        <img src="./banner2.jpg" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block ">
                                            <h2 className="slidr-label slidr-label-diff-color">Your Travel Genie </h2>

                                        </div>
                                    </div>
                                    <div className="carousel-item slider-height">
                                        <img src="./banner3.jpg" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h2 className="slidr-label">Travel more to discover the world</h2>

                                        </div>
                                    </div>
                                    <div className="carousel-item slider-height">
                                        <img src="./banner4.jpg" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h2 className="slidr-label slidr-label-diff-color"> Get specila flight service</h2>

                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*---------------- spcility section Start ----------- */}

            <div className="container py-lg-5  py-5 mt-lg-5 ">
                <h1 className = 'text-center fw-bold'> Our special commitments to our customer</h1>
                <h1 className ="d-none d-lg-block line-color text-center "  >--------------------------------------------------</h1>


                <div className="row text-center g-4 py-lg-5  py-2 mt-2 justify-content-center align-items-center   ">

                    <div className="col-12 col-lg-4 ">
                        <img src="./comitment1.png" alt=""  />
                        <h4 className = "mt-3 fw-bold">FREE CAR SERVICE</h4>
                    </div>

                    <div className="col-12 col-lg-4 ">
                        <img src="./comitment2.png" alt=""  />
                        <h4 className="mt-3 fw-bold">WORLD WIDE BRANCH</h4>
                    </div>

                    <div className="col-12 col-lg-4">
                        <img src="./comitment3.png" alt="" />
                        <h4 className="mt-3 fw-bold">365 DAYS SERVICE</h4>
                    </div>

                    <div className="col-12 col-lg-4 ">
                        <img src="./comitment4.png" alt="" />
                        <h4 className="mt-3 fw-bold">LOWEST PRICE DEAL</h4>
                    </div>

                    <div className="col-12 col-lg-4 ">
                        <img src="./comitment5.png" alt=""  />
                        <h4 className="mt-3 fw-bold">FASTEST BOOKING</h4>
                    </div>

                    <div className="col-12 col-lg-4">
                        <img src="./comitment6.png" alt=""  />
                        <h4 className="mt-3 fw-bold">IN 24 HOURS EMERGENCY BOOKING</h4>
                    </div>

                </div>

            </div>

            {/* ------------------About our Company ------------------------ */}
            <div className="container text-center fw-bold mt-5">
                <h1 className="fw-bold text-dark my-lg-5 my-3 py-lg-5 py-3"> Who we are</h1>

                <div className="w-75  mx-auto">
                    <img className="w-75" src="./about2.svg" alt="" />
                </div>
                <div className="w-75 text-seondary mt-4 mx-auto text-center">
                    <p className="text-center">We are the best tour and travel service provider all over the  world .We work on customer satisfaction. We provide service as lower cost as we can. No other company can do this for you.. Always we provide you safe and comfortable tour and hotel tours. join  us and make your tour better."</p>
                    <button className="ms-lg-5 mt-4 px-lg-5 py-lg-2 px-4 py-2 primery-btn rounded ">Read more</button>
                </div>
            </div>

            {/* --------------------Our tours--------------------- */}
            <div className="container my-3 my-lg-5">
                <h2 className="fw-bold my-2 my-lg-5 py-5 text-center">Best Offers for You</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        features.slice(0,8).map(feature => <Featurecart
                            /* ------Key for error handeling------ */
                            key={feature._id}
                            /* ------Sending Props for homeCard------ */
                            feature={feature}
                        > </Featurecart>)
                    }
                </div>
            </div>

            <div className="container mt-5 pt-5"> 

            <div className="row mt-5 pt-5">
                    <div className="col-12 col-lg-6">
                        <img className="w-100" src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                    </div>
            
             <div className="col-12 col-lg-6">
                        <h1 className="text-center fw-bold mb-4 mt-5 mt-lg-0">WHY CHOOSE US</h1>
                        <p className="fw-bold login-info   ">
                            Whether you know exactly where you want to go, or you are looking for some ideas, Aladin Tours has over 4,500 tours and activities around the world waiting for you to discover. <br /><br />
                            With new destinations continually added, Aladin Tours will change your life one visit at a time, in fact, by simply re-arranging the letters, "Aladin Tours" changes "TRAVEL". I loved it!!! Couldn't believe how great it was, for such a good price. I will definitely book other experiences with you all. Thank you!
                        </p>

                        <NavLink to="/about" className="px-lg-5 text-decoration-none py-lg-2  px-4 py-2 service-btn rounded ">see more </NavLink>
             </div>
                    
            </div>


            </div>



        </div>
    );
};

export default Home;