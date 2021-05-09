import React from "react";
import { Link } from "react-router-dom";

const Event = ({ event }) => {
  const id = event._id; 
  // console.log(id)
  

 
  return (
    <div className="col-12 col-sm-6 col-md-3">
      <div className="m-3">
        <img className="img-fluid" src={event.imageURL} alt="" />
        <h3>
          {event.name} - {event.weight}
        </h3>
        <div className="d-flex justify-content-between align-items-center">
          <p className="display-6 text-success">${event.price}</p>
          {/* <Link to='/order'>
            <button className="btn btn-success" onClick={() => loadProduct(event._id)}>Buy Now</button>
          </Link> */}
          
            <Link className="btn btn-success" to={'/buy/'+id}>Buy Now</Link>
         
        </div>
      </div>
    </div>
  );
};

export default Event;
