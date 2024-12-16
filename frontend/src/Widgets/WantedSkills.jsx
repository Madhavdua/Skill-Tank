import React from 'react'
import { wantedList } from './sampleData';
import { useContext } from 'react';
import myContext from '../CreateContext';
function WantedSkills() {
    const c=useContext(myContext)
    const list = [
        {
            title: "Digital Marketing",
            reqCount: 12
        },
        {
            title: "SOLID Principles",
            reqCount: 5
        },
        {
            title: "Android Development",
            reqCount: 15
        },
    ]
    return (
        <>
            <div className="card shadow" style={{ width: '300px' }}>
                <div className="card-body">
                    <div className="mx-3 text-center d-flex flex-column align-items-start">
                        <h6 className="card-title my-2 hvr-grow">MOST WANTED SKILLS (15)</h6>
                        <p className='my-1 mx-3 ' style={{ width: "130px", height: "2px", backgroundColor: "blue" }}></p>
                    </div>

                    <div className="my-2 d-flex flex-column align-items-center">
                        {list.map((element, i) => (
                            <div key={i} className='card shadow my-2 p-2 hvr-float' style={{ width: "85%" }}>
                                <span className="fw-medium me-2">{element.title}</span>
                                <span className="fw-light small " >{element.reqCount} requests</span>
                            </div>
                        ))}
                    </div>
                    <button className="btn btn-link text-decoration-none"
                        onClick={() => {
                            c.setmodalElement({ title: "Wanted skills", list: wantedList, type: "wanted" })
                            c.setshowModal(true);
                        }}
                    >See All</button>
                </div>
            </div>
        </>
    )
}

export default WantedSkills