
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import "./Booking" ;



const Booking = () => {
    
    const {serviceId} = useParams() ;
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:9000/singleProduct/${serviceId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    } ,[])

 
    console.log(product);


    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
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
                <h3>{product?.description} </h3>
                <h5>Offer price : ${product?.price}</h5>
                <h4 className='text-start line-color-booking'>------------------------</h4>
                 </div>

                  <div className="col-lg-4  mx-auto col-12 card-style mt-5 px-3 py-2 py-lg-4 rounded ">
                <h3 className='text-center fw-bold'>Order This package</h3>
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
                        type = 'email'
                        required
                        placeholder="You Email"
                        {...register("email")} />
                    <br />

                    <label>Name of your package</label>
                    <input className='ps-1 py-2 w-100  my-1'
                        defaultValue = {product?.name}
                        required
                       {...register("packageName")} />
                    <br />

                    <label>Description </label>
                    <textarea className='ps-1 py-2 w-100 my-1 '
                        placeholder='Description'
                        defaultValue={product?.description}
                        type='text'
                        {...register("description", { required: true })} />
                    <br />
                    <label>Date you want to  travel </label>
                    
                    <input className='ps-1 py-2 w-100 my-1 '
                        type='date'
                        {...register("date", { required: true })} />
                    <br />

                    <label>Price of package($): </label>
                    <input className='ps-1 py-2 w-100 my-1 '
                        placeholder='Price'
                        defaultValue={product?.price}
                        type='number'
                        required
                        {...register("price", { required: true })} />
                    <br />

                    <label>Class </label>
                    <select {...register("model", { required: true })} className='ps-1 py-2 w-100 my-1 '
                        defaultValue={product?.model}
                        type='number'
                        required
                    >

                        <option value="premium">premium</option>
                        <option value="classic">classic</option>
                        <option value="business">business</option>

                    </select>
                    <br />




                    {errors.exampleRequired && <span>This field is required</span>}


                    <button className='ps-1 py-2 rounded w-100 my-3 order-now-btn ' type='submit'> <i className="fas fa-cart-plus"></i> Order Now </button>
                </form>


            </div> 

            </div>
        
    );
};

export default Booking;