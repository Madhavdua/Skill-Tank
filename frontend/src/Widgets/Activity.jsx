import React, { useContext } from 'react'
import ActivityCard from './ActivityCard'
import myContext from '../CreateContext';
import {activityList as list}  from './sampleData'

function Activity() {
    const c=useContext(myContext);
    const activities = [
        {
            id: 1,
            name: 'Adriana',
            action: 'posted cloud system security',
            time: '1 Hours Ago'
        },
        {
            id: 2,
            name: 'Gracie',
            action: 'liked your Post',
            time: '1 Hours Ago'
        },
        {
            id: 3,
            name: 'Peter',
            action: 'posted cloud system security',
            time: '2 Hours Ago'
        },
        {
            id: 4,
            name: 'Patrica',
            action: 'posted cloud system security',
            time: '2 Hours Ago'
        },
        {
            id: 5,
            name: 'Peter',
            action: 'posted cloud system security',
            time: '2 Hours Ago'
        }
    ];
    
    return (
        <div className="card" style={{ width: '300px' }}>
            <div className="card-body">
                <div className="mb-3 hvr-grow">
                    <h5 className="card-title ">Activities (24)</h5>

                    <p className='my-1 mx-2' style={{ width: "80px", height: "3px", backgroundColor: "lightgreen" }}></p>
                </div>

                <div className="activities-list">
                    {activities.map((activity,i) => (
                        <div key={i} className='hvr-glow p-1 rounded' style={{minWidth:"100%"}}>
                            <ActivityCard activity={activity} />
                        </div>
                    ))}
                </div>
                <button className="btn btn-link text-decoration-none" onClick={()=>{
                    c.setmodalElement({title:"Activities", list:list,type:"activity"})
                    c.setshowModal(true);
                }}>See All</button>
            </div>
        </div>
    )
}

export default Activity