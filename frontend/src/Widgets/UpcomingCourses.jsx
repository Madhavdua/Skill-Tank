import React from 'react';

function CourseCard({ title, progress, time }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="progress my-2">
          <div 
            className="progress-bar" 
            role="progressbar" 
            style={{width: `${progress}%`}} 
            aria-valuenow={progress} 
            aria-valuemin="0" 
            aria-valuemax="100"
          >
            {progress}%
          </div>
        </div>
        <p className="card-text text-muted">{time}</p>
      </div>
    </div>
  );
}

function UpcomingCourses() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Upcoming Courses</h5>
        <div className="row g-4 mt-2">
          <div className="col-md-6">
            <CourseCard title="Cyber Security" progress={62} time="2:00pm-4:00pm" />
          </div>
          <div className="col-md-6">
            <CourseCard title="UX Research" progress={20} time="10:00am-12:00pm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingCourses;

