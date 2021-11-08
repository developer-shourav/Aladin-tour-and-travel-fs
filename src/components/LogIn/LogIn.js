

import React from 'react';
import "./LogIn.css" ;


const LogIn = () => {
    
   

  
    return (
      /* ------- Login form container------------- */
      <div className="d-flex justify-content-center align-items-center ">
          <div className = "login-form card-style mt-5 px-3 py-3 rounded " >
          <h2>LOG IN</h2>
            <form >
               {/* ------------Log in input style -------------- */}
              <input className = " ps-1 w-100 my-1" type="email" name=""  id="" placeholder = "Your Email" />
              <br />
              <input className = " ps-1 w-100 my-1" type="password" name="" id="" placeholder ="Password" /> 
              <br />
            <input className=" w-100 py-1 my-1 primery-btn rounded " type="submit" value="Submit" />
            </form>
          <div className="">----------------Or----------------</div>
          <button
            className="primery-btn rounded text-center w-100 px-4 py-2"
            
           >Google Sign In</button>
          </div>
        </div>
    );
};

export default LogIn;