import React, { useEffect, useState } from 'react';
import ServiceCart from '../ServiceCart/ServiceCart';


const Tours = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch("https://aladin-tour-and-travels-backend.vercel.app/allServices")
            .then(res => res.json())
            .then(data => setTours(data))

    }, []);

    return (

        <div>
            <div className="container text-center mt-lg-5 mt-5"> <h1 className = 'fw-bold'>OUR TOP RATED TOURS</h1> </div>
            <div className="card-container container mt-lg-5 mt-3 pt-lg-5 pt-3">
                <div className="row  row-cols-1 row-cols-md-3 g-4">
                    {
                        tours.map(tour => <ServiceCart
                            /* -----Using key for avoid error--------- */
                            key={tour._id}
                            /* -----Sending Props fo Service Card--------- */
                            tour={tour}
                        >

                        </ServiceCart>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Tours;