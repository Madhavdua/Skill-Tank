import React from 'react'

function ActivityCard(props) {
    const {activity}=props;
    return (
        <>
            <div key={activity.id} className="d-flex align-items-center mb-3">
                <img
                    src={"https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"}
                    alt={activity.name}
                    className="rounded-circle me-2"
                    style={{ width: '32px', height: '32px', objectFit: 'cover' }}
                />
                <div className="flex-grow-1">
                    <div className="d-flex" >
                        <span className="fw-bold me-2">{activity.name}</span>
                        <span className="fw-medium small" >{activity.action}</span>
                    </div>
                    <small className="fw-medium">{activity.time}</small>
                </div>
            </div>
        </>
    )
}

export default ActivityCard