import React from 'react'
import Activity from './Activity'
import ProfileCard from './ProfileCard'
import Skills from './Skills'
import WantedSkills from './WantedSkills'
import Jobs from './Jobs'
import Calendar from './Calendar'
import RatingCard from './RatingCard'
import Deadline from './Deadline'
import { useContext } from 'react'
import myContext from '../CreateContext'
import Sidebar from './Sidebar'
function Home() {
  const c = useContext(myContext);
  return (
    <>
      <div className="home d-flex">

        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="layout my-2 ">
          <div className='home-cards profile'>
            <ProfileCard />
          </div>
          <div className="home-cards deadline">
            <Deadline />
          </div>
          <div className="home-cards skills">
            <Skills />
          </div>
          <div className="home-cards wanted">
            <WantedSkills />
          </div>
          <div className="home-cards ratings">
            <RatingCard />
          </div>
          <div className="home-cards calendar">
            <Calendar />
          </div>
          <div className="home-cards jobs">
            <Jobs />
          </div>
          <div className="home-cards activity">
            <Activity />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home