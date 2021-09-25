import React from 'react'

const Skillscard = (props) => {
    return (
        <>
        <div className="card mb-3 shadow-lg p-3 mb-5 bg-body rounded ">
        <div className="row g-0">
          <div className="col-md-4 ">
            <img src={props.img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={ props.percent}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Skillscard
