
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "./Booking" ;



const Booking = () => {
    
    const {serviceId} = useParams() ;
    const [product, setProduct] = useState({});

    const email = sessionStorage.getItem("email");
    

    useEffect(() => {
        fetch(`https://rocky-dawn-01056.herokuapp.com/singleProduct/${serviceId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    } ,[])

  

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
            data.email = email;
            data.status = "pending";
        data.imageLink = product.imageLink;
        data.price = product.price;
        data.packageName = product.name;

        
        fetch("https://rocky-dawn-01056.herokuapp.com/confirmOrder",{
            method: "POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data),
    
        })
        .then(res =>res.json())
        .then(result=> console.log(result))
        
       

       alert("You book a package successfully")
        reset();
       

    };

   


    return (

             <div className='row container w-100 mx-auto'>


            <div className='col-lg-8 mx-auto col-12   px-3 py-2 py-lg-4 rounded'>
                <h1 className= 'ps-2 mb-3 fw-bold uppercase'>Package</h1>
                <img src={product?.imageLink} className= 'w-100 p-4  d-block  shadow-lg rounded' alt="" />
                <br /><br />
                <h2>{product?.name}</h2>
                <h3 className= 'text-start line-color-booking'>********************</h3>
                <h5>{product?.description} </h5>
                <h4 className="fw-bold mt-2">Offer price : ${product?.price}</h4>
                <h4 className='text-start line-color-booking mb-5'>------------------------</h4>
                <Link to="/allServices" className="text-dark text-decoration-none mt-4 px-lg-5 py-lg-2 px-5 py-2 service-btn rounded  "><i className="  fas fa-arrow-left text-dark">  </i>   Go back   </Link> <div className="d-lg-none"> <br /> </div>

                <Link to="/myOrders" className="text-dark text-decoration-none mt-4 px-lg-5 py-lg-2 px-4 py-2 ms-lg-5 service-btn rounded ">See Your all orders  <i className="fas fa-arrow-right text-dark"></i> </Link>
                
                 </div>

                  <div className="col-lg-4  mx-auto col-12 card-style mt-5 px-3 py-2 py-lg-4 rounded ">
                <h3 className='text-center fw-bold'>Confirm This package</h3>
                <img src="/orderForm.png" className=' w-100 text-center d-block px-5' alt="" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Name </label>
                    <input className='ps-1 py-2 w-100  my-1'
                      
                        required
                        placeholder = "Enter Your Name"
                        {...register("name")} />
                    <br />
                    <label>Email </label>
                    <input className='ps-1 py-2 w-100  my-1'

                       defaultValue ={email}
                        
                        />
                    <br />
                    

                    <label>Name of your package</label>
                    <input className='ps-1 py-2 w-100  my-1'
                        required
                        defaultValue = {product?.name}
                        />
                    <br />

                    <label>Some info about this tour </label>
                    <textarea className='ps-1 py-2 w-100 my-1 '
                        placeholder='Description'
                        required
                        defaultValue={product?.description}
                        type='text'
                        {...register("description")} />
                    <br />

        

                    <label>Date you want to  travel </label>
                    
                    <input className='ps-1 py-2 w-100 my-1 '
                        type='date'
                        required
                        {...register("date")} />
                    <br />

                    <label>Price of package($): </label>
                    <input className='ps-1 py-2 w-100 my-1 '
                        placeholder='Price'
                        required
                        defaultValue={product?.price}
                        type='number'
                         />
                    <br />

                    <label>Class </label>
                    <select {...register("model")} className='ps-1 py-2 w-100 my-1 '
                        defaultValue={product?.model}
                        type='text'
                        required
                    >

                        <option value="premium">premium</option>
                        <option value="classic">classic</option>
                        <option value="business">business</option>

                    </select>
                    <br />




                    {errors.exampleRequired && <span>This field is required</span>}

                    <button className='ps-1 py-2 rounded w-100 my-3 order-now-btn ' type='submit'> <i className="fas fa-cart-plus"></i> Order Now </button>
                    <p className = 'text-center d-none'> <small>Please duble click the button for booking</small> </p>
                </form>


            </div> 

            </div>
        
    );
};

export default Booking;