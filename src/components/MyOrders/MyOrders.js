import React, { useEffect, useState} from 'react';





const MyOrders = () => {

    const email = sessionStorage.getItem("email");
    const [services, setServices] = useState([]) ;
     const [constrol, setControl] = useState(false);

         useEffect( () =>{
             fetch(`http://localhost:9000/myOrders/${email}`)
             .then(res => res.json())
                 .then(data => setServices(data));

         }, [constrol]);

     const handleDelete = (id) => {
        fetch(`http://localhost:9000/deleteOrder/${id}`, {
            method: "DELETE",

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setControl(!constrol);
                }
            })
        console.log(id);

     };

    return (
        <div>
            <h1 className = 'text-center'> My Orders</h1>

            <div className='card-container container mt-lg-5 mt-3 pt-lg-5 pt-3'>
                <div className="row  row-cols-1 row-cols-md-3 g-4">
                  {
                      services.map(service =>(
                          <div key={service?._id} >
                              <div className="col h-100 card-style">
                                  <div className="card h-100">
                                      <img src={service?.imageLink} className="card-img-top" alt="" />
                                      <div className="card-body">
                                          <h4>{service?.name}</h4>
                                          <h6>{service?.model}</h6>
                                          <p>{service?.description}</p>
                                          <h3 className="text-danger">Cost:{service?.price}$ </h3>
                                          <button onClick={() => handleDelete(service?._id)} className="bg-danger text-white border rounded py-1 px-4"> Cancel</button>

                                      </div>
                                  </div>
                              </div> </div>
                      ))
                  }

                </div>
            </div>




        </div>
    );
};

export default MyOrders;