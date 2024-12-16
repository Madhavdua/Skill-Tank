import React from "react";
import {
    Shield,
    Database,
    Code,
    Cloud,
    Briefcase,
    Layout,
    Smartphone,
    Server,
    Brain,
    Wifi
} from 'lucide-react';
import { jobs } from "./sampleData";
function Jobs() {    

    return (
        <div className="card shadow job-cont p-3  hvr-bounce-to-left" style={{ width: "300px" }}>
            <h2 className="text-lg px-2 fw-medium" style={{ width: "fit-content" }}>Jobs</h2>
            <p className='my-1' style={{ width: "40px", height: "2px", backgroundColor: "blue" }}></p>
            <div
                className="d-flex "
                style={{ overflowX: "scroll", scrollbarWidth: "none" }}
            >
                {jobs.map((job, index) => {
                    const Icon = job.icon;
                    return (
                        <div key={index} className="p-3 hvr-backward" >
                            <div className="card shadow" style={{ width: "250px", height: "200px"}}>
                                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                    <div className={`p-2 rounded bg-${job.bgColor}`}>
                                        <Icon className={`h-6 w-6 text-${job.iconColor}`} />
                                    </div>
                                    <div className="text-center mt-2">
                                        <h5 className="card-title mb-1">{job.title}</h5>
                                        <p className="card-text text-muted">{job.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

    );
}

export default Jobs;
