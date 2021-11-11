import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register,
          handleSubmit,
          watch,
           formState: { errors } } = useForm();

    const onSubmit = data =>{
        fetch("http://localhost:9000/addServices", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data),
        })
        .then(res=> res.json())
        .then(result => console.log(result));

        
    };

    
    return (
        <div className="d-flex justify-content-center align-items-center ">
            
            <div className = " card-style mt-5 px-3 py-2 py-lg-5 rounded ">
                <h2 className = 'text-center fw-bold'>ADD A SERVICE</h2>
                <img src="/addservice.png" className='mx-auto d-block px-5' alt="" />
                <form onSubmit={handleSubmit(onSubmit)}>


                    <input className='ps-1 py-2 w-100  my-1'
                        placeholder='Name'
                        required
                        defaultValue="" {...register("name")} />
                    <br />


                    <textarea className='ps-1 py-2 w-100 my-1 '
                        placeholder='Description'
                        type ='text'
                        {...register("description", { required: true })} />
                    <br />

                    <input className='ps-1 py-2 w-100 my-1 '
                        type='date'
                        {...register("date", { required: true })} />
                    <br />


                    <input className='ps-1 py-2 w-100 my-1 '
                        placeholder='image url'
                        type ='text'
                        {...register("imageLink", { required: true })} />
                    <br />

                    <input className='ps-1 py-2 w-100 my-1 '
                        placeholder='Price'
                        type='number'
                        required
                        {...register("price", { required: true })} />
                    <br />


                    <select {...register("model", { required: true })} className='ps-1 py-2 w-100 my-1 '
                      
                        type='number'
                        required
                         >

                        <option value="premium">premium</option>
                        <option value="classic">classic</option>
                        <option value="business">business</option>

                    </select>
                    <br />




                    {errors.exampleRequired && <span>This field is required</span>}


                    <button className='ps-1 py-2 rounded w-100 my-3 submit-btn' type = 'submit'> <i className="fas fa-plus"></i> ADD </button>
                </form>


            </div>
             
            
        </div>
    );
};

export default AddService;






