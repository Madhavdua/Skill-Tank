import React from 'react'

function Skills() {
  const skills = [
    { name: 'Java', progress: 45 },
    { name: 'C++', progress: 30 },
    { name: 'Python', progress: 65 },
    { name: 'Figma', progress: 80 },
    { name: 'Cloud System', progress: 40 },
    { name: 'IT Solution', progress: 70 },
  ];
  return (
    <div className="card shadow skills-card" style={{ width: '300px' }}>
      <div className="card-body p-3">
        <h5 className="mb-3 hvr-sweep-to-left p-1">Skill Set</h5>
        {skills.map((skill, index) => (
          <div key={index} className="mb-3 ">
            <div className="d-flex justify-content-between mb-1 skill-name">
              <small>{skill.name}</small>
            </div>
            <div className="progress" style={{ height: '6px' }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: `${skill.progress}%` }}
                aria-valuenow={skill.progress}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills