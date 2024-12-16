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

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function Home() {


  useEffect(() => {
    AOS.init({
      disable: () => window.innerWidth > 1024,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const c = useContext(myContext);
  return (
    <>
      <div className="home d-flex ">

        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="layout my-2 ">
          <div className='home-cards profile' data-aos="zoom-y-out" data-aos-delay="50">
            <ProfileCard />
          </div>
          <div className="home-cards deadline" data-aos="zoom-y-out" data-aos-delay="50">
            <Deadline />
          </div>
          <div className="home-cards skills" data-aos="zoom-y-out" data-aos-delay="50">
            <Skills />
          </div>
          <div className="home-cards wanted" data-aos="zoom-y-out" data-aos-delay="50">
            <WantedSkills />
          </div>
          <div className="home-cards ratings" data-aos="zoom-y-out" data-aos-delay="50">
            <RatingCard />
          </div>
          <div className="home-cards calendar" data-aos="zoom-y-out" data-aos-delay="50">
            <Calendar />
          </div>
          <div className="home-cards jobs" data-aos="zoom-y-out" data-aos-delay="50">
            <Jobs />
          </div>
          <div className="home-cards activity" data-aos="zoom-y-out" data-aos-delay="50">
            <Activity />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home