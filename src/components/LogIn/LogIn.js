

import React from 'react';
import "./LogIn.css" ;


const LogIn = () => {
    
   

  
    return (
      /* ------- Login form container------------- */
      <div className="d-flex justify-content-center align-items-center ">
          <div className = "login-form card-style mt-5 px-3 py-3 rounded " >
        
            <img src="/loginlogo.png" className = 'mx-auto d-block' alt="" />
            <form >
               {/* ------------Log in input style -------------- */}
              <input className = " ps-1 py-2 w-100 my-1" type="email" placeholder = "Your Email" />
              <br />
              <input className = " ps-1 py-2 mb-4 w-100 my-1" type="password" placeholder ="Password" /> 
              <br />
            <input className=" w-100 py-2 my-1 my-2 primery-btn rounded " type="submit" value="LOG IN" />
            </form>
          <div className="">----------------Or----------------</div>
          <button
            className="primery-btn rounded text-center w-100 px-4 py-2"
            
          > <i className="fab fa-google"></i> Log In With google</button>
          </div>
        </div>
    );
};

export default LogIn;