import React from 'react'

function Bio() {

    return (
        <>
            <div className="shadow rounded row text-center mb-4" style={{ width: "260px" }}>
                <div className="col-4">
                    <h5 className="text-primary mb-1">8.2</h5>
                    <p className="text-muted " style={{ fontSize: "small" }}>Overall Rating</p>
                </div>
                <div className="col-4">
                    <h5 className="text-primary mb-1">75%</h5>
                    <p className="text-muted " style={{ fontSize: "small" }}>Completed Projects</p>
                </div>
                <div className="col-4">
                    <h5 className="text-primary mb-1">10</h5>
                    <p className="text-muted " style={{ fontSize: "small" }}>Proficient Skills</p>
                </div>
            </div>
        </>
    )
}

export default Bio