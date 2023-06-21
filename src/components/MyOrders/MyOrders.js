import React, { useEffect, useState} from 'react';
import Swal from 'sweetalert2'




const MyOrders = () => {

    const email = sessionStorage.getItem("email");
    const [services, setServices] = useState([]) ;
     const [constrol, setControl] = useState(false);

         useEffect( () =>{
             fetch(`https://aladin-tour-and-travels-backend.vercel.app/myOrders/${email}`)
             .then(res => res.json())
                 .then(data => setServices(data));

         }, [constrol]);

     const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Are you sure ,you cancel this order?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://aladin-tour-and-travels-backend.vercel.app/deleteOrder/${id}`, {
                method: "DELETE",

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setControl(!constrol);
                        Swal.fire(
                            'Deleted!',
                            'Your order has been deleted.',
                            'success'
                          )
                    }
                })
              
            }
          })
       

            
  
        
         
     };

    return (
        <div>
            <h1 className = 'text-center mt-5 fw-bold'> My Orders</h1>

            <div className='card-container container mt-lg-5 mt-3 pt-lg-5 pt-3'>
                <div className="row  row-cols-1 row-cols-md-3 g-4">
                  {
                      services.map(service =>(
                          <div key={service?._id} >
                              <div className="col h-100 card-style">
                                  <div className="card h-100">
                                      <img src={service?.imageLink} className="card-img-top" alt="" />
                                      <div className="card-body">
                                          <h5 className ='fw-bold'>Package:{service?.packageName}</h5>
                                          <h6 className =" fw-bold">Clint's name: {service?.name}</h6>
                                          <h6>Class: <span className="text-success fw-bold">{service?.model}</span></h6>
                                          <p>Traveling date: {service?.date} </p>
                                          <p >Order status:   <span className="text-primary">{service?.status}</span></p>
                                          <h4 className="line-color fw-bold mb-3">Cost: {service?.price}$ </h4>
                                          <button onClick={() => handleDelete(service?._id)} className="bg-danger px-5 py-2 text-white border rounded py-1 "><i className="far fa-window-close"></i> Cancel</button>

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