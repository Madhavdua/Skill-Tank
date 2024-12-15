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

function Jobs() {
    const jobs = [
        {
            title: "Cyber Security",
            location: "Gurugram",
            icon: Shield,
            bgColor: "light",
            iconColor: "primary",
        },
        {
            title: "Data Science",
            location: "Andheri",
            icon: Database,
            bgColor: "info",
            iconColor: "white",
        },
        {
            title: "Web Development",
            location: "Bangalore",
            icon: Code,
            bgColor: "warning",
            iconColor: "dark",
        },
        {
            title: "Cloud Engineer",
            location: "Hyderabad",
            icon: Cloud,
            bgColor: "dark",
            iconColor: "light",
        },
        {
            title: "Product Manager",
            location: "Pune",
            icon: Briefcase,
            bgColor: "success",
            iconColor: "white",
        },
        {
            title: "UI/UX Designer",
            location: "Delhi",
            icon: Layout,
            bgColor: "primary",
            iconColor: "light",
        },
        {
            title: "Mobile App Developer",
            location: "Chennai",
            icon: Smartphone,
            bgColor: "secondary",
            iconColor: "white",
        },
        {
            title: "DevOps Engineer",
            location: "Noida",
            icon: Server,
            bgColor: "danger",
            iconColor: "white",
        },
        {
            title: "AI Engineer",
            location: "Mumbai",
            icon: Brain,
            bgColor: "info",
            iconColor: "dark",
        },
        {
            title: "Network Engineer",
            location: "Kolkata",
            icon: Wifi,
            bgColor: "primary",
            iconColor: "white",
        },
    ];


    return (
        <div className="card shadow p-3" style={{ width: "300px" }}>
            <h2 className="text-lg fw-medium">Jobs</h2>
            <p className='my-1' style={{width:"40px", height:"2px",backgroundColor:"blue"}}></p>
            <div
                className="d-flex"
                style={{overflowX: "scroll",scrollbarWidth: "none"}}
            >
                {jobs.map((job, index) => {
                    const Icon = job.icon;
                    return (
                        <div key={index} className="p-3">
                            <div className="card shadow" style={{ width: "250px", height: "200px" }}>
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
