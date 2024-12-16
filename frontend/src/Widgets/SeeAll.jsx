import React, { useContext } from 'react'
import { X } from 'lucide-react'
import myContext from '../CreateContext'
import ActivityCard from './ActivityCard';
function SeeAll() {
    const c = useContext(myContext);
    const { title, list, type } = c.modalElement;
    return (
        <>
            {
                c.modalElement &&

                <div class="overlay">
                    <div class="overlay-content">
                        <button className='btn' onClick={() => { c.setshowModal(false) }}>
                            <X width={20} />
                        </button>
                        {
                            type === "wanted" && <div>
                                <h2>{title}</h2>
                                <div className="my-2 d-flex flex-column align-items-center">
                                    {list.map((element, i) => (
                                        <div key={i} className='card shadow my-2 p-2 hvr-float' style={{ width: "85%" }}>
                                            <span className="fw-medium me-2">{element.title}</span>
                                            <span className="fw-light small " >{element.reqCount} requests</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                        {
                            type === "activity" && <div>
                                <h2>{title}</h2>
                                <div className="activities-list">
                                    {list.map((activity, i) => (
                                        <div key={i} className='hvr-glow p-1 rounded' style={{ minWidth: "100%" }}>
                                            <ActivityCard activity={activity} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default SeeAll