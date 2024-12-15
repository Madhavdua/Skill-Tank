import React from 'react';
import pic from '../Images/profilePic.avif';
import Bio from './Bio';

function ProfileCard() {
  const skills = [
    { name: 'Java', progress: 45 },
    { name: 'C++', progress: 35 },
    { name: 'Python', progress: 80 },
    { name: 'Figma', progress: 85 },
    { name: 'Cloud System', progress: 40 },
    { name: 'IT Solution', progress: 70 }
  ];

  return (
    <div className="card shadow" style={{ width: '300px', height:"auto" }}>
      <div className="card-body p-3 d-flex flex-column align-items-center ">
        <div className="text-center mb-4 ">
          <img
            src={pic}
            alt="Profile"
            className="rounded-circle mb-3"
            style={{ width: '100px', height: '150px', objectFit: 'cover',  }}
          />
          <h3 className="mb-1">John Antony</h3>
          <h6 className="text-muted">"IT Specialist"</h6>
        </div>
          <Bio />
      </div>
    </div>
  );
}

export default ProfileCard;

