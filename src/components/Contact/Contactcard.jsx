import React from 'react'
import './Contact.css'

const Contactcard = (props) => {
    return (
        <>
        <div className="card mb-3 contact-card mt-3  p-1  bg-body rounded" >
          <div className="row g-0">
            <div className="col-md-4">
              <img src={props.image} className="img-fluid  rounded-start" alt="..." />
            </div>
            <div className="col-md-8 ">
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                  {props.cardtext}
                </p>
            
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Contactcard
