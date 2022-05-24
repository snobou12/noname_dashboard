import React,{FC} from 'react'
import "./About.scss";
const About:FC =()=> {
  return (
    <div className='about'>
      <div className="about__content">
<div className="about__title">
        We help monetize your Discord server
      </div>
      <div className="about__description">
        CactusDashboard is made to let you
easily manage your bot or group licenses
      </div>
      <div className="about__button">
      <button className='custom_button custom_button--primary'>Get started</button>

      </div>
      </div>
      
    </div>
  )
}

export default About