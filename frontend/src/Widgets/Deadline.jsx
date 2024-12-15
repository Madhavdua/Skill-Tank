import React from 'react'

function Deadline() {
    const list = [
        { title: "AI/ML", time: 12 },
        { title: "AI/ML", time: 12 },
    ]
    return (
        <>
            <div className="card shadow" style={{ width: '300px' }}>
                <div className="card-body">
                    <div className="mx-1 text-center d-flex flex-column align-items-start">
                        <h5 className="card-title my-2 text-dark-emphasis">Deadline</h5>
                    </div>

                    <div className="my-2 d-flex justify-content-evenly">
                        {list.map((element,i) => (
                            <div key={i} className='d-flex flex-column align-items-center'>
                                <span className="fw-medium py-1 text-light-emphasis">{element.title}</span>
                                <span className="rounded-pill px-4 py-1" style={{ backgroundColor: "#67abf5" }}>{element.time}days</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deadline