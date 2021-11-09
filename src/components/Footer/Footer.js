import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (

        <div className=" footer-bg ">
            {/* ------------Footer main container----------------- */}
            <div className="container">
                <div className="row  pt-4 ">
                    <div className="col-12 col-lg-3 my-lg-0 my-4">
                        <h2 className='heading-color'>About Us</h2>
                        <p className="text-white">
                            We are the best travel agencey in the world . All time time we want gain our coustmers satisfaction.
                        </p>

                        <h2 className='heading-color py-1 fw-bold'>Get Social</h2>
                         {/* Social link icons */}
                         <div className="pt-2">
                            <span className='socialicon-style socialicon-style-fb rounded-circle'><i className="fab fa-facebook-f "></i></span>
                            <span className='socialicon-style rounded-circle' ><i className="fab fa-twitter"></i></span>
                            <span className='socialicon-style rounded-circle'><i className="fab fa-instagram"></i></span>
                         </div>
                    </div>

                    <div className="col-12 col-lg-3 my-lg-0 my-4  ">
                        <h2 className='heading-color fw-bold '>Contact Us</h2>
                        <span className="text-white"><i className="fas fa-map-marker-alt"></i> Kashimpur, Nawabgonj, Dhaka -1320<hr />  </span>
                        <span className="text-white"><i className="fas fa-phone"></i>  +880 5556600 <hr /> </span>
                        <span className="text-white"><i className="fas fa-mobile-alt"></i> +880 193233880  <hr /> </span>
                        <span className="text-white"><i className="fas fa-envelope"></i> ShouravRajB.999@gmail.com <hr />  </span>

                    </div>

                    <div className="col-12 col-lg-3 ps-lg-5 my-lg-0 my-4">
                        <h2 className='heading-color fw-bold text-decoration-none '>Menu</h2>
                        <Link to='/home' className='text-white text-decoration-none'>Home </Link><br /><br />
                        <Link to='/tours' className='text-white text-decoration-none'>Tours </Link><br /><br />
                        <Link to='/about' className='text-white text-decoration-none'>About </Link><br /><br />
                        <Link to='/contact' className='text-white text-decoration-none'>Contact </Link>
                        
                    </div>

                    <div className="col-12 col-lg-3 my-lg-0 my-4">
                        <h1 className='heading-color fw-bold text-decoration-none '>Newsletter</h1>
                        <p className="text-white">
                            Sing up for our newsletter and get updated about our latest services.
                        </p>
                        <input className = 'mt-2 p-2 w-100  rounded' type="email" name="" id="" placeholder = 'Enter Your eamil' /> 
                        <input type="submit" className = 'mt-2 px-5 w-100 bg-warning border-1 text-white rounded  py-2' value="SUSCRIBE" />
                    </div>
                </div>
                <br />
                <p className='text-white'> </p>
            </div>
           
            
            {/* ------------Copy right holder info------------------ */}
            <br />

            <p className="text-center text-white pb-3 ">Copyright © 2021 Shourav Raj.com</p>
        </div>
    );
};

export default Footer;