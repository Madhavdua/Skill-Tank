import React from 'react';

const RatingCard= () => {
  return (
    <div className=" card bg-primary text-white hvr-push" style={{ width: '300px' }}>
      <div className="p-3">
        <div className="d-flex flex-column">
          <small className="text-light fw-bold">Latest Rating</small>
          <p className='my-1' style={{width:"60px", height:"2px",backgroundColor:"grey"}}></p>
          <p className="my-2 justify-content-center border text-center rounded-pill fw-bold bg-light text-primary" style={{width:"40px", fontSize:"10px"}}>7.6</p>
        </div>
        <div className="mb-3">
          <div className="small fw-medium  text-light mb-1">Project</div>
          <div className="fs-6 fw-bold">Myspace Layouts</div>
        </div>
          <p className='my-1' style={{width:"200px", height:"2px",backgroundColor:"white"}}></p>
        <div className="d-flex align-items-center">
          <div className="rounded-circle overflow-hidden me-2" style={{ width: '24px', height: '24px', border: '2px solid rgba(255,255,255,0.2)' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWi4bk1s8Q2HPdq4fAPfLVKO6I4UrbUGW93w&s" alt="Adriana" className="img-fluid" />
          </div>
          <div className='d-flex flex-column'>
            <span className="fw-semibold me-2">Adriana</span>
            <small className="text-muted" style={{fontSize:"10px"}}>2 days ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;

