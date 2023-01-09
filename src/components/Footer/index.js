import React from 'react'
import "./style.scss"
import { ReactComponent as Logo } from '../../assets/gamiLogo.svg'
import Slide from 'react-reveal/Slide';

const Footer = () => {
  return (
    <div className='footer'>
      <Slide bottom>
        <div className='footer-logo'><Logo/></div>
        <div className='footer-elements'>
                <div className='element'>LAUNCHPAD</div>
                <div className='element'>MOVE</div>
                <div className='element'>MIDLE</div>
                <div className='element'>ASSIST</div>
                <div className='element'>TOOLS</div>
                <div className='element'>Buy GAMI</div>
        </div>
        <div className='footer-subdatas'>
            <div className='subdata'>© 2022, GAMI</div>
            <div className='subdata'>Privacy Policy</div>
            <div className='subdata'>Cookie Policy</div>
            <div className='subdata'>Terms Of Service</div>
        </div>
        </Slide>
    </div>
  )
}

export default Footer