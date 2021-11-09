
import React from 'react';

const AddNewServices = () => {
    return (
        <div>
            <div className="container">
                <div className="text-center my-4">
                <h1>ADD A NEW TOUR SERVICE</h1>
                </div>
                <form>
                <div className="row addtoursforms">
                    <div className="col-lg-8">
                    <div className="mb-4">
                    <label for="tourName" className="d-block fs-4  mb-1">Toure Name</label>
                    <input placeholder="Tour Name" className="fs-4 w-100 genaralInput" name="tourName" autocomplete="off"/>
                                  </div>
                                  
                                  <div className="mb-4">
                                  
                                  <label for="" className="d-block fs-4 mb-1">Total Cost</label>
                                  
                                  <input placeholder="Price" className="d-block w-100 genaralInput" type="number" name="Price"/>
                                  
                                  </div>

                                  <div className="mb-4">
                                   
                                   <label for="" className="d-block fs-4 mb-1">Short Description</label>
                                   <textarea rows="5" placeholder="Short Description" className="d-block w-100 genaralInput" name="shortDescription"></textarea>

                                   </div>

                                   <div className="mb-4">
                                       
                                       <label for="" className="d-block fs-4 mb-1">Description Title</label>
                                       
                                       <input placeholder="Description Title" className="d-block fs-5 w-100 genaralInput" name="descriptionTitle"/>
                                       
                                       </div>
                                       
                                       <div className="mb-3">
                                           
                                           <label for="" className="d-block fs-4 mb-1">Toure Description</label>
                                           
                                           <textarea rows="10" placeholder="Description" className="d-block w-100 genaralInput" name="description"></textarea>
                                           
                                           </div>
                                           
                                           <div className="a">
                                               
                                               <label for="" className="d-block fs-4 mb-1">Stay Time</label>
                                               
                                               <input placeholder="Stay Time" className="d-block w-100 genaralInput" name="stayTime"/>
                                                   
                                                   </div>
                                                   
                                                   </div>
                                                   
                                                   <div className="col-lg-4">
                                                       
                                                       <div className="mb-3">
                                                           <label for="" className="d-block fs-5 mb-1">Location</label>
                                                           
                                                           <input placeholder="Location" className="d-block w-100 genaralInput" name="location"/>
                                                           
                                                           </div>
                                                           
                                                           <div className="mb-3">
                                                               
                                                               <label for="" className="d-block fs-5 mb-1">Departure Time</label>
                                                               
                                                               <input placeholder="Departure Time" className="d-block w-100 genaralInput" name="departureTime" />
                                                                   
                                                                   </div>
                                                                   
                                                                   <div className="mb-3"><label for="" className="d-block fs-5 mb-1">Return Time</label><input placeholder="Return Time" className="d-block w-100 genaralInput" name="returnTime"/></div>
                                                                   
                                                                   <div className="mb-3"><label for="" className="d-block fs-5 mb-1">Included</label><input placeholder="Included" className="d-block w-100 genaralInput" name="included"/></div>
                                                                   
                                                                   
                                                                   <div className="mb-3"><label for="" className="d-block fs-5 mb-1">Not Incluted</label><input placeholder="Not Incluted" className="d-block w-100 genaralInput" name="notIncluted"/></div>
                                                                   
                                                                   
                                                                   <div className="mb-3"><label for="" className="d-block fs-5 mb-1">Thamble Image URL</label><input placeholder="imgURL" className="d-block w-100 genaralInput" name="thambleimgURL"/></div>
                                                                   
                                                                   
                                                                   
                                                                   <div className="mb-3"><label for="" className="d-block fs-5 mb-1">Cover Image URL</label><input placeholder="imgURL" className="d-block w-100 genaralInput" name="coverimgURL"/></div>
                                                                   
                                                                   
                                                                   <div className="mb-3">
                                                                       
                                                                       <label for="" className="d-block fs-5 mb-1">Gallery Image One</label><input placeholder="Gallery Image One" className="d-block w-100 genaralInput" name="galleryImage1"/></div>
                                                                       
                                                                       <div className="mb-3">
                                                                           
                                                                           <label for="" className="d-block fs-5 mb-1">Gallery Image Tow</label><input placeholder="Gallery Image Tow" className="d-block w-100 genaralInput" name="galleryImage2"/></div>
                                                                           
                                                                           
                                                                           <div className="mb-3">
                                                                               <label for="" className="d-block fs-5 mb-1">Gallery Image Three</label>
                                                                               
                                                                               <input placeholder="Gallery Image Three" className="d-block w-100 genaralInput" name="galleryImage3"/></div>
                                                                               </div></div>
                                                                               
                                                                               <div className="my-3">
                                                                                   <input type="submit" value="Add Service"/></div>
                                                                                   
                                                                                   
                                                                                   
                                                                                   
                                  </form>
                                  
                            </div>
        </div>
    );
};

export default AddNewServices;
